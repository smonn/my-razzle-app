import React, { FC } from "react";
import SEO from "@components/SEO";
import "./style.css";

const Home: FC = () => {
  return (
    <div className="Home">
      <SEO title="Home" />
      <h1>Home</h1>
    </div>
  );
};

export default Home;
