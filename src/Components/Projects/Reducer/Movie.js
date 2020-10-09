import React, { useContext } from 'react';
import { MovieConsumer } from './ContextMovies';
export default function Movie(props) {
  const [movies, setMovies] = useContext(MovieConsumer);

  const deleteMovie = (id) => {
    setMovies({
      type: "DELETE_MOVIES",
      payload: id
    });
  };

  return (
    <div>
      <div className="col-md-4" key={props.data.id}>
        <div className="mt-3 card p-3">
          <h3>Title: {props.data.title}</h3>
          <p>Price: {props.data.price}</p>
          <p>Id: {props.data.id}</p>
          <button className="btn btn-danger" onClick={() => deleteMovie(props.data.id)}>Delete</button>
        </div>
      </div>
    </div>
  );
}
