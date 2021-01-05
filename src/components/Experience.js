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
      experienceRecords: [0],
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (e) => {
    this.setState({
      experienceRecords: [...this.state.experienceRecords, uniqid()],
    });
  };

  render() {
    return (
      <div className="experience-row row justify-content-center">
        <div className="col section-col m-4 form-bg">
          <div className="icon-wrapper">
            <BriefcaseFill color="#ffefff" size={50} />
          </div>
          <SectionTitle title="Experience" />
          <div className="row">
            {this.state.experienceRecords.map((experienceID) => {
              return <InputExperience id={experienceID} key={experienceID} />;
            })}
            <AddMore handleChange={this.handleChange} />
          </div>
        </div>
      </div>
    );
  }
}

export default Experience;
