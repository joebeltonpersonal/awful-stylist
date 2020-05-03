import React from "react";
import "./header.scss";

const Header = (props) => {
  const { wardrobeName } = props;

  return (
    <div className="header">
      <h3>{wardrobeName}</h3>
    </div>
  );
};

export default Header;
