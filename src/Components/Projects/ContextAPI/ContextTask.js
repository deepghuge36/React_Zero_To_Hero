import React, { createContext, useState } from 'react';

export const TaskConsumer = createContext();
export function TaskProvider(props) {
  const [task, setTask] = useState([
    {
      id: 1,
      title: "create title",
      name: "deepak",
      duration: "2 hrs",
      description: "create title as the story goes"
    }
  ]);
  return (
    <TaskConsumer.Provider value={[task, setTask]}>
      {props.children}
    </ TaskConsumer.Provider>
  );
}
