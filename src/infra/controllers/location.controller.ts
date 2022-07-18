import { apiIBGE } from "../base";
import { StateSchema } from "../Schemas/State.schema";

const locationController = {
  getStates: async () => {
    const { data: states } = await apiIBGE.get<StateSchema[]>("/estados");

    return states;
  },
  getCities: async (uf: string) => {
    const { data: cities } = await apiIBGE.get<StateSchema[]>(
      `/estados/${uf}/municipios`
    );

    return cities;
  },
};

export default locationController;
