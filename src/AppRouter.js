import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from "./components/Main";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/" component={Main} exact={true} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
