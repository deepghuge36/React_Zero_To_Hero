import React, { Component } from 'react';
import { Button, Container } from 'reactstrap';
export default class Keypad extends Component {
  buttonPressed = (e) => {
    this.props.buttonPressed(e.target.name);
  };
  render() {
    return (
      <React.Fragment>
        <Container className="themed-container text-center">
          <Button outline color="info" className="mx-2 my-1" name="1" onClick={this.buttonPressed}>1</Button>
          <Button outline color="info" className="mx-2 my-1" name="2" onClick={this.buttonPressed}>2</Button>
          <Button outline color="info" className="mx-2 my-1" name="3" onClick={this.buttonPressed}>3</Button>
          <Button outline color="warning" className="mx-2 my-1" name="+" onClick={this.buttonPressed}>+</Button>
          <br></br>
          <Button outline color="info" className="mx-2 my-1" name="4" onClick={this.buttonPressed}>4</Button>
          <Button outline color="info" className="mx-2 my-1" name="5" onClick={this.buttonPressed}>5</Button>
          <Button outline color="info" className="mx-2 my-1" name="6" onClick={this.buttonPressed}>6</Button>
          <Button outline color="warning" className="mx-2 my-1" name="-" onClick={this.buttonPressed}>-</Button>
          <br></br>
          <Button outline color="info" className="mx-2 my-1" name="7" onClick={this.buttonPressed}>7</Button>
          <Button outline color="info" className="mx-2 my-1" name="8" onClick={this.buttonPressed}>8</Button>
          <Button outline color="info" className="mx-2 my-1" name="9" onClick={this.buttonPressed}>9</Button>
          <Button outline color="warning" className="mx-2 my-1" name="/" onClick={this.buttonPressed}>/</Button>
          <br></br>
          <Button outline color="info" className="mx-2 my-1" name="." onClick={this.buttonPressed}>.</Button>
          <Button outline color="info" className="mx-2 my-1" name="0" onClick={this.buttonPressed}>0</Button>
          <Button color="primary" className="mx-2 my-1" name="=" onClick={this.buttonPressed}>=</Button>
          <Button outline color="warning" className="mx-2 my-1" name="*" onClick={this.buttonPressed}>*</Button>
          <br></br>
          <Button outline color="danger" className="mx-2 my-1" name="CE" onClick={this.buttonPressed}>CE</Button>
          <Button outline color="warning" className="mx-2 my-1" name="C" onClick={this.buttonPressed}>C</Button>
          <Button outline color="warning" className="mx-2 my-1" name="(" onClick={this.buttonPressed}>(</Button>
          <Button outline color="warning" className="mx-2 my-1" name=")" onClick={this.buttonPressed}>)</Button>
        </Container >
      </React.Fragment>
    );
  }
}
