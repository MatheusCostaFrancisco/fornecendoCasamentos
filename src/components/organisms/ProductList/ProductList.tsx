import React from "react";
import { Link } from "react-router-dom";
import { ProductSchema } from "../../../infra/Schemas/Product.schema";
import CardProduct from "../../molecules/ProductCard/ProductCard";
import "./product-list.style.css";
import { motion } from "framer-motion";

type ProductListProps = {
  products: ProductSchema[];
  showProvider?: boolean;
};

export default function ProviderList({
  products,
  showProvider,
}: ProductListProps) {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.1,
      },
    },
  };
  const itemProduct = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <motion.div className="product-list" variants={container}>
      {products?.map((item) => {
        return (
          <motion.div key={item.id} variants={itemProduct}>
            <Link to={`/product/${item.id}`}>
              <CardProduct product={item} showProvider={showProvider} />
            </Link>
          </motion.div>
        );
      })}
      {products.length === 0 && <div>Sem resultados</div>}
    </motion.div>
  );
}
