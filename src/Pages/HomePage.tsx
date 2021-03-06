/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Spinner } from "../components/atoms/Spinner";
import { Wrapper } from "../components/atoms/Wrapper/Wrapper";
import { SearchBar } from "../components/molecules/Searchbar/Searchbar";
import Header from "../components/organisms/Header/Header";
import ProviderList from "../components/organisms/ProviderList/ProviderList";
import HomeMenu from "../components/templates/HomeMenu";
import providersController from "../infra/controllers/providers.controller";
import { ProviderSchema } from "../infra/Schemas/Provider.schema";
import { ThemeKeysKey } from "../helpers/ThemeKeys";
import "./style.css";

export default function Home() {
  const navigate = useNavigate();
  const handleNavigation = (routeName: string) => {
    navigate(`/${routeName}`);
  };

  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [providers, setProviders] = useState<ProviderSchema[]>([]);

  async function loadProviders() {
    setIsLoading(true);

    const getProviders = await providersController.getByName(search);
    setProviders(getProviders);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }

  useEffect(() => {
    loadProviders();
  }, [search]);

  return (
    <div>
      <Header name="Home" />
      <Wrapper>
        <div className="home">
          <div className="home__searchBar">
            <SearchBar
              placeholder="Digite o nome do fornecedor"
              value={search}
              onChange={(e) => setSearch(e)}
            />
          </div>
          {!isLoading ? (
            <div>
              {!search ? (
                <HomeMenu handleNavigation={handleNavigation} />
              ) : (
                <div className="home__list">
                  <ProviderList providers={providers} />
                </div>
              )}
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
