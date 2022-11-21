import React from "react";
import banner from "../../../img/249.jpeg";
import "./banner.css";

function Banner() {
  return (
    <section>
      <img src={banner} alt="banner" />
      <p>The Rick and Morty API</p>
    </section>
  );
}

export default Banner;
