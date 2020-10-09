import React, { createContext, useReducer, useState } from 'react';


export const MovieConsumer = createContext();

export default function MovieProvider(props) {
  const initialData = [{
    id: 1,
    title: "movie name",
    price: "movie price"
  }];

  const reducerFunction = (movies, action) => {
    switch (action.type) {
      case "ADD_MOVIES":
        return [...movies, action.payload];
      case "DELETE_MOVIES":
        return movies.filter((data) => {
          return data.id !== action.payload;
        });
      default:
        return movies;
    }
  };

  // const [movies, serMovies] = useState(initialData);
  const [movies, setMovies] = useReducer(reducerFunction, initialData);
  return (
    <MovieConsumer.Provider value={[movies, setMovies]}>
      {props.children}
    </MovieConsumer.Provider>
  );
}
