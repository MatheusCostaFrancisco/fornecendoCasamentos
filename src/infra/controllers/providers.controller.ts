import api from "../base";
import { ProviderSchema } from "../Schemas/Provider.schema";

const providersController = {
  getAll: async () => {
    const { data: providers } = await api.get("/providers");
    return providers as ProviderSchema[];
  },
};

export default providersController;
