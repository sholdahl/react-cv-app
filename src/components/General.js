import React, { Component } from "react";
import InputText from "./InputText";
import InputPhone from "./InputPhone";
import InputEmail from "./InputEmail";
import { PersonFill } from "react-bootstrap-icons";
import SectionTitle from "./SectionTitle";

class General extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { formMode } = this.props;
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
              onChange={this.handleChange}
              formMode={formMode}
            />
            <InputText
              inputLabel="Last Name"
              inputName="lastName"
              colClass="col-12 col-sm-6"
              onchange={this.handleChange}
              formMode={formMode}
            />
            <InputEmail
              colClass="col-12 col-sm-6"
              onChange={this.handleChange}
              formMode={formMode}
            />
            <InputPhone
              colClass="col-12 col-sm-6"
              onChange={this.handleChange}
              formMode={formMode}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default General;
