import React from "react";

import { ProviderSchema } from "../../../infra/Schemas/Provider.schema";
import ProviderCard from "../../molecules/ProviderCard/ProviderCard";
import "./style.css";

type ProviderListProps = {
  providers: ProviderSchema[];
};

export default function ProviderList({ providers }: ProviderListProps) {
  return (
    <div className="provider-list">
      {providers?.map((item) => {
        return <ProviderCard key={item.id} item={item} />;
      })}
      {providers.length === 0 && <div>Sem resultados</div>}
    </div>
  );
}
