import React, { Component } from "react";

export class TitleComponent extends Component {
  render() {
    return (
      <div>
        <header style={headerStyle}>Redux Crash Course</header>
      </div>
    );
  }
}

const headerStyle = {
  background: "cyan",
  color: "black",
  fontSize: "1.5em",
  padding: "1em",
  fontWeight: "bold"
};

export default TitleComponent;
