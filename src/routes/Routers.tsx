import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "../Pages/HomePage";
import Login from "../Pages/Login";
import Providers from "../Pages/Providers";
import Products from "../Pages/Products";
import Services from "../Pages/Services";
import Provider from "../Pages/Provider";
import Product from "../Pages/Product";
import Planning from "../Pages/Planning";
import ClientRegister from "../Pages/Register";
import { useSelector } from "react-redux";
import { ReduxProps } from "../redux/userSlice";

export default function Routers() {
  const selector = useSelector((state: ReduxProps) => state.user);

  return (
    <>
      {!selector.isLogged ? (
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="*" element={<Login />} />
          <Route path="/Register" element={<ClientRegister />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Providers" element={<Providers />} />
          <Route path="/Planning" element={<Planning />} />
          <Route path="/ProductsList" element={<Products />} />
          <Route path="/ServicesList" element={<Services />} />
          <Route path="/provider/:id" element={<Provider />} />
          <Route path="/product/:id" element={<Product />} />

          <Route path="*" element={<Login />} />
        </Routes>
      )}
    </>
  );
}
