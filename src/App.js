import React from "react";
import { Homepage } from "./pages";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Header } from "./components";

function Home() {
  return (
    <>
      <Header />
      <div className="container">
        <Homepage />
      </div>
    </>
  );
}

export default Home;
