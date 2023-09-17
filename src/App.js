import React from "react";
import { Brand, CTA, Navbar } from "./components";
import {
  Footer,
  Blog,
  Header,
  Possibility,
  WhatGPT3,
  Features,
} from "./containers";
import './App.css'

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
