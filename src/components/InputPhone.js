import React from "react";

const InputPhone = (props) => {
  const { colClass, onChange } = props;

  return (
    <div className={`input-group ${colClass}`}>
      <label className="input-label">Phone</label>
      <input type="tel" name="phone" onChange={onChange}>
      </input>
    </div>
  );
};

export default InputPhone;
