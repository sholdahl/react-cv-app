import React from "react";

const InputEmail = (props) => {
  const { colClass } = props;
  return (
    <div className={`input-group ${colClass}`}>
      <label class="input-label">Email</label>
      <input type="email" name="email" ></input>
    </div>
  );
};

export default InputEmail;
