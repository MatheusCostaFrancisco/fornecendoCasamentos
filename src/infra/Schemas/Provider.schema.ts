import { AddressSchema } from "./Address.schema";
import { ContactSchema } from "./Contact.schema";

export type ProviderSchema = {
  id: string;
  name: string;
  contact: ContactSchema;
  address: AddressSchema;
  stars: number;
  price: number;
};
