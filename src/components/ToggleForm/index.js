import React, { Fragment, Component } from "react";
import Form from "../Form";

// Toggles the form
class ToggleForm extends Component {
  state = {
    showForm: false
  };

  // toggleForm method
  toggleForm = () => {
    this.setState({
      showForm: !this.state.showForm
    });
  };

  //handle submit
  handleSubmit = (name, phoneno) => {
    this.props.getFormData(name, phoneno);
  };

  render() {
    return (
      <Fragment>
        <div>
          <button onClick={this.toggleForm}>Add</button>
          <div>
            <br />
            {this.state.showForm && <Form handleSubmit={this.handleSubmit} />}
          </div>
        </div>
      </Fragment>
    );
  }
}

export default ToggleForm;
