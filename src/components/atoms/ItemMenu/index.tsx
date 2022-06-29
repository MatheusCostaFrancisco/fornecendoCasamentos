import React from "react";
import { Icon } from "../Icon/Icon";

import "./style.css";

export const ItemMenu = () => {
  return (
    <div className="item-menu">
      <div className="item-menu__header__image">
        <div className="item-menu__header__overlay">
          <h3>Fornecedor</h3>
        </div>
      </div>
      <div className="item-menu__footer">
        <div className="item-menu__footer__text">
          <h3>Pesquisar</h3>
        </div>
        <div className="item-menu__footer__icon">
          <Icon icon="search" />
        </div>
      </div>
    </div>
  );
};
