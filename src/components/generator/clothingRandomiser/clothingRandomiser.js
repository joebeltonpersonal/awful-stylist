import React, { useState } from "react";
import "./clothingRandomiser.scss";

const ClothingRandomiser = (props) => {
  const { wardrobeObj, data, category } = props;

    const myData = wardrobeObj[category],
    getDataLength = () => Object.keys(myData).length,
    getData = () => Object.keys(myData),
    getRandom = (func) => Math.floor(Math.random() * func()),
    getImage = (key) => data[key];

  return (
    <div className="clothingRandomiser">
      <img src={getImage(getData()[getRandom(getDataLength)])} />
    </div>
  );
};

export default ClothingRandomiser;
