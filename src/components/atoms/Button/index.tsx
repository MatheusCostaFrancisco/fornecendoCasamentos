import React from "react";
import { IconName } from "@fortawesome/fontawesome-svg-core";
import { Icon } from "../Icon/Icon";

import "./style.css";
import { ThemeKeys } from "../../../helpers/ThemeKeys";
import { Spinner } from "../Spinner";

export type ButtonProps = {
  label: string;
  onClick: () => void;
  icon?: IconName;
  rounded?: boolean;
  backgroundColor?: keyof ThemeKeys;
  loading?: boolean;
  disabled?: boolean;
};

export const Button = ({
  label,
  onClick,
  icon,
  rounded = false,
  backgroundColor = "primary",
  loading = false,
  disabled = false,
}: ButtonProps) => {
  const circle = rounded ? "button--rounded" : "";

  const getColor = () => {
    if (disabled || loading) return "bg-disabled";

    return `bg-${backgroundColor}`;
  };

  const color = getColor();

  return (
    <div
      className={`button ${color}  ${circle}`}
      onClick={disabled || loading ? undefined : onClick}
    >
      {icon && !loading && (
        <div className="button__icon">
          <Icon icon={icon} />
        </div>
      )}

      {loading && (
        <div className="button__icon">
          <Spinner />
        </div>
      )}
      <div className="button__text">{label}</div>
    </div>
  );
};
