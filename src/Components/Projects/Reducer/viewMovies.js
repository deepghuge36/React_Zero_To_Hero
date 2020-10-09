import React, { useContext } from 'react';
import { MovieConsumer } from './ContextMovies';
import Movie from './Movie';
export default function MoviesList() {
  const [movies, setMovies] = useContext(MovieConsumer);
  return (
    <div className="container my-5">
      <h1 className="text-center text-primary">Movies</h1>
      <h3 className='text-left text-danger'>{movies.length}</h3>
      {/* <div className="row"> */}
      {/* {console.log(movies)} */}
      {movies.map((data) => (
        <Movie data={data} key={data.id}></Movie>
      ))}
      {/* </div> */}
    </div>
  );
}