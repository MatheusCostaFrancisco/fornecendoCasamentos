import React, { useEffect, useState } from "react";
import { Avatar } from "../../atoms/Avatar";

import { useSelector } from "react-redux";
import { selectorUser } from "../../../redux/userSlice";
import { ProviderSchema } from "../../../infra/Schemas/Provider.schema";
import { ClientSchema } from "../../../infra/Schemas/Client.schema";
import NavbarMenu from "../../templates/NavBarMenu/NavBarMenu";

export type HeaderProps = {
  name: string;
};

export default function Header({ name }: HeaderProps) {
  const selector = useSelector(selectorUser);
  const [infos, setInfos] = useState<ProviderSchema | ClientSchema>();

  useEffect(() => {
    setInfos(selector);
  }, [selector]);

  return (
    <header className="header">
      <div className="header__menu">
        <NavbarMenu />
      </div>
      <div className="header__title">
        <p>{name}</p>
      </div>
      <div className="header__user">
        <div className="header__user__avatar">
          <Avatar size="mini" alt="userFace" />
        </div>
        <div className="header__user__text">{infos?.name}</div>
      </div>
    </header>
  );
}
