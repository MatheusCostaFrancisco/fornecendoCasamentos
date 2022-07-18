import React from "react";
import { Link } from "react-router-dom";
import { ProductSchema } from "../../../infra/Schemas/Product.schema";
import CardProduct from "../../molecules/ProductCard/ProductCard";
import "./product-list.style.css";

type ProductListProps = {
  products: ProductSchema[];
  showProvider?: boolean;
};

export default function ProviderList({
  products,
  showProvider,
}: ProductListProps) {
  return (
    <div className="product-list">
      {products?.map((item) => {
        return (
          <Link to={`/product/${item.id}`} key={item.id}>
            <CardProduct
              key={item.id}
              product={item}
              showProvider={showProvider}
            />
          </Link>
        );
      })}
      {products.length === 0 && <div>Sem resultados</div>}
    </div>
  );
}
