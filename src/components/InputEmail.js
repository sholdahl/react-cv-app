import React from "react";

const InputEmail = (props) => {
  const { colClass, onChange, formMode } = props;
  return (
    <div className={`input-group ${colClass}`}>
      <label className="input-label">Email</label>
      <input
        type="email"
        name="email"
        onChange={onChange}
        className={formMode === "edit" ? "" : "input-disabled"}
        readOnly={formMode === "edit" ? "" : "readonly"}
      ></input>
    </div>
  );
};

export default InputEmail;
