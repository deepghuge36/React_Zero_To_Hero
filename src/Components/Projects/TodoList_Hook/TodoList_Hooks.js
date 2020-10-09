import React, { useState } from 'react';
// import { uuid } from 'uuidv4';

export default function TodoList_Hooks() {
  const [newTodo, setNewTodo] = useState('');
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "add more todo"
    }, {
      id: 2,
      text: "add more todo"
    }, {
      id: 3,
      text: "add more todo"
    }
  ]);

  // const onHandleChange = e => {
  //   e.preventDefault();
  //   setNewTodo(e.target.value);
  // };

  const onSubmit = e => {
    e.preventDefault();
    if (todos === "") return;
    setTodos([...todos, { id: Date.now(), text: newTodo }]);
    console.log("clicked");
    e.target.reset();
  };

  const onDeleteTodo = (match) => {
    setTodos(todos.filter(
      (todo) => todo.id !== match));
  };

  return (
    <div className='container'>
      <form onSubmit={onSubmit}>
        <div>
          <input
            type='text'
            placeholder='type your todo'
            // onChange={onHandleChange}
            onChange={(e) => setNewTodo(e.target.value)}
          />
        </div>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              {todo.text}
              <a className='btn btn-danger'
                onClick={() => onDeleteTodo(todo.id)}>X</a>
            </li>
          ))}
        </ul>
      </form>
    </div >
  );
}
