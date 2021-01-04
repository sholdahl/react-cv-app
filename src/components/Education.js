import React, { Component } from "react";
import InputText from "./InputText";
import { BookFill } from "react-bootstrap-icons";
import SectionTitle from "./SectionTitle";
import InputDate from "./InputDate";

class Education extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="education-row row justify-content-center">
        <div className="col section-col m-4 form-bg">
          <div className="icon-wrapper">
            <BookFill color="#ffefff" size={50} />
          </div>
          <SectionTitle title="Education" />
          <div className="row">
            <InputText inputLabel="School Name" inputName="schoolName" colClass="col-12 col-sm-6" />
            <InputText
              inputLabel="Degree or Title of Study" inputName="studyTitle" colClass="col-12 col-sm-6" />
            <InputDate inputLabel="Start Date" inputName="educationStartDate" colClass="col-12 col-sm-6" />
            <InputDate inputLabel="End Date" inputName="educationEndDate" colClass="col-12 col-sm-6" />

          </div>
        </div>
      </div>
    );
  }
}

export default Education;
