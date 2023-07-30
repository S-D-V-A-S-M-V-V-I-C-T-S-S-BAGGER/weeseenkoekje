import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import CookieLifestyle from "./lifestyle/CookieLifestyle";

const routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route component={CookieLifestyle} />
    </Switch>
  </BrowserRouter>
);

export default routes;
