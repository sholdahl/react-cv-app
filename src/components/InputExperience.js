import React, { Component } from "react";
import InputText from "./InputText";
import InputDate from "./InputDate";
import InputTextArea from "./InputTextArea";
import Button from "./Button";

class InputExperience extends Component {
  constructor() {
    super();
    this.state = {
      companyName: "",
      jobTitle: "",
      experienceStartDate: "",
      experienceEndDate: "",
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
          inputLabel="Company Name"
          inputName="companyName"
          colClass="col-12 col-sm-6"
          onChange={this.handleChange}
          formMode={formMode}
        />
        <InputText
          inputLabel="Job Title"
          inputName="jobTitle"
          colClass="col-12 col-sm-6"
          onChange={this.handleChange}
          formMode={formMode}
        />
        <InputDate
          inputLabel="Start Date"
          inputName="experienceStartDate"
          colClass="col-12 col-sm-6"
          onChange={this.handleChange}
          formMode={formMode}
        />
        <InputDate
          inputLabel="End Date"
          inputName="experienceEndDate"
          colClass="col-12 col-sm-6"
          onChange={this.handleChange}
          formMode={formMode}
        />
        <InputTextArea
          inputLabel="Job Description"
          inputName="jobDescription1"
          colClass="col-12"
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

export default InputExperience;
