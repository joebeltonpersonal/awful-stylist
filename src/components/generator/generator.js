import React from "react";
import "./generator.scss";

import ClothingRandomiser from "./clothingRandomiser/clothingRandomiser";

const Generator = (props) => {
  const { wardrobeObj } = props;

  // build the amount of boxes for each key in the json
  const buildGenerators = () =>
    Object.entries(wardrobeObj).map(([category, data]) => (
      <ClothingRandomiser
        category={category}
        data={data}
        wardrobeObj={wardrobeObj}
      />
    ));

  return <div className="generator">{buildGenerators()}</div>;
};

export default Generator;
