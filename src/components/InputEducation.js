import React, { Component } from "react";
import InputText from "./InputText";
import InputDate from "./InputDate";
import Button from "./Button";

class InputEducation extends Component {
  constructor() {
    super();
    this.state = {
      schoolName: "",
      studyTitle: "",
      educationStartDate: "",
      educationEndDate: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { id, formMode, deleteMethod } = this.props;
    return (
      <div className="form-group row" data-id={id}>
        <InputText
          inputLabel="School Name"
          inputName="schoolName"
          colClass="col-12 col-sm-6"
          onChange={this.handleChange}
          formMode={formMode}
        />
        <InputText
          inputLabel="Degree or Title of Study"
          inputName="studyTitle"
          colClass="col-12 col-sm-6"
          onChange={this.handleChange}
          formMode={formMode}
        />
        <InputDate
          inputLabel="Start Date"
          inputName="educationStartDate"
          colClass="col-12 col-sm-6"
          onChange={this.handleChange}
          formMode={formMode}
        />
        <InputDate
          inputLabel="End Date"
          inputName="educationEndDate"
          colClass="col-12 col-sm-6"
          onChange={this.handleChange}
          formMode={formMode}
        />
        {formMode === "edit" ? (
          <Button text="remove" type="delete" id={id} onClick={deleteMethod} />
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default InputEducation;
