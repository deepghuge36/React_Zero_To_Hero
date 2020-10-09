import React, { useContext } from 'react';
import { TaskConsumer } from './ContextTask';
export default function Tasks(props) {
  const [task, setTask] = useContext(TaskConsumer);
  const deleteTask = (id) => {
    let filteredTasks = task.filter((data) => {
      return data.id !== id;
    });
    setTask(filteredTasks);
  };
  return (
    <div class="card" >
      <div class="card-body" key={props.data.id}>
        <h3 class="card-title">Title: {props.data.title}</h3>
        <p class="card-text">name: {props.data.name}</p>
        <p class="card-text">time: {props.data.duration}</p>
        <p class="card-text">description : {props.data.description}</p>
      </div>
      <button class="btn btn-danger" onClick={() => deleteTask(props.data.id)}>Delete Task</button>
    </div>
  );
}
