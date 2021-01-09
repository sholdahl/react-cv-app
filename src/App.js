import React, { useState } from "react";
import Header from "./components/Header";
import General from "./components/General";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Button from "./components/Button";

const App = props => {
  const [formMode, setFormMode] = useState("edit");

  const toggleForm = () => {
    formMode === "edit" ? setFormMode("review") : setFormMode("edit")
  };

  return(
    <div className="container-fluid">
        <Header title="CV Generator" />
        <General formMode={formMode} />
        <Education formMode={formMode} />
        <Experience formMode={formMode} />
        <div className="row">
          <Button
            text={formMode === "edit" ? "submit" : "edit"}
            onClick={toggleForm}
          />
        </div>
      </div>
  )
}

export default App;
