import React from "react";

const InputDate = (props) => {
  const { inputLabel, inputName, colClass, onChange, formMode } = props;

  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1; //January is 0!
  var yyyy = today.getFullYear();
  if (dd < 10) {
    dd = "0" + dd;
  }
  if (mm < 10) {
    mm = "0" + mm;
  }
  today = yyyy + "-" + mm + "-" + dd;

  return (
    <div className={`input-group ${colClass}`}>
      <label className="input-label">{inputLabel}</label>
      <input
        type="date"
        name={inputName}
        max={today}
        onChange={onChange}
        className={formMode === "edit" ? "" : "input-disabled"}
        readOnly={formMode === "edit" ? "" : "readonly"}
      ></input>
    </div>
  );
};

export default InputDate;
