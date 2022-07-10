import { AddressSchema } from "./Address.schema";
import { ContactSchema } from "./Contact.schema";
import { ProviderSchema } from "./Provider.schema";

export type ClientSchema = {
  id: number;
  name: string;
  age: number;
  pass: number;
  contact: ContactSchema;
  address: AddressSchema;
  providers: ProviderSchema[];
};
