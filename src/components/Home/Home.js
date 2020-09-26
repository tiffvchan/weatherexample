import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h2>Welcome Home, What's the Weather?</h2>
      <Link to="/weather">Weather</Link>
    </>
  );
};

export default Home;
