/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Spinner } from "../components/atoms/Spinner";
import { Wrapper } from "../components/atoms/Wrapper/Wrapper";

import Header from "../components/organisms/Header/Header";
import ProductList from "../components/organisms/ProductList/ProductList";
import { ThemeKeysKey } from "../helpers/ThemeKeys";

import planingController from "../infra/controllers/planning.controllers";

import { ProductSchema } from "../infra/Schemas/Product.schema";
import { ReduxProps } from "../redux/userSlice";

type PlanningItemsType = {
  name: string;
  products: ProductSchema[];
};

export default function Providers() {
  const [planningItems, setPlanningItems] = useState<PlanningItemsType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const selector = useSelector((state: ReduxProps) => state.user);

  async function loadData() {
    setIsLoading(true);
    console.log(selector);
    if (selector.type === "client") {
      const getPlannings = await planingController.getByClientId(
        selector.valueClient?.id || ""
      );
      const getPlanningItems = getPlannings.map((x) => ({
        name: x.provider.name,
        products: x.products,
      }));
      setPlanningItems(getPlanningItems);
    } else {
      const getPlannings = await planingController.getByProviderId(
        selector.valueProvider?.id || ""
      );
      const getPlanningItems = getPlannings.map((x) => ({
        name: x.client.name,
        products: x.products,
      }));
      setPlanningItems(getPlanningItems);
    }
    setIsLoading(false);
  }

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <Header name="Planejamento" />
      {!isLoading ? (
        <Wrapper>
          <div className="planning-page">
            <div>
              {planningItems.map((item) => {
                return (
                  <div key={item.name}>
                    <div>{item.name}</div>
                    <ProductList products={item.products} />
                  </div>
                );
              })}
            </div>
          </div>
        </Wrapper>
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
  );
}
