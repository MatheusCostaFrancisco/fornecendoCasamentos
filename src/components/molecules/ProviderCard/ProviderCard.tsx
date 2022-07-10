import React from "react";
import { useNavigate } from "react-router-dom";
import { ProviderSchema } from "../../../infra/Schemas/Provider.schema";
import { Avatar } from "../../atoms/Avatar";
import { Evaluation } from "../../atoms/Evaluation";
import { EvaluationPrice } from "../../atoms/EvaluationPrice";
import image from "../../../assets/images/fornecedor.jpg";

import "./style.css";

export type ProviderCardProps = {
  item: ProviderSchema;
};

export default function ProviderCard({ item }: ProviderCardProps) {
  const navigate = useNavigate();
  const handleNavigation = (routeName: string) => {
    navigate(`/${routeName}`);
  };
  return (
    <div
      className="provider-card"
      onClick={() => handleNavigation(`/providers/${item.id}`)}
    >
      <div className="provider-card__avatar">
        <Avatar alt="nada" size="small" url={image} />
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
