import api from "../base";
import { PlanningSchema } from "../Schemas/Planning.schema";

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
    console.log(providers);
    return providers;
  },
  getClientsByProviderId: async (providerId: string) => {
    const { data: plannings } = await api.get<PlanningSchema[]>(
      `/plannings?providerId=${providerId}`
    );
    const clients = plannings.map((x) => x.client);
    return clients;
  },
};

export default planingController;
