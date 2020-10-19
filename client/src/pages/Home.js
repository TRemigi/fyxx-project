import React from "react";
import { useQuery } from "@apollo/react-hooks";
import "bootstrap/dist/css/bootstrap.css";

import FlipGallery from "../components/FlipGallery";

const Home = () => {
  return (
    <main className="container">
      <div className="row justify-content-center mt-4 mb-4">
        <div className="col-12 text-center">Welcome to the Fyxx...</div>
        <FlipGallery />
      </div>
    </main>
  );
};

export default Home;
