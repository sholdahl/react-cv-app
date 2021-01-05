import React from "react";

const Button = (props) => {
  const { text, type, onClick, id } = props;
  let btnClasses = "";

  if (type === "delete") {
    btnClasses = "btn btn-lg btn-outline-danger";
  } else {
    btnClasses = "btn btn-light btn-lg cv-btn";

  }
  return (
    <div className="col text-center m-4">
      <button className={btnClasses} onClick={onClick} data-id={id}>{text}</button>
    </div>
  );
};

export default Button;
