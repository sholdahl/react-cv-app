import React from "react";

const Header = (props) => {
  const { title } = props;

  return (
    <div className="header-row row">
      <div className="col">
        <h1 className="title text-center">{title}</h1>
      </div>
    </div>
  );
};

export default Header;
