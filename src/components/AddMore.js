import React from "react";

const AddMore = (props) => {
  const { handleChange } = props;

  return <p className="text-left add-more" onClick={handleChange}>+ add more</p>;
};

export default AddMore;
