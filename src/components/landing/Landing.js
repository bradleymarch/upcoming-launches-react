import React from "react";
import Header from '../header/Header';
import Launches from './launches/Launches'
import Footer from '../footer/Footer';

const Landing = () => (
  <div id="landing_container">
    <Header />
    <Launches />
    <Footer />
  </div>
);

export default Landing;
