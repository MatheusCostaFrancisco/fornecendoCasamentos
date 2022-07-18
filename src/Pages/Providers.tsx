/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Spinner } from "../components/atoms/Spinner";
import { Wrapper } from "../components/atoms/Wrapper/Wrapper";
import { SearchBar } from "../components/molecules/Searchbar/Searchbar";
import Header from "../components/organisms/Header/Header";
import ProviderList from "../components/organisms/ProviderList/ProviderList";
import { ThemeKeysKey } from "../helpers/ThemeKeys";
import planingController from "../infra/controllers/planning.controllers";
import { ProviderSchema } from "../infra/Schemas/Provider.schema";
import { ReduxProps } from "../redux/userSlice";

export default function Providers() {
  const [search, setSearch] = useState("");
  const [providers, setProviders] = useState<ProviderSchema[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const selector = useSelector((state: ReduxProps) => state.user);

  async function loadData() {
    setIsLoading(true);
    if (selector.type === "client") {
      const getProviders = await planingController.getProvidersByClient(
        selector.valueClient?.id || ""
      );

      setProviders(getProviders || []);
    }

    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <Header name="Fornecedores" />
      <Wrapper>
        <div className="provider-page">
          <div className="home__searchBar">
            <SearchBar
              placeholder="Digite o nome do fornecedor"
              value={search}
              onChange={(e) => setSearch(e)}
            />
          </div>
          {!isLoading ? (
            <div>
              <ProviderList providers={providers} />
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
