import api from "../base";
import { ClientSchema } from "../Schemas/Client.schema";
import { PlanningSchema } from "../Schemas/Planning.schema";
import { ProductSchema } from "../Schemas/Product.schema";
import { ProviderSchema } from "../Schemas/Provider.schema";
import { v4 as uuidv4 } from "uuid";
const planingController = {
  getByClientId: async (clientId: string) => {
    const { data: plannings } = await api.get(
      `/plannings?clientId=${clientId}`
    );
    return plannings as PlanningSchema[];
  },
  getByProviderId: async (providerId: string) => {
    const { data: plannings } = await api.get(
      `/plannings?providerId=${providerId}`
    );
    return plannings as PlanningSchema[];
  },
  getProvidersByClient: async (clientId: string) => {
    const { data: plannings } = await api.get<PlanningSchema[]>(
      `/plannings?clientId=${clientId}`
    );
    const providers = plannings.map((x) => x.provider);
    return providers;
  },
  getClientsByProviderId: async (providerId: string) => {
    const { data: plannings } = await api.get<PlanningSchema[]>(
      `/plannings?providerId=${providerId}`
    );
    const clients = plannings.map((x) => x.client);
    return clients;
  },
  saveProductInPlanning: async (
    product: ProductSchema,
    client: ClientSchema,
    providerId: string,
    planning?: PlanningSchema
  ) => {
    if (planning) {
      const copyPanning = { ...planning };
      const newProducts = [...copyPanning.products, product];
      const formattedPlanning = {
        ...copyPanning,
        products: newProducts,
      };

      api.delete(`plannings/${planning.id}`);
      api.post("/plannings", formattedPlanning);
    } else {
      const {
        data: [provider],
      } = await api.get<ProviderSchema[]>(`/providers?id=${providerId}`);

      const planning = {
        id: uuidv4(),
        providerId: provider.id,
        clientId: client.id,
        client: client,
        provider: provider,
        products: [product],
      } as PlanningSchema;

      api.post("/plannings", planning);
    }
  },

  deleteProductInPlanning: async (
    product: ProductSchema,
    planningId: string
  ) => {
    const {
      data: [planning],
    } = await api.get<PlanningSchema[]>(`/plannings?id=${planningId}`);

    if (planning.products.length === 1) {
      api.delete(`plannings/${planning.id}`);
      return;
    }

    const copyPanning = { ...planning };
    const newProducts = copyPanning.products.filter((x) => x.id !== product.id);
    const formattedPlanning = {
      ...copyPanning,
      products: newProducts,
    };

    api.delete(`plannings/${planning.id}`);
    api.post("/plannings", formattedPlanning);
  },
};

export default planingController;
