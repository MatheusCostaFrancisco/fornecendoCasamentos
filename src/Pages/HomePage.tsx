import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ItemMenu } from "../components/atoms/ItemMenu";
import { Wrapper } from "../components/atoms/Wrapper/Wrapper";
import ProviderCard from "../components/molecules/ProviderCard/ProviderCard";
import { SearchBar } from "../components/molecules/Searchbar/Searchbar";
import Header from "../components/organisms/Header/Header";
import providersController from "../infra/controllers/providers.controller";
import { ProviderSchema } from "../infra/Schemas/Provider.schema";
import "./style.css";

export default function Home() {
  const navigate = useNavigate();
  const handleNavigation = (routeName: string) => {
    navigate(`/${routeName}`);
  };

  const [search, setSearch] = useState("");
  const [providers, setProviders] = useState<ProviderSchema[]>();

  async function loadProviders() {
    const getProviders = await providersController.getAll();
    setProviders(getProviders);
  }

  useEffect(() => {
    loadProviders();
  }, [search]);

  return (
    <div>
      <Header />
      <Wrapper>
        <div className="home">
          <div className="home__searchBar">
            <SearchBar
              placeholder="Digite o nome do fornecedor"
              value={search}
              onChange={(e) => setSearch(e)}
            />
          </div>
          {!search ? (
            <div className="home__content">
              <ItemMenu
                name="Meus fornecedores"
                footerName="Visualizar"
                icon="eye"
                onClick={() => handleNavigation("providers")}
              />
              <ItemMenu
                name="Produtos"
                footerName="Visualizar"
                icon="folder"
                onClick={() => handleNavigation("productsList")}
              />
              <ItemMenu
                name="Serviços"
                footerName="Visualizar"
                icon="server"
                onClick={() => handleNavigation("produtcsList")}
              />
              <ItemMenu
                name="Planejamento"
                footerName="Visualizar"
                icon="calendar"
                onClick={() => handleNavigation("planning")}
              />
            </div>
          ) : (
            <div className="home__list">
              {providers?.map((item) => {
                return <ProviderCard key={item.id} item={item} />;
              })}
            </div>
          )}
        </div>
      </Wrapper>
    </div>
  );
}
