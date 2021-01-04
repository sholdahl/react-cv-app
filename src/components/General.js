import React, { Component } from "react";
import InputText from "./InputText";
import InputPhone from "./InputPhone";
import InputEmail from "./InputEmail";
import { PersonFill } from "react-bootstrap-icons";
import SectionTitle from "./SectionTitle";

class General extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="general-row row justify-content-center">
        <div className="col section-col m-4 form-bg">
          <div className="icon-wrapper">
            <PersonFill color="#ffefff" size={50} />
          </div>
          <SectionTitle title="General" />
          <div className="row">
            <InputText inputLabel="First Name" inputName="firstName" colClass="col-12 col-sm-6"/>
            <InputText inputLabel="Last Name" inputName="lastName" colClass="col-12 col-sm-6"/>
            <InputEmail colClass="col-12 col-sm-6"/>
            <InputPhone colClass="col-12 col-sm-6"/>
          </div>
        </div>
      </div>
    );
  }
}

export default General;
