import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { uuid } from 'uuidv4';
import './style/stopwatch.css';
export default class StopWatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      laps: [],
      text: '00:00:00',
      running: false,
      milliseconds: 0,
      seconds: 0,
      minutes: 0
    };

  }

  start = () => {
    if (!this.state.running) {
      this.setState({ running: true });
      this.watch = setInterval(() => this.step(), 10);
    }
  };

  stop = () => {
    this.setState({ running: false });
    clearInterval(this.watch);
  };

  step = () => {
    if (!this.state.running) return;
    this.calculate();
    this.print();
  };

  reset = () => {
    this.setState({
      minutes: 0,
      seconds: 0,
      milliseconds: 0,
      text: '00:00:00',
      laps: []
    });
    console.log(this.state.seconds);
  };

  print = () => {
    this.setState({ text: this.format() });
  };

  format = () => {
    return `${pad0(this.state.minutes)}:${pad0(this.state.seconds)}:${pad0(this.state.milliseconds)}`;
  };

  calculate = () => {
    this.state.milliseconds += 1;
    if (this.state.milliseconds >= 100) {
      this.state.seconds += 1;
      this.state.milliseconds = 0;
    }
    if (this.state.seconds >= 60) {
      this.state.minutes += 1;
      this.state.seconds = 0;
    }
  };

  lap = () => {
    if (this.state.running) {
      this.setState({ laps: this.state.laps.concat(this.state.text) });
    }
  };

  render() {
    return (
      <div className='text-center'>
        <h1 className='w-100 p-5'>{this.state.text}</h1>
        <nav>
          <Button className='mx-3' color="primary" onClick={this.start}>Start</Button>
          <Button className='mx-3' color="warning" onClick={this.stop}>Stop</Button>
          <Button className='mx-3' color="danger" onClick={this.reset}>Reset</Button>
          <Button className='mx-3' color="success" onClick={this.lap}>Lap</Button>
        </nav>
        <ul >{this.state.laps.map((lapTime) =>
          <li
            className="my-3"
            key={uuid()}>
            <h5>{lapTime}</h5>
          </li>)}
        </ul>
      </div >
    );
  }
};

function pad0(value) {
  let result = value.toString();
  if (result.length < 2) {
    result = '0' + result;

    return result;
  };
}
