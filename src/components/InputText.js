import React from "react";

const InputText = (props) => {
  const { inputLabel, inputName, colClass, onChange, formMode } = props;
  return (
    <div className={`input-group ${colClass}`}>
      <label className="input-label">{inputLabel}</label>
      <input type="text" name={inputName} onChange={onChange} className={formMode === "edit" ? "" : "input-disabled"} readOnly={formMode === "edit" ? "" : "readonly"}>
      </input>
    </div>
  );
};

export default InputText;
