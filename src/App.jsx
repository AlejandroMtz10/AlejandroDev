import { HashRouter, Routes, Route } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import React from "react";
import "./App.css";
import Layout from "./layout/Layout";
import AboutMe from "./pages/AboutMe/AboutMe";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import './assets/fonts/stylesFonts.css';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="AboutMe" element={<AboutMe />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="Projects" element={<Projects />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
