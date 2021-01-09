import React, { useState } from "react";
import InputText from "./InputText";
import InputDate from "./InputDate";
import InputTextArea from "./InputTextArea";
import Button from "./Button";

const InputExperience = (props) => {
  const { id, formMode, deleteMethod } = props;
  const [companyName, setCompanyName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [experienceStartDate, setExperienceStartDate] = useState("");
  const [experienceEndDate, setExperienceEndDate] = useState("");

  const handleChange = (e) => {
    if (e.target.name === "companyName") {
      setCompanyName(e.target.value);
    } else if (e.target.name === "jobTitle") {
      setJobTitle(e.target.value);
    } else if (e.target.name === "experienceStartDate") {
      setExperienceStartDate(e.target.value);
    } else if (e.target.name === "experienceEndDate") {
      setExperienceEndDate(e.target.value);
    } else {
      console.log("failed");
    }
  };

  return (
    <div className="form-group row" data-id={id}>
    <InputText
      inputLabel="Company Name"
      inputName="companyName"
      colClass="col-12 col-sm-6"
      onChange={handleChange}
      formMode={formMode}
    />
    <InputText
      inputLabel="Job Title"
      inputName="jobTitle"
      colClass="col-12 col-sm-6"
      onChange={handleChange}
      formMode={formMode}
    />
    <InputDate
      inputLabel="Start Date"
      inputName="experienceStartDate"
      colClass="col-12 col-sm-6"
      onChange={handleChange}
      formMode={formMode}
    />
    <InputDate
      inputLabel="End Date"
      inputName="experienceEndDate"
      colClass="col-12 col-sm-6"
      onChange={handleChange}
      formMode={formMode}
    />
    <InputTextArea
      inputLabel="Job Description"
      inputName="jobDescription1"
      colClass="col-12"
      onChange={handleChange}
      formMode={formMode}
    />
    {formMode === "edit" ? (
      <Button text="remove" type="delete" id={id} onClick={deleteMethod} />
    ) : (
      ""
    )}
  </div>
  )
};

export default InputExperience;
