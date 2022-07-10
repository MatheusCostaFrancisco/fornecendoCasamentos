import api from "../base";
import { ProviderSchema } from "../Schemas/Provider.schema";

const providersController = {
  getAll: async () => {
    const { data: providers } = await api.get("/providers");
    return providers as ProviderSchema[];
  },
  getByName: async (name: string) => {
    const { data: providers } = await api.get(`/providers?name_like=${name}`);
    return providers as ProviderSchema[];
  },
  getById: async (id: string) => {
    const { data: providers } = await api.get(`/providers?id=${id}`);
    return providers[0] as ProviderSchema;
  },
  authentication: async (mail: string, pass: string) => {
    const { data: providers } = await api.get(
      `/providers?mail=${mail}&pass=${pass}`
    );

    return providers[0] as ProviderSchema;
  },
};

export default providersController;
