import React, { useState } from "react";
import { BookFill } from "react-bootstrap-icons";
import SectionTitle from "./SectionTitle";
import AddMore from "./AddMore";
import InputEducation from "./InputEducation";
import uniqid from "uniqid";

const Education = (props) => {
  const { formMode } = props;
  const [educationRecords, setEducationRecords] = useState([uniqid()]);

  const handleChange = (e) => {
    setEducationRecords([...educationRecords, uniqid()]);
  };

  const deleteFormGroup = (e) => {
    let array = [...educationRecords];
    const index = array.indexOf(e.target.getAttribute("data-id"));
    if (index > -1) {
      array.splice(index, 1);
    }
    setEducationRecords(array);
  };

  return (
    <div className="education-row row justify-content-center">
      <div className="col section-col m-4 form-bg">
        <div className="icon-wrapper">
          <BookFill color="#ffefff" size={50} />
        </div>
        <SectionTitle title="Education" />
        <div className="row">
          {educationRecords.map((educationID) => {
            return (
              <InputEducation
                id={educationID}
                key={educationID}
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

export default Education;
