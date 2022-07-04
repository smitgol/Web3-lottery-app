import type { NextPage } from "next";
import React from "react";
import Hero from "../components/Hero/Hero";
import Card from "../components/Card/Card";

const Home: NextPage = () => {
  return (
    <React.Fragment>
      <Hero />
      <Card />
    </React.Fragment>
  );
};

export default Home;
