import React from "react";
import { Homepage, AboutPage } from "./pages";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Header, Login, Register } from "./components";
import { Switch, Route } from "react-router-dom";

function Home() {
  return (
    <>
      <Header />

      <div className="container">
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/about" component={AboutPage} />
        </Switch>
      </div>
    </>
  );
}

export default Home;
