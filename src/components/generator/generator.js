import React, { useState, useEffect } from "react";
import "./generator.scss";

import ClothingRandomiser from "./clothingRandomiser/clothingRandomiser";

const Generator = (props) => {
  const { wardrobeObj } = props;
  const [generators, setGenerators] = useState("");

  useEffect(() => {
    buildGenerators();
  }, []);

  const buildGenerators = () =>
    setGenerators(
      Object.entries(wardrobeObj).map(([category, data]) => {
        const myData = wardrobeObj[category],
          getDataLength = () => Object.keys(myData).length,
          getData = () => Object.keys(myData),
          getRandom = (func) => Math.floor(Math.random() * func()),
          getImage = (key) => data[key];
        return (
          <ClothingRandomiser
            key={category}
            src={getImage(getData()[getRandom(getDataLength)])}
          />
        );
      })
    );

  return (
    <>
      <div className="generator">
        <button onClick={buildGenerators}>Randomise</button>
        {generators}
      </div>
    </>
  );
};

export default Generator;
