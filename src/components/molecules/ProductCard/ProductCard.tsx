import React from "react";
import { ProductSchema } from "../../../infra/Schemas/Product.schema";
import { Avatar } from "../../atoms/Avatar";
import Buque from "../../../assets/images/buque.jpg";
import "./product.style.css";
import getTextByEnum from "../../../helpers/getTextByEnum";
import EProductType from "../../../helpers/ProductType.enum";

export type CardProductType = {
  product: ProductSchema;
  showProvider?: boolean;
};

export default function CardProduct({
  product,
  showProvider = false,
}: CardProductType) {
  return (
    <div className="card-product">
      <div className="card-product__image">
        <Avatar alt="imagem do Produto" url={Buque} />
      </div>
      <div className="card-product__name">
        <strong>{product.name}</strong>
      </div>
      <div className="card-product__type">
        Tipo: <strong>{getTextByEnum(product.type, EProductType)}</strong>
      </div>
      {showProvider && (
        <div>
          <strong>{product.providerName}</strong>
        </div>
      )}
    </div>
  );
}
