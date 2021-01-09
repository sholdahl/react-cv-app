import React, { Component, useState } from "react";
import InputText from "./InputText";
import InputPhone from "./InputPhone";
import InputEmail from "./InputEmail";
import { PersonFill } from "react-bootstrap-icons";
import SectionTitle from "./SectionTitle";

const General = (props) => {
  const { formMode } = props;
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleChange = (e) => {
    if(e.target.name === "firstName"){
      setFirstName(e.target.value)
    } else if (e.target.name === "lastName") {
      setLastName(e.target.value)
    } else if (e.target.name === "email") {
      setEmail(e.target.value)
    } else if (e.target.name === "phone") {
      setPhone(e.target.value)
    } else {
      console.log("failed")
    }
  };

  return (
    <div className="general-row row justify-content-center">
        <div className="col section-col m-4 form-bg">
          <div className="icon-wrapper">
            <PersonFill color="#ffefff" size={50} />
          </div>
          <SectionTitle title="General" />
          <div className="row">
            <InputText
              inputLabel="First Name"
              inputName="firstName"
              colClass="col-12 col-sm-6"
              onChange={handleChange}
              formMode={formMode}
            />
            <InputText
              inputLabel="Last Name"
              inputName="lastName"
              colClass="col-12 col-sm-6"
              onchange={handleChange}
              formMode={formMode}
            />
            <InputEmail
              colClass="col-12 col-sm-6"
              onChange={handleChange}
              formMode={formMode}
            />
            <InputPhone
              colClass="col-12 col-sm-6"
              onChange={handleChange}
              formMode={formMode}
            />
          </div>
        </div>
      </div>
  );
};

export default General;
