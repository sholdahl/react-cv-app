import React from "react";

const InputEmail = (props) => {
  const { colClass, onChange } = props;
  return (
    <div className={`input-group ${colClass}`}>
      <label className="input-label">Email</label>
      <input type="email" name="email" onChange={onChange}></input>
    </div>
  );
};

export default InputEmail;
