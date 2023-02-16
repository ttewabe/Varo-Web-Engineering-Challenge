import React from "react";
import { Route, Switch } from "react-router-dom";
import Authenticated from "./Authenticated/Authenticated";
import Favorite from "./Favorite/Favorite";

import Index from "./Index/Index";
import NowPlaying from "./NowPlaying/NowPlaying";
import UnknownPage from "./UnknownPage/UnknownPage";

const Pages = () => (
  <Switch>
    <Route exact path="/" component={Index} />
    <Route exact path="/nowPlaying" component={NowPlaying} />
    <Route exact path="/favorite-movies" component={Favorite} />
    <Route exact path="/authenticated" component={Authenticated} />
    <Route component={UnknownPage} />
  </Switch>
);

export default Pages;
