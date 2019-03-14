import React, { Component } from "react";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      phoneno: ""
    };
  }
  // handle the changes
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = () => {
    const { name, phoneno } = this.state;
    // empty the input fields
    this.setState({ name: "", phoneno: "" });
    this.props.handleSubmit(name, phoneno);
  };
  render() {
    return (
      <div>
        <input
          name="name"
          placeholder="Name ..."
          value={this.state.name}
          onChange={this.handleChange}
        />
        <br />
        <br />
        <input
          name="phoneno"
          placeholder=" Mobile no.."
          value={this.state.phoneno}
          onChange={this.handleChange}
        />
        <br />
        <br />
        <button onClick={this.onSubmit}>Submit</button>
        <div>
          <br />
          {this.state.name}
          <br />
          {this.state.phoneno}
        </div>
      </div>
    );
  }
}
export default Form;
