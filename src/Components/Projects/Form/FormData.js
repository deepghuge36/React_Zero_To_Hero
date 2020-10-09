import React, { useState } from 'react';
import { Button } from 'reactstrap';

export default function FormData() {

  var initialData = {
    name: '',
    email: '',
  };

  const [formData, setFormData] = useState(initialData);
  var [newformData, setNewFormData] = useState(formData);

  const _onHandleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const _onButtonClick = () => {
    console.log(formData);
    setNewFormData(
      newformData = {
        name: formData.name,
        email: formData.email,
      }
    );
  };


  return (
    <div>
      <div className='form-group'>
        <label>Name</label>
        <input type='text' name='name' onChange={_onHandleChange}></input>
      </div>
      <div className='form-group'>
        <label>email</label>
        <input type='text' name='email' onChange={_onHandleChange}></input>
      </div>
      <Button color='primary' onClick={_onButtonClick}>Submit</Button>
      <h1>
        {newformData.name}
      </h1>
      <p>
        {newformData.email}
      </p>
    </div>
  );
};