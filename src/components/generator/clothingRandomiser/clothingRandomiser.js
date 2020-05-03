import React, { useState } from "react";
import "./clothingRandomiser.scss";

const ClothingRandomiser = (props) => {
  const { src } = props;
  return (
    <div className="clothingRandomiser">
      <img src={src} />
    </div>
  );
};

export default ClothingRandomiser;
