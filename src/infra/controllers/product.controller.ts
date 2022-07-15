import api from "../base";
import { ProductSchema } from "../Schemas/Product.schema";

const productsController = {
  getAll: async () => {
    const { data: providers } = await api.get("/products");
    return providers as ProductSchema[];
  },
  getByName: async (name: string) => {
    const { data: providers } = await api.get(`/products?name_like=${name}`);
    return providers as ProductSchema[];
  },
  getById: async (id: string) => {
    const { data: providers } = await api.get(`/products?id=${id}`);
    return providers[0] as ProductSchema;
  },
  getByProvider: async (providerId: string) => {
    const { data: products } = await api.get(
      `/products?providerId=${providerId}`
    );
    return products as ProductSchema[];
  },
};

export default productsController;
