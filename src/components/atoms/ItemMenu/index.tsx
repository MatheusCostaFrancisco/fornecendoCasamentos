import { IconName } from "@fortawesome/fontawesome-svg-core";
import React from "react";
import { Icon } from "../Icon/Icon";

import "./style.css";

export type ItemMenuProps = {
  name: string;
  onClick: () => void;
  footerName: string;
  icon: IconName;
};

export const ItemMenu = ({
  name,
  onClick,
  footerName,
  icon,
}: ItemMenuProps) => {
  return (
    <div className="item-menu" onClick={onClick}>
      <div className="item-menu__header__image">
        <div className="item-menu__header__overlay">
          <h3>{name}</h3>
        </div>
      </div>
      <div className="item-menu__footer">
        <div className="item-menu__footer__text">
          <h3>{footerName}</h3>
        </div>
        <div className="item-menu__footer__icon">
          <Icon icon={icon} color="primary" />
        </div>
      </div>
    </div>
  );
};
