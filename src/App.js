import React from "react";
import "./index.css";
import Hello from "./routes/Hello";
import About from "./routes/About";
import Music from "./routes/Music";
import Projects from "./routes/Projects";
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <Routes>
          <Route path="/minivan" element ={<Hello />} />
          <Route path="/project" element ={<Projects />} />
          <Route path="/about" element ={<About />} />
          <Route path="/music" element ={<Music />} />
      </Routes>
    </>
  );
}

export default App;
