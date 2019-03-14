import React from "react";

// Importing components
import Header from "./components/Header";
import Display from "./components/Display";
import ToggleForm from "./components/ToggleForm";

class App extends React.Component {

  //intialize state
  constructor() {
    super();
    this.state = {
      phoneData: []
    };
  }

  // get the data from form component 
  getFormData = (name, phoneno) => {
    const { phoneData } = this.state;
    this.setState({
      phoneData: [...phoneData, { name, phoneno }]
    });
  };


  // delete the data
  deleteData = name => {
    const remainData = this.state.phoneData.filter(item => item.name !== name);
    this.setState({
      phoneData: [...remainData]
    });
  };

  render() {
    return (
      <div className="App">
        <Header title="Phone Directory" />
        <ToggleForm getFormData={this.getFormData} />
        <Display
          phoneData={this.state.phoneData}
          deleteData={this.deleteData}
        />
      </div>
    );
  }
}

export default App;
