import React from "react";

const InputTextArea = (props) => {
  const { inputLabel, inputName, colClass, onChange } = props;
  return (
    <div className={`input-group ${colClass}`}>
      <label className="input-label">{inputLabel}</label>
        <textarea name={inputName} rows="6" placeholder="Please limit your response to 4 sentances." onChange={onChange}></textarea>
    </div>
  );
};

export default InputTextArea;
