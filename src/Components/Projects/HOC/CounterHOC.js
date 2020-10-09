import React, { Component } from 'react';
import HocCounter from './HOC';
class CounterHOC extends Component {

  render() {
    const { count, onButtonClick, onReset } = this.props;
    return (
      <div>
        <h1>Counter</h1>
        <button onClick={onButtonClick}>You have clicked {count}</button>
        <br></br>
        <button onClick={onReset}>Reset</button>
      </div>
    );
  }
}
export default HocCounter(CounterHOC);