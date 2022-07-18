/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Spinner } from "../components/atoms/Spinner";
import { Wrapper } from "../components/atoms/Wrapper/Wrapper";
import { SearchBar } from "../components/molecules/Searchbar/Searchbar";
import Header from "../components/organisms/Header/Header";
import ProductList from "../components/organisms/ProductList/ProductList";
import EProductType from "../helpers/ProductType.enum";
import { ThemeKeysKey } from "../helpers/ThemeKeys";
import productsController from "../infra/controllers/product.controller";
import { ProductSchema } from "../infra/Schemas/Product.schema";

export default function Providers() {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState<ProductSchema[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  async function getProducts() {
    const getProducts = await productsController.getByName(search);
    const filterByProducts = getProducts.filter(
      (x) => x.type === EProductType.Produto
    );
    setProducts(filterByProducts);
  }

  async function loadData() {
    setIsLoading(true);
    getProducts();
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    getProducts();
  }, [search]);

  return (
    <div>
      <Header name="Produtos" />
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
