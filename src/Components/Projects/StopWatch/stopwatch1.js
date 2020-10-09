import React, { Component } from 'react';
import { Jumbotron, Button } from 'reactstrap';
export default class stopwatch1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hours: 0,
      minutes: 0,
      seconds: 0,
      milliseconds: 0
    };
  }
  x;
  startCounting = () => {
    this.x = setInterval(this.incr, 10);
  };

  incr = () => {
    this.setState({ milliseconds: this.state.milliseconds + 1 });
    if (this.state.milliseconds > 99) {
      this.setState({ seconds: this.state.seconds + 1, milliseconds: 0 });
    }
    if (this.state.seconds > 59) {
      this.setState({ minute: this.state.minutes + 1, seconds: 0 });
    }
    if (this.state.minutes > 59) {
      this.setState({ hours: this.state.hours + 1, minute: 0 });
    }
  };

  stopCounter = () => {
    clearInterval(this.x);
  };
  resetCounter = () => {
    this.setState({ hours: 0, minutes: 0, seconds: 0, milliseconds: 0 });
  };

  render() {
    const { hours, minutes: minutes, seconds, milliseconds: milliseconds } = this.state;
    return (

      <div className="container">
        <Jumbotron>
          <div className="row text-center justify-content-center">
            <div className="col-md-2">
              <h1 className="display-1">{hours} :</h1>
              <p className="bg-dark text-light mt-3">Hours</p>
            </div>
            <div className="col-md-2">
              <h1 className="display-1">{minutes} :</h1>
              <p className="bg-dark text-light mt-3">minutes</p>
            </div>
            <div className="col-md-2">
              <h1 className="display-1">{seconds} :</h1>
              <p className="bg-dark text-light mt-3">Seconds</p>
            </div>
            <div className="col-md-2">
              <h1 className="display-1">{milliseconds}</h1>
              <p className="bg-dark text-light mt-3">Milliseconds</p>
            </div>
          </div>
          <div className="text-center mt-5">
            <button className="btn btn-info mr-3" onClick={this.startCounting}>Start</button>
            <button className="btn btn-dark mr-3" onClick={this.stopCounter}>Stop</button>
            <button className="btn btn-danger" onClick={this.resetCounter}>Reset</button>
          </div>
        </Jumbotron>
      </div>
    );
  }
}
