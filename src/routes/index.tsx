import React from "react";
import { BrowserRouter } from "react-router-dom";

import { Provider as ReduxProvider } from "react-redux";

import store from "../redux/store";
import Routers from "./Routers";

function RoutesApp() {
  return (
    <BrowserRouter>
      <ReduxProvider store={store}>
        <Routers />
      </ReduxProvider>
    </BrowserRouter>
  );
}

export default RoutesApp;
