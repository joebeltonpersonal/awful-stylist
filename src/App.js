import React from "react";
import "./App.css";

import Header from "./components/header/header";
import Generator from "./components/generator/generator";
import Footer from "./components/footer/footer";

import json from "./wardrobe.json";

function App() {
  return (
    <div>
      <Header wardrobeName={json.wardrobeName} />
      <Generator wardrobeObj={json.clothes} />
      <Footer />
    </div>
  );
}

export default App;
