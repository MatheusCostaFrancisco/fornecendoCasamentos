import React from "react";
import { Avatar } from "../../atoms/Avatar";
import { Icon } from "../../atoms/Icon/Icon";

export default function Header() {
  const user = "Matheus Costa Francisco";
  return (
    <header className="header">
      <div className="header__menu">
        <Icon icon="align-justify" color="white" />
      </div>
      <div className="header__title">
        <p>Home</p>
      </div>
      <div className="header__user">
        <div className="header__user__avatar">
          <Avatar size="mini" alt="userFace" />
        </div>
        <div className="header__user__text">{user}</div>
      </div>
    </header>
  );
}
