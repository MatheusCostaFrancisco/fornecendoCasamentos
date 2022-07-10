import api from "../base";
import { UserSchema } from "../Schemas/User.schema";

const userController = {
  authentication: async (mail: string, pass: string) => {
    const { data: user } = await api.get(`/users?mail=${mail}&pass=${pass}`);

    return user[0] as UserSchema;
  },
};

export default userController;
