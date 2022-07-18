/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Spinner } from "../components/atoms/Spinner";
import { Wrapper } from "../components/atoms/Wrapper/Wrapper";
import { SearchBar } from "../components/molecules/Searchbar/Searchbar";
import Header from "../components/organisms/Header/Header";
import ProductList from "../components/organisms/ProductList/ProductList";
import EProductType from "../helpers/ProductType.enum";
import { ThemeKeysKey } from "../helpers/ThemeKeys";
import productsController from "../infra/controllers/product.controller";
import { ProductSchema } from "../infra/Schemas/Product.schema";
import { ReduxProps } from "../redux/userSlice";

export default function Providers() {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState<ProductSchema[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const selector = useSelector((state: ReduxProps) => state.user);

  async function getServices() {
    const getServicesList = await productsController.getByName(search);
    const filterByService = getServicesList.filter(
      (x) => x.type === EProductType.Serviço
    );
    setProducts(filterByService);
  }

  async function loadData() {
    setIsLoading(true);
    getServices();
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    getServices();
  }, [search]);

  return (
    <div>
      <Header name="Serviços" />
      <Wrapper>
        <div className="provider-page">
          <div className="home__searchBar">
            <SearchBar
              placeholder="Digite o nome do produto"
              value={search}
              onChange={(e) => setSearch(e)}
            />
          </div>
          <div className="home__filterBar"></div>
          {!isLoading ? (
            <div>
              <ProductList products={products} showProvider />
            </div>
          ) : (
            <div className="home__loading">
              <Spinner
                loading={isLoading}
                color={ThemeKeysKey["primary"]}
                size={56}
              />
            </div>
          )}
        </div>
      </Wrapper>
    </div>
  );
}
