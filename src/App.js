import React, { Component } from "react";
import Header from "./components/Header";
import General from "./components/General";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Button from "./components/Button";

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="container-fluid">
        <Header title="CV Generator" />
        <General />
        <Education />
        <Experience />
        <Button text="submit" />
      </div>
    );
  }
}

export default App;
