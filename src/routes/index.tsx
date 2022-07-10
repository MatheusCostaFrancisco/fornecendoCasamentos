import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Provider as ReduxProvider } from "react-redux";

import Home from "../Pages/HomePage";
import Login from "../Pages/Login";
import Providers from "../Pages/Providers";
import Provider from "../Pages/Login";
import store from "../redux/store";

function RoutesApp() {
  return (
    <BrowserRouter>
      <ReduxProvider store={store}>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Providers" element={<Providers />} />
          <Route path="/providers/:id" element={<Provider />} />
        </Routes>
      </ReduxProvider>
    </BrowserRouter>
  );
}

export default RoutesApp;
