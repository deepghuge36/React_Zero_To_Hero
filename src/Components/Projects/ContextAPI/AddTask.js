import React, { useContext, useState } from 'react';
import { TaskConsumer } from './ContextTask';
// import { useHistory } from 'react-router-dom';
export default function AddTask() {
  const [task, setTask] = useContext(TaskConsumer);
  const [formData, setFormData] = useState({
    id: "",
    title: "",
    name: "",
    duration: "",
    description: ""
  });

  const _onHandleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value }
    );
  };

  const onAddTasks = () => {
    const id = task.length + 1;
    setTask(task => [...task, {
      id: id,
      title: formData.title,
      name: formData.name,
      duration: formData.duration,
      description: formData.description,
    }]);
  };



  return (
    <div>
      <h2> Add Task</h2>
      <div className="container mt-5">
        <div className="form-group">
          <label>Title</label>
          <input type="text" className="form-control" name="title" onChange={_onHandleChange} />
        </div>
        <div className="form-group">
          <label>Name</label>
          <input type="text" className="form-control" name="name" onChange={_onHandleChange} />
        </div>
        <div className="form-group">
          <label>Duration</label>
          <input type="number" className="form-control" name="duration" onChange={_onHandleChange} />
        </div>
        <div className="form-group">
          <label>Description</label>
          <input type="text" className="form-control" name="description" onChange={_onHandleChange} />
        </div>
        <button type="button" className="btn btn-info" onClick={onAddTasks}> Add Movie</button>
      </div>
    </div>
  );
}
