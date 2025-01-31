/* eslint-disable no-unused-vars */
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";

import React from "react";
import "./App.css";
import Layout from "./layout/Layout";
import AboutMe from "./pages/AboutMe/AboutMe";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import './assets/fonts/stylesFonts.css'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="AboutMe" element={<AboutMe />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="Projects" element={<Projects />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
