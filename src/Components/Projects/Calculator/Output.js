import React, { Component } from 'react';

export default class Output extends Component {
  render() {
    return (
      <div className="justify-content-center">
        <h2 className="text-center">Calculator</h2>
        <p className="text-center mx-2 py-3">{this.props.result}</p>
      </div>
    );
  }
}
