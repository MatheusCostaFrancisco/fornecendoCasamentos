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
import { PlanningSchema } from "../infra/Schemas/Planning.schema";
import { toast } from "react-toastify";

type ProductPageType = ProductSchema & {
  liked: boolean;
};

function Provider() {
  const { id } = useParams();
  const [product, setProduct] = useState<ProductPageType>(
    {} as ProductPageType
  );
  const [planning, setPlanning] = useState<PlanningSchema>();
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

    return productsPlanning;
  }

  async function loadData() {
    setLoading(true);
    setPlanning(undefined);
    const productOfList = await getProduct();
    const plannings = await getProductByPlanning();

    const productsOfPlanning = plannings.map((x) => x.products).flat();

    const findProduct = productsOfPlanning.find(
      (x) => x.id === productOfList?.id
    );

    if (findProduct) {
      const findPlanning = plannings.find((x) =>
        x.products.includes(findProduct)
      );
      if (findPlanning) setPlanning(findPlanning);
    }

    const formatted = {
      ...productOfList,
      liked: !!findProduct,
    };

    setProduct(formatted);
    setLoading(false);
  }

  const handleSaveProduct = async () => {
    await planingController.saveProductInPlanning(
      product,
      selector.valueClient!,
      product.providerId,
      planning
    );
    toast("Salvo com sucesso");
    await loadData();
  };

  const handleDeleteProcut = async () => {
    await planingController.deleteProductInPlanning(
      product,
      planning?.id || ""
    );
    toast.info("Deletado com sucesso");
    await loadData();
  };

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
                  onClick={() =>
                    !product.liked ? handleSaveProduct() : handleDeleteProcut()
                  }
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
