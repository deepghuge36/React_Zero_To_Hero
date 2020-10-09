import React, { Component } from 'react';

export default class Bmi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: '',
      weight: '',
      bmi: 0,
      bmi_message: "",
      bmi_cls: "",
    };
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = () => {
    console.log("Button click");
    var h = this.state.height;
    var he = h / 100;
    var bmi = this.state.weight / (he * he);
    this.setState({ bmi: bmi });
    if (bmi < 18.5) {
      this.setState({ bmi_message: "You are Under Weight", bmi_cls: 'text-danger' });
    } else if (bmi > 18.5 && bmi < 25) {
      this.setState({ bmi_message: "You are Normal Weight", bmi_cls: 'text-success' });
    } else if (bmi > 25 && bmi < 30) {
      this.setState({ bmi_message: "You are Over Weight", bmi_cls: 'text-warning' });
    } else if (bmi > 30) {
      this.setState({ bmi_message: "You are Obese", bmi_cls: 'text-danger' });
    }
  };

  render() {
    const { height, weight, bmi, bmi_cls, bmi_message } = this.state;
    return (
      <div className="container ">
        <div className="row">
          <label for="height">Enter Height in cms</label><br></br>
          <input label="Height" type="number" placeholder="Enter height in meters" name="height" value={height} onChange={this.handleChange} />
        </div>
        <div className="row">
          <input label="Weight" type="number" placeholder="Enter weight in kg" name="weight" value={weight}
            onChange={this.handleChange} />
        </div>
        <div>
          <button color="primary" className="my-4" onClick={this.onSubmit}>Submit</button>
        </div>
        <h3 className="">Your BMI is: {
          bmi.toFixed(2)
        }</h3>
        <h3 className={bmi_cls}>{bmi_message}</h3>
      </div>
    );
  }
}