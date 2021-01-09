import React, { useState } from "react";
import InputText from "./InputText";
import InputDate from "./InputDate";
import Button from "./Button";

const InputEducation = (props) => {
  const { id, formMode, deleteMethod } = props;
  const [schoolName, setSchoolName] = useState("");
  const [studyTitle, setStudyTitle] = useState("");
  const [educationStartDate, setEducationStartDate] = useState("");
  const [educationEndDate, setEducationEndDate] = useState("");

  const handleChange = (e) => {
    if(e.target.name === "schoolName"){
      setSchoolName(e.target.value)
    } else if (e.target.name === "studyTitle") {
      setStudyTitle(e.target.value)
    } else if (e.target.name === "educationStartDate") {
      setEducationStartDate(e.target.value)
    } else if (e.target.name === "educationEndDate") {
      setEducationEndDate(e.target.value)
    } else {
      console.log("failed")
    }
  };

  return(
    <div className="form-group row" data-id={id}>
        <InputText
          inputLabel="School Name"
          inputName="schoolName"
          colClass="col-12 col-sm-6"
          onChange={handleChange}
          formMode={formMode}
        />
        <InputText
          inputLabel="Degree or Title of Study"
          inputName="studyTitle"
          colClass="col-12 col-sm-6"
          onChange={handleChange}
          formMode={formMode}
        />
        <InputDate
          inputLabel="Start Date"
          inputName="educationStartDate"
          colClass="col-12 col-sm-6"
          onChange={handleChange}
          formMode={formMode}
        />
        <InputDate
          inputLabel="End Date"
          inputName="educationEndDate"
          colClass="col-12 col-sm-6"
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

export default InputEducation;
