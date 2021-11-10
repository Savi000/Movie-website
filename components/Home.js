import React, { useEffect } from "react";
import ImageText from "./ImageText";
import classes from "../styles/Home.module.css";
import Nav from "./Nav";

const Home = () => {

  return (
    <div className={classes.bgImage}>
      <Nav />
      <ImageText />

      {/* <img src="" alt="homePage backgroud" className={classes.pantherImage}/**class pantherImage */}
    </div>
  );
};
export default Home;
