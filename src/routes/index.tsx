import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Provider as ReduxProvider } from "react-redux";

import Home from "../Pages/HomePage";
import Login from "../Pages/Login";
import Providers from "../Pages/Providers";
import Products from "../Pages/Products";
import Services from "../Pages/Services";
import Provider from "../Pages/Provider";
import Product from "../Pages/Product";
import Planning from "../Pages/Planning";
import store from "../redux/store";

function RoutesApp() {
  return (
    <BrowserRouter>
      <ReduxProvider store={store}>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Providers" element={<Providers />} />
          <Route path="/Planning" element={<Planning />} />
          <Route path="/ProductsList" element={<Products />} />
          <Route path="/ServicesList" element={<Services />} />
          <Route path="/provider/:id" element={<Provider />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="*" element={<Login />} />
        </Routes>
      </ReduxProvider>
    </BrowserRouter>
  );
}

export default RoutesApp;
