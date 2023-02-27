import React from "react";
import { Header } from "./component/Header";
import About from "./component/About";
import Skills from "./component/Skills";
import Profile from "./component/Profile";
import Project from "./component/Project";
import Contact from "./component/Contact";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Skills />
      <Profile />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
