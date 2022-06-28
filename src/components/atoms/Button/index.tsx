import React from "react";
import { IconName } from "@fortawesome/fontawesome-svg-core";
import { Icon } from "../Icon/Icon";

import "./style.css";
import { ThemeKeys } from "../../../helpers/ThemeKeys";

export type ButtonProps = {
  label: string;
  onClick: () => void;
  icon?: IconName;
  rounded?: boolean;
  backgroundColor?: keyof ThemeKeys;
};

export const Button = ({
  label,
  onClick,
  icon,
  rounded = false,
  backgroundColor = "primary",
}: ButtonProps) => {
  const circle = rounded ? "button--rounded" : "";
  return (
    <div className={`button bg-${backgroundColor} ${circle}`} onClick={onClick}>
      {icon && (
        <div className="button__icon">
          <Icon icon={icon} />
        </div>
      )}
      <div className="button__text">{label}</div>
    </div>
  );
};
