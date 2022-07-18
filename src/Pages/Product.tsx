/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Avatar } from "../components/atoms/Avatar";
import Buque from "../assets/images/buque.jpg";
import { Spinner } from "../components/atoms/Spinner";
import { Wrapper } from "../components/atoms/Wrapper/Wrapper";
import Gallery from "../components/Gallery/Gallery";
import Header from "../components/organisms/Header/Header";
import { ThemeKeysKey } from "../helpers/ThemeKeys";
import productsController from "../infra/controllers/product.controller";
import { ProductSchema } from "../infra/Schemas/Product.schema";
import LikeButton from "../components/atoms/LikeButton/LikeButton";
import planingController from "../infra/controllers/planning.controllers";
import { useSelector } from "react-redux";
import { ReduxProps } from "../redux/userSlice";

type ProductPageType = ProductSchema & {
  liked: boolean;
};

function Provider() {
  const { id } = useParams();
  const [product, setProduct] = useState<ProductPageType>(
    {} as ProductPageType
  );
  const [loading, setLoading] = useState(true);
  const selector = useSelector((state: ReduxProps) => state.user);

  async function getProduct() {
    const productInfo = await productsController.getById(id || "");
    return productInfo;
  }

  async function getProductByPlanning() {
    const productsPlanning = await planingController.getByClientId(
      selector.valueClient?.id || ""
    );

    const products = productsPlanning.map((x) => x.products).flat();
    return products;
  }

  async function loadData() {
    setLoading(true);
    const productOfList = await getProduct();
    const productsOfPlanning = await getProductByPlanning();

    const formatted = {
      ...productOfList,
      liked: !!productsOfPlanning.find((x) => x.id === productOfList?.id),
    };

    setProduct(formatted);

    setLoading(false);
  }

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <Header name={`Produto - ${product?.name}`} />
      <Wrapper>
        <div>
          {!loading && (
            <div className="product">
              <div className="product__like-button">
                <LikeButton
                  isLiked={product.liked}
                  onClick={() => console.log("click")}
                />
              </div>
              <div className="product__avatar">
                <Avatar alt="avatar product" size="large" url={Buque} />
                <div className="product__name">{product?.name}</div>
              </div>
              <div className="product__about">
                <h2>Sobre</h2>
                <div className="product__about-text">{product?.about}</div>
              </div>
              <div className="product__gallery">
                <Gallery />
              </div>
            </div>
          )}
          <div>
            <div className="home__loading">
              <Spinner
                loading={loading}
                color={ThemeKeysKey["primary"]}
                size={56}
              />
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
}

export default Provider;
