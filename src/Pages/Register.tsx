import { motion } from "framer-motion";
import React, { useMemo, useState } from "react";
import { Button } from "../components/atoms/Button";
import { InputText } from "../components/atoms/InputText";
import { ThemeKeys } from "../helpers/ThemeKeys";
import { AddressSchema } from "../infra/Schemas/Address.schema";
import { ClientSchema } from "../infra/Schemas/Client.schema";

type typeModelClient = Omit<ClientSchema, "address" | "id" | "contact"> &
  AddressSchema & {
    phone: string;
    mail: string;
  };

type ColorType = {
  client: keyof ThemeKeys;
  provider: keyof ThemeKeys;
};

export default function Register() {
  const [model, setModel] = useState<typeModelClient>({} as typeModelClient);
  const [type, setType] = useState<"client" | "fornecedor">("client");

  const handleChange = (
    title: keyof typeModelClient,
    value: React.ChangeEvent<HTMLInputElement>
  ) => {
    const field = { [title]: value.target.value };
    setModel((prev) => ({ ...prev, field }));
  };

  const colorType = useMemo(() => {
    if (type === "client") {
      return {
        client: "primary",
        provider: "gray",
      } as ColorType;
    } else {
      return {
        client: "gray",
        provider: "primary",
      } as ColorType;
    }
  }, [type]);

  return (
    <div className="background">
      <motion.div
        className="client-register"
        initial={{ opacity: 0, scale: 0.2 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
      >
        <div className="client-register__wrapper">
          <div className="client-register__title">
            <h3>Cadastro</h3>
          </div>
          <div className="client-register__personal-info">
            <InputText
              label="Nome"
              value={model.name}
              onChange={(e) => handleChange("name", e)}
            />
            <InputText
              label="Idade"
              value={model.age}
              onChange={(e) => handleChange("age", e)}
            />
            <InputText
              label="E-mail"
              type="email"
              value={model.mail}
              onChange={(e) => handleChange("mail", e)}
            />
            <InputText
              label="Celular"
              value={model.phone}
              onChange={(e) => handleChange("phone", e)}
            />
          </div>
          <div className="client-register__personal-adress">
            <div>
              <InputText
                label="Logradouro"
                value={model.streetName}
                onChange={(e) => handleChange("phone", e)}
              />
              <InputText
                label="Número"
                value={model.number}
                onChange={(e) => handleChange("number", e)}
              />
            </div>
            <InputText
              label="Estado"
              value={model.state}
              onChange={(e) => handleChange("state", e)}
            />
            <InputText
              label="Cidade"
              value={model.city}
              onChange={(e) => handleChange("city", e)}
            />
          </div>
          <div className="client-register__personal-password">
            <InputText
              label="Senha"
              type="password"
              value={model.pass}
              onChange={(e) => handleChange("pass", e)}
            />
          </div>
          <div className="client-register__type">
            <Button
              label="Cliente"
              onClick={() => {
                setType("client");
              }}
              rounded
              backgroundColor={colorType.client}
            />
            <Button
              label="Fornecedor"
              backgroundColor={colorType.provider}
              rounded
              onClick={() => {
                setType("fornecedor");
              }}
            />
          </div>
          <div>
            <Button
              label="Registrar"
              onClick={() => {}}
              rounded
              loading={false}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
