import React from "react";

const InputText = (props) => {
  const { inputLabel, inputName, colClass, onChange } = props;
  return (
    <div className={`input-group ${colClass}`}>
      <label className="input-label">{inputLabel}</label>
      <input type="text" name={inputName} onChange={onChange}>
      </input>
    </div>
  );
};

export default InputText;
