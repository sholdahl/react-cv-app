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
    console.log(this.state);
  };

  render() {
    const { id } = this.props;
    return (
      <div className="form-group row" data-id={id}>
        <InputText
          inputLabel="School Name"
          inputName="schoolName"
          colClass="col-12 col-sm-6"
          onChange={this.handleChange}
        />
        <InputText
          inputLabel="Degree or Title of Study"
          inputName="studyTitle"
          colClass="col-12 col-sm-6"
          onChange={this.handleChange}
        />
        <InputDate
          inputLabel="Start Date"
          inputName="educationStartDate"
          colClass="col-12 col-sm-6"
          onChange={this.handleChange}
        />
        <InputDate
          inputLabel="End Date"
          inputName="educationEndDate"
          colClass="col-12 col-sm-6"
          onChange={this.handleChange}
        />
        <Button text="remove" type="delete"/>
      </div>
    );
  }
}

export default InputEducation;
