import React, { Component } from "react";
import { BookFill } from "react-bootstrap-icons";
import SectionTitle from "./SectionTitle";
import AddMore from "./AddMore";
import InputEducation from "./InputEducation";
import uniqid from "uniqid";

class Education extends Component {
  constructor() {
    super();
    this.state = {
      educationRecords: [uniqid()]
    };
    this.handleChange = this.handleChange.bind(this);
    this.deleteFormGroup = this.deleteFormGroup.bind(this);
  }

  handleChange = (e) => {
    this.setState({
      educationRecords: [...this.state.educationRecords, uniqid()],
    });
  };

  deleteFormGroup = (e) => {
    let array = this.state.educationRecords;
    const index = array.indexOf(e.target.getAttribute("data-id"));
    if (index > -1) {
      array.splice(index, 1);
    }
    this.setState({
      educationRecords: array,
    });
  };

  render() {
    const { formMode } = this.props;
    return (
      <div className="education-row row justify-content-center">
        <div className="col section-col m-4 form-bg">
          <div className="icon-wrapper">
            <BookFill color="#ffefff" size={50} />
          </div>
          <SectionTitle title="Education" />
          <div className="row">
            {this.state.educationRecords.map((educationID) => {
              return (
                <InputEducation
                  id={educationID}
                  key={educationID}
                  formMode={formMode}
                  deleteMethod={this.deleteFormGroup}
                />
              );
            })}
            {formMode === "edit" ? <AddMore handleChange={this.handleChange} /> : ""}
          </div>
        </div>
      </div>
    );
  }
}

export default Education;
