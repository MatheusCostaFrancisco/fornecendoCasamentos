import React, { useEffect, useState } from "react";

import "./style.css";
import { Icon } from "../Icon/Icon";
import { IconName } from "@fortawesome/fontawesome-svg-core";
import { ThemeKeys } from "../../../helpers/ThemeKeys";

export type IconButtonProps = {
  testID?: string;
  onClick: () => void;
  icon?: IconName;
  text?: string;
  circle?: boolean;
  backgroundColor?: keyof ThemeKeys;
};

export const IconButton = ({
  onClick,
  testID,
  icon = "add",
  text,
  circle = false,
  backgroundColor = "primary",
}: IconButtonProps) => {
  const [rounded, setRounded] = useState("");

  useEffect(() => {
    const isRounded = circle ? "--rounded" : "";
    setRounded(isRounded);
  }, [circle]);

  return (
    <div className="icon-button" onClick={onClick} data-testid={testID}>
      <div className={`icon-button__image${rounded} bg-${backgroundColor}`}>
        <Icon icon={icon} />
      </div>

      <div className="icon-button__text">{text}</div>
    </div>
  );
};
