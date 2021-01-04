import React from "react";

const InputText = (props) => {
  const { inputLabel, inputName, colClass } = props;
  return (
    <div className={`input-group ${colClass}`}>
      <label class="input-label">{inputLabel}</label>
      <input type="text" name={inputName}>
      </input>
    </div>
  );
};

export default InputText;
