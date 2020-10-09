import React, { Component } from 'react';
import Keypad from './Keypad';
import Output from './Output';
import { } from "./style/Calculator.css";
export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: '',
    };
  }

  buttonPressed = (buttonName) => {
    if (buttonName === "=") {
      this.calculate();
    } else if (buttonName === "C") {
      this.reset();
    } else if (buttonName === "CE") {
      this.backspace();
    } else {
      this.setState({
        result: this.state.result + buttonName
      });
    }
  };

  calculate = () => {
    var checkResult = '';
    checkResult = this.state.result.includes('--') ? this.state.result.replace('--', '+') : this.state.result;
    try {
      this.setState({
        // eslint-disable-next-line
        result: (eval(checkResult) || "") + ""
      });
    } catch (e) {
      this.setState({
        result: "error"
      });

    }
  };

  reset = () => this.setState({
    result: ""
  });

  backspace = () =>
    this.setState({
      result: this.state.result.slice(0, -1)
    });

  render() {
    return (
      <React.Fragment>
        <Output result={this.state.result} />
        <Keypad buttonPressed={this.buttonPressed} />
      </React.Fragment>
    );
  }
}
