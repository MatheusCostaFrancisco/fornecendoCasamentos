import { AddressSchema } from "./Address.schema";
import { ContactSchema } from "./Contact.schema";
import { ProductSchema } from "./Product.schema";
import { ProviderSchema } from "./Provider.schema";

export type ClientSchema = {
  id: string;
  name: string;
  age: number;
  pass: number;
  contact: ContactSchema;
  address: AddressSchema;
  providers: ProviderSchema[];
  products: ProductSchema[];
};
