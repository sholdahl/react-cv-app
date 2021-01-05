import React, { Component } from "react";
import { BriefcaseFill } from "react-bootstrap-icons";
import SectionTitle from "./SectionTitle";
import AddMore from "./AddMore";
import InputExperience from "./InputExperience";
import uniqid from "uniqid";

class Experience extends Component {
  constructor() {
    super();
    this.state = {
      experienceRecords: [uniqid()],
    };
    this.handleChange = this.handleChange.bind(this);
    this.deleteFormGroup = this.deleteFormGroup.bind(this);
  }

  handleChange = (e) => {
    this.setState({
      experienceRecords: [...this.state.experienceRecords, uniqid()],
    });
  };

  deleteFormGroup = (e) => {
    let array = this.state.experienceRecords;
    const index = array.indexOf(e.target.getAttribute("data-id"));
    if (index > -1) {
      array.splice(index, 1);
    }
    this.setState({
      experienceRecords: array,
    });
  };

  render() {
    const { formMode } = this.props;
    return (
      <div className="experience-row row justify-content-center">
        <div className="col section-col m-4 form-bg">
          <div className="icon-wrapper">
            <BriefcaseFill color="#ffefff" size={50} />
          </div>
          <SectionTitle title="Experience" />
          <div className="row">
            {this.state.experienceRecords.map((experienceID) => {
              return (
                <InputExperience
                  id={experienceID}
                  key={experienceID}
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

export default Experience;
