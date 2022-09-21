import React from "react";
import "./index.css";
import Hiiamvan from "./routes/Hiiamvan";
import About from "./routes/About";
import Music from "./routes/Music";
import Projects from "./routes/Projects";
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <Routes>
          <Route path="/" element ={<Hiiamvan />} />
          <Route path="/project" element ={<Projects />} />
          <Route path="/about" element ={<About />} />
          <Route path="/music" element ={<Music />} />
      </Routes>
    </>
  );
}

export default App;
