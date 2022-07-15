import React from "react";
import { ProductSchema } from "../../../infra/Schemas/Product.schema";
import CardProduct from "../../molecules/ProductCard/ProductCard";
import "./product-list.style.css";

type ProductListProps = {
  products: ProductSchema[];
};

export default function ProviderList({ products }: ProductListProps) {
  return (
    <div className="product-list">
      {products?.map((item) => {
        return <CardProduct key={item.id} product={item} />;
      })}
      {products.length === 0 && <div>Sem resultados</div>}
    </div>
  );
}
