import React, { useState } from "react";
import { BriefcaseFill } from "react-bootstrap-icons";
import SectionTitle from "./SectionTitle";
import AddMore from "./AddMore";
import InputExperience from "./InputExperience";
import uniqid from "uniqid";

const Experience = (props) => {
  const { formMode } = props;
  const [experienceRecords, setExperienceRecords] = useState([uniqid()]);

  const handleChange = (e) => {
    setExperienceRecords([...experienceRecords, uniqid()]);
  };

  const deleteFormGroup = (e) => {
    let array = [...experienceRecords];
    const index = array.indexOf(e.target.getAttribute("data-id"));
    if (index > -1) {
      array.splice(index, 1);
    }
    setExperienceRecords(array);
  };

  return (
    <div className="experience-row row justify-content-center">
    <div className="col section-col m-4 form-bg">
      <div className="icon-wrapper">
        <BriefcaseFill color="#ffefff" size={50} />
      </div>
      <SectionTitle title="Experience" />
      <div className="row">
        {experienceRecords.map((experienceID) => {
          return (
            <InputExperience
              id={experienceID}
              key={experienceID}
              formMode={formMode}
              deleteMethod={deleteFormGroup}
            />
          );
        })}
        {formMode === "edit" ? <AddMore handleChange={handleChange} /> : ""}
      </div>
    </div>
  </div>
  );
};

export default Experience;
