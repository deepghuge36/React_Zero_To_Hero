import React, { useContext } from 'react';
import { TaskConsumer } from './ContextTask';
import Tasks from './Tasks';
export default function TaskView() {
  const [task] = useContext(TaskConsumer);
  console.log(task.length);

  return (
    <div className="container my-5">
      <h1 className="text-center text-warning">To Do TaskList</h1>
      <h5>Number of Tasks Available:-</h5>
      <h3 className='text-danger'>{task.length}</h3>
      <div className="row" >
        {task.map((data) => (
          <Tasks data={data} key={data.id}></Tasks>
        ))}
      </div>
    </div >
  );
}
