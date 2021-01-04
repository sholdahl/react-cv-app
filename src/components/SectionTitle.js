import React from "react";

const SectionTitle = (props) => {
  const { title } = props;

  return (
        <h2 className="section-title text-center">{title}</h2>
  );
};

export default SectionTitle;
