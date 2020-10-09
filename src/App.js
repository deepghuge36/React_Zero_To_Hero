import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Components/Home';
import Navbar from './Components/Main/Navbar';
import Calculator from './Components/Projects/Calculator/Calculator';
import InputState from './Components/Projects/InputState';
import StopWatch from './Components/Projects/StopWatch/stopwatch1';
import Bmi from './Components/Projects/BMI/Bmi';
import Thermometer from './Components/Projects/Thermometer/Thermometer';
import ToDoList from './Components/Projects/ToDoList/ToDoList';
import FormData from './Components/Projects/Form/FormData';
import TodoList_Hooks from './Components/Projects/TodoList_Hook/TodoList_Hooks';
import CounterHOC from './Components/Projects/HOC/CounterHOC';
import TaskView from './Components/Projects/ContextAPI/TaskView';
import AddTask from './Components/Projects/ContextAPI/AddTask';
import { TaskProvider } from './Components/Projects/ContextAPI/ContextTask';
import MovieProvider from './Components/Projects/Reducer/ContextMovies';
import viewMovies from './Components/Projects/Reducer/viewMovies';
import Movie from './Components/Projects/Reducer/Movie';
import AddMovies from './Components/Projects/Reducer/AddMovies';

const App = () =>
  <Router>
    <Navbar />
    <Route exact path='/' component={Home} ></Route>
    <Route exact path='/project/inputstate' component={InputState}></Route>
    <Route exact path='/project/calculator' component={Calculator}></Route>
    <Route exact path='/project/stopwatch' component={StopWatch}></Route>
    <Route exact path='/project/bmi' component={Bmi}></Route>
    <Route exact path='/project/thermometer' component={Thermometer}></Route>
    <Route exact path='/project/form' component={FormData}></Route>
    <Route exact path='/project/todolist' component={ToDoList}></Route>
    <Route exact path='/project/todolisthooks' component={TodoList_Hooks}></Route>
    <Route exact path='/project/hoccounter' component={CounterHOC}></Route>
    <TaskProvider>
      <Route exact path='/project/view-tasks' component={TaskView} ></Route>
      <Route exact path='/project/add-tasks' component={AddTask}></Route>
    </TaskProvider>
    <MovieProvider>
      <Route exact path='/project/view-movies' component={viewMovies}></Route>
      <Route exact path='/project/add-movies' component={AddMovies}></Route>
    </MovieProvider>

  </Router>;


export default App;
