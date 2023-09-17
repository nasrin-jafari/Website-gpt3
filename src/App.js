import React from "react";
import { Brand, CTA, Navbar } from "./components";
import {
  Footer,
  Blog,
  Header,
  Possiblity,
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
      <Possiblity />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
