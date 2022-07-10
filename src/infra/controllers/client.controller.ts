import api from "../base";
import { ClientSchema } from "../Schemas/Client.schema";

const clientController = {
  getAll: async () => {
    const { data: providers } = await api.get("/clients");
    return providers as ClientSchema[];
  },
  getByName: async (name: string) => {
    const { data: providers } = await api.get(`/clients?name_like=${name}`);
    return providers as ClientSchema[];
  },
  authentication: async (mail: string, pass: string) => {
    const { data: clients } = await api.get(
      `/clients?mail=${mail}&pass=${pass}`
    );

    return clients[0] as ClientSchema;
  },
};

export default clientController;
