import React from "react";
import StarBg from "./Components/Rewards/HeroSection/StarBg";
import Header from "./Components/Rewards/Header/Header";
import NavBar from "./Components/Rewards/NavBar/NavBar";
import Body from "./Components/Rewards/Body/Body";
import Footer from "./Components/Rewards/Footer/Footer";
import {
  BrowserRouter as ReactRouter,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

interface Props {}

const App: React.FC<Props> = (props) => {
  return (
    <ReactRouter>
      <NavBar />
      <Header />
      <Switch>
        <Redirect exact from="/" to="/rewards" />
        <Route exact path="/rewards">
          <StarBg />
          <Body />
        </Route>
        <Route exact path="/gift"></Route>
        <Route path="*">Page Not Found</Route>
      </Switch>
      <Footer />
    </ReactRouter>
  );
};

App.defaultProps = {};

export default React.memo(App);
