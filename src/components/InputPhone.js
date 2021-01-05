import React from "react";

const InputPhone = (props) => {
  const { colClass, onChange, formMode } = props;

  return (
    <div className={`input-group ${colClass}`}>
      <label className="input-label">Phone</label>
      <input type="tel" name="phone" onChange={onChange} className={formMode === "edit" ? "" : "input-disabled"} readOnly={formMode === "edit" ? "" : "readonly"}>
      </input>
    </div>
  );
};

export default InputPhone;
