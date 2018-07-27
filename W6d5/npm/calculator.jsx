import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {num1: "", num2: "", result: 0};
    this.setNum1 = this.setNum1.bind(this);
    this.setNum2 = this.setNum2.bind(this);
    this.add = this.add.bind(this);
    this.subtract = this.subtract.bind(this);
    this.divide = this.divide.bind(this);
    this.multiply = this.multiply.bind(this);
    this.clear = this.clear.bind(this);
    // your code here
  }

  // your code here

  render() {
    return (
      <div>
        <h1>{this.state.result}</h1>
        <input onChange={this.setNum1} value={this.state.num1}/>
        <input onChange={this.setNum2} value={this.state.num2}/>
        <br/>
        <button onClick={this.clear}>Clear</button>
        <button onClick={this.add}>Add</button>
        <button onClick={this.divide}>Divide</button>
        <button onClick={this.multiply}>Multiply</button>
        <button onClick={this.subtract}>Subtract</button>

      </div>
    );
  }

  clear(e) {

    this.setState({num1: ""});
    this.setState({num2: ""});
    this.setState({result: 0});
  }
  setNum1(e) {
    const num1 = e.target.value ? parseInt(e.target.value) : "";
    this.setState({num1: num1});
  }
  setNum2(e) {
    const num2 = e.target.value ? parseInt(e.target.value) : "";
    this.setState({num2: num2});
  }
  add(e) {
    const result = this.state.num1 + this.state.num2;
    this.setState({result});
  }
  subtract(e){
    const result = this.state.num1 - this.state.num2;
    this.setState({result});
  }
  divide(e) {
    const result = this.state.num1/this.state.num2;
    this.setState({result});
  }
  multiply(e) {
    const result = this.state.num1 * this.state.num2;
    this.setState({result});
  }

}

export default Calculator;
