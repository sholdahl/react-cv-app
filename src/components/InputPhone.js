import React from "react";

const InputPhone = (props) => {
  const { colClass } = props;

  return (
    <div className={`input-group ${colClass}`}>
      <label class="input-label">Phone</label>
      <input type="tel" name="phone">
      </input>
    </div>
  );
};

export default InputPhone;
