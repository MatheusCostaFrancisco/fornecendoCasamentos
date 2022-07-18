import { ClientSchema } from "./Client.schema";
import { ProductSchema } from "./Product.schema";
import { ProviderSchema } from "./Provider.schema";

export type PlanningSchema = {
  id: string;
  providerId: string;
  clientId: string;
  provider: ProviderSchema;
  client: ClientSchema;
  products: ProductSchema[];
};
