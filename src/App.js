import React from "react";
import "./App.css";

import Header from "./components/header/header";
import Generator from "./components/generator/generator";

import json from "./wardrobe.json";

function App() {
  return (
    <div>
      <Header wardrobeName={json.wardrobeName} />
      <Generator wardrobeObj={json.clothes} />
    </div>
  );
}

export default App;
