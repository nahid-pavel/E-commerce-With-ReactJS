import React from "react";
import { Homepage, LoginPage, RegisterPage, AboutPage } from "./pages";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Header } from "./components";
import { Switch, Route } from "react-router-dom";
import CartItems from "./components/cart/CartItems";

function Home() {
  return (
    <>
      <Header />
      <CartItems />

      <div className="container">
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/about" component={AboutPage} />
        </Switch>
      </div>
    </>
  );
}

export default Home;
