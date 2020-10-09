import React, { Component } from 'react';

const HocCounter = (WrappedComponent, number = 1) => {
  class HOC extends Component {
    constructor() {
      super();
      this.state = {
        count: 0,
      };
    }
    _onButtonClick = () => {
      this.setState({ count: this.state.count + number });
    };

    _onReset = () => {
      this.setState({ count: 0 });
    };
    render() {
      const { count } = this.state;
      return (
        <div>
          <WrappedComponent onButtonClick={this._onButtonClick} count={count} onReset={this._onReset}></WrappedComponent>
        </div>
      );
    }
  }
  return HOC;
};

export default HocCounter;