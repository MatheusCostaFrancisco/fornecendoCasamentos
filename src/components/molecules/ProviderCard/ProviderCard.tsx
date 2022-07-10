import React from "react";
import { ProviderSchema } from "../../../infra/Schemas/Provider.schema";
import { Avatar } from "../../atoms/Avatar";
import { Evaluation } from "../../atoms/Evaluation";
import { EvaluationPrice } from "../../atoms/EvaluationPrice";

import "./style.css";

export type ProviderCardProps = {
  item: ProviderSchema;
};

export default function ProviderCard({ item }: ProviderCardProps) {
  return (
    <div className="provider-card">
      <div className="provider-card__avatar">
        <Avatar alt="nada" size="small" />
      </div>
      <div className="provider-card__info">
        <div className="provider-card__name">{item.name}</div>
        <div className="provider-card__info__classification">
          <div className="provider-card__evaluation">
            Nota:
            <Evaluation rank={item.stars} color="secondaryLight" size="sm" />
          </div>
          <div className="provider-card__pricing">
            Preço: <EvaluationPrice rank={item.price} spacing size="sm" />
          </div>
          <div className="provider-card__address">
            {item.address.city}-{item.address.state}
          </div>
        </div>
      </div>
    </div>
  );
}
