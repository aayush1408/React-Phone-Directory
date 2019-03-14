import React from "react";
import "./index.css";

class Display extends React.Component {
  deleteData = name => {
    this.props.deleteData(name);
  };

  render() {
    return (
      <ul>
        {this.props.phoneData.map((item, id) => (
          <li key={id}>
            {item.name} - {item.phoneno}
            <button
              onClick={() => {
                this.props.deleteData(item.name);
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

export default Display;
