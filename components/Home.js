import React from "react";
import ImageText from "./ImageText";
import classes from "../styles/Home.module.css";
import Nav from "./Nav";

const Home = () => {

  return (
    <div className={classes.bgImage}>
      <Nav />
      <ImageText />
    </div>
  );
};
export default Home;
