import React from "react";

const InputTextArea = (props) => {
  const { inputLabel, inputName, colClass, onChange, formMode } = props;
  return (
    <div className={`input-group ${colClass}`}>
      <label className="input-label">{inputLabel}</label>
      <textarea
        name={inputName}
        rows="6"
        placeholder="Please limit your response to 4 sentances."
        onChange={onChange}
        className={formMode === "edit" ? "" : "input-disabled"}
        readOnly={formMode === "edit" ? "" : "readonly"}
      ></textarea>
    </div>
  );
};

export default InputTextArea;
