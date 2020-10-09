import React, { useContext, useState } from 'react';
import { MovieConsumer } from './ContextMovies';

export default function AddMovies() {
  const [movies, setMovies] = useContext(MovieConsumer);
  const [formData, setFormData] = useState({
    title: "",
    price: ""
  });

  const onhandleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const onAddMovies = () => {
    //console.log(formData);
    const id = movies.length + 1;
    //setMovies(movies=>[...movies, {id:id, title:formData.title, price:formData.price}]);
    setMovies({ type: "ADD_MOVIES", payload: { id: id, title: formData.title, price: formData.price } });

  };

  return (
    <div className="container mt-5">
      <div className="form-group">
        <label>Title</label>
        <input type="text" className="form-control" name="title" value={formData.title} onChange={onhandleChange} />
      </div>
      <div className="form-group">
        <label>Price</label>
        <input type="text" className="form-control" name="price" value={formData.price} onChange={onhandleChange} />
      </div>
      <button type="button" className="btn btn-info" onClick={onAddMovies}> Add Movie</button>
    </div>
  );
}
