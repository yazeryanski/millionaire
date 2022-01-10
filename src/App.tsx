import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "./views/Home";
import Game from "./views/Game";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="game" element={<Game />} />
    </Routes>
  );
}

export default App;
