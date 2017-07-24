import React, { Component } from 'react';
import './App.css';

class Calculator extends Component {
  constructor(props) {
    super();
    this.state = {
      firstNumber: 0,
      secondNumber: 0,
      result: 0
    }

    this.updateField = this.updateField.bind(this);
  }

  add() {
    this.setState({result: Number(this.state.firstNumber) + Number(this.state.secondNumber)});
  }

  subtract(){
    this.setState({result:Number(this.state.firstNumber) - Number(this.state.secondNumber)});
  }

  multiply() {
    this.setState({result: Number(this.state.firstNumber) * Number(this.state.secondNumber)});
  }

  divide() {
    this.setState({result:Number(this.state.firstNumber)/Number(this.state.secondNumber)});
  }

  updateField(e) {
    if(e.target.id === "1") {
      this.setState({firstNumber: e.target.value});
    } else {
      this.setState({secondNumber: e.target.value});
    }

  }


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <input
            id="1"
            type="number"
            onChange={this.updateField}
            value={this.state.firstNumber}/>
          <input
            id="2"
            type="number"
            onChange={this.updateField}
            value={this.state.secondNumber}/>
          <button onClick = {this.add.bind(this)}>+</button>
          <button onClick = {this.subtract.bind(this)}>-</button>
          <button onClick = {this.multiply.bind(this)}>/</button>
          <button onClick = {this.divide.bind(this)}>x</button>
          <h2>{this.state.result}</h2>
        </div>
      
      </div>
    );
  }
}

export default Calculator;
