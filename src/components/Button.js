import React from "react";

const Button = (props) => {
  const { text } = props;

  return (
    <div className="row">
      <div className="col text-center m-4">
        <button className="btn btn-light btn-lg cv-btn">{text}</button>
      </div>
    </div>
  );
};

export default Button;
