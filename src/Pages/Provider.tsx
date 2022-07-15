/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Avatar } from "../components/atoms/Avatar";
import { Evaluation } from "../components/atoms/Evaluation";
import { EvaluationPrice } from "../components/atoms/EvaluationPrice";
import { Wrapper } from "../components/atoms/Wrapper/Wrapper";
import Gallery from "../components/Gallery/Gallery";
import CardProduct from "../components/molecules/ProductCard/ProductCard";
import Header from "../components/organisms/Header/Header";
import ProductList from "../components/organisms/ProductList/ProductList";
import productsController from "../infra/controllers/product.controller";
import providersController from "../infra/controllers/providers.controller";
import { ProductSchema } from "../infra/Schemas/Product.schema";
import { ProviderSchema } from "../infra/Schemas/Provider.schema";

function Provider() {
  const { id } = useParams();
  const [provider, setProvider] = useState<ProviderSchema>();
  const [products, setProducts] = useState<ProductSchema[]>([]);
  const [loading, setLoading] = useState(true);

  async function getProductsByProvider(providerId: string) {
    const getProducts = await productsController.getByProvider(providerId);
    return getProducts;
  }

  async function loadData() {
    setLoading(true);
    const getProvider = await providersController.getById(id || "");
    const getProducts = await getProductsByProvider(getProvider.id);

    setProvider(getProvider);
    setProducts(getProducts);
    setLoading(false);
  }

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <Header name={`Fornecedor - ${provider?.name}`} />
      <Wrapper>
        <div className="provider">
          <div className="provider__content">
            <div className="provider__infos">
              <div className="provider__header">
                <Avatar alt="Imagem do fornecedor" />
                <Evaluation
                  rank={provider?.stars || 0}
                  color="secondaryLight"
                />
              </div>
              <div className="provider__content__infos">
                <div>
                  Rua: <strong>{provider?.address.streetName}</strong>
                </div>
                <div>
                  Número: <strong>{provider?.address.number}</strong>
                </div>
                <div>
                  Cidade: <strong>{provider?.address.city}</strong>
                </div>
                <div>
                  Estado <strong>{provider?.address.state}</strong>
                </div>
                <div className="provider__price">
                  <p>Preço:</p>
                  <EvaluationPrice
                    rank={provider?.price || 0}
                    spacing
                    size="1x"
                  />
                </div>
              </div>
            </div>

            <div className="provider__gallery">
              <Gallery />
            </div>
          </div>
          <div className="provider__products">
            <div>
              <h2>Produtos</h2>
              <ProductList products={products} />
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
}

export default Provider;
