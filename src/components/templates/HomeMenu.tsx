import React from "react";
import { ItemMenu } from "../atoms/ItemMenu";
import "./style.css";

type HomeMenuProps = {
  handleNavigation: (route: string) => void;
};

export default function HomeMenu({ handleNavigation }: HomeMenuProps) {
  return (
    <div className="home__content">
      <ItemMenu
        name="Meus fornecedores"
        footerName="Visualizar"
        icon="eye"
        onClick={() => handleNavigation("providers")}
      />
      <ItemMenu
        name="Produtos"
        footerName="Visualizar"
        icon="folder"
        onClick={() => handleNavigation("ProductsList")}
      />
      <ItemMenu
        name="Serviços"
        footerName="Visualizar"
        icon="server"
        onClick={() => handleNavigation("ServicesList")}
      />
      <ItemMenu
        name="Planejamento"
        footerName="Visualizar"
        icon="calendar"
        onClick={() => handleNavigation("planning")}
      />
    </div>
  );
}
