import React, { Component } from "react";
import Header from "./components/Header";
import General from "./components/General";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Button from "./components/Button";

class App extends Component {
  constructor() {
    super();
    this.state = {
      formMode: "edit",
    };
    this.toggleForm = this.toggleForm.bind(this);
  }

  toggleForm = () => {
    let newMode = "";
    if (this.state.formMode === "edit") {
      newMode = "review";
    } else {
      newMode = "edit";
    }
    this.setState({
      formMode: newMode,
    });
  };

  render() {
    return (
      <div className="container-fluid">
        <Header title="CV Generator" />
        <General formMode={this.state.formMode} />
        <Education formMode={this.state.formMode} />
        <Experience formMode={this.state.formMode} />
        <div className="row">
          <Button
            text={this.state.formMode === "edit" ? "submit" : "edit"}
            onClick={this.toggleForm}
          />
        </div>
      </div>
    );
  }
}

export default App;
