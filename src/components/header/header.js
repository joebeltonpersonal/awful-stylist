import React from "react";
import "./header.scss";

const Header = (props) => {
  const { wardrobeName } = props;

  return (
    <div className="header">
      <h1>{wardrobeName}</h1>
    </div>
  );
};

export default Header;
