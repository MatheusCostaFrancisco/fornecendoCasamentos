import React from "react";
import {
  IconDefinition,
  IconName,
  library,
  SizeProp,
} from "@fortawesome/fontawesome-svg-core";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as all from "@fortawesome/free-solid-svg-icons";
import { ThemeKeys, ThemeKeysKey } from "../../../helpers/ThemeKeys";

type IconProps = {
  icon: IconName;
  color?: keyof ThemeKeys;
  sizeIcon?: SizeProp;
};

export const Icon = ({
  icon = "add",
  color = "gray",
  sizeIcon = "1x",
}: IconProps) => {
  const icons = Object.entries(all).map(([key, value]) => {
    if (key !== "prefix" && key !== "fas") {
      return value as IconDefinition;
    }

    return all.faAdd;
  });
  library.add(...icons);

  return (
    <FontAwesomeIcon
      icon={["fas", icon]}
      color={ThemeKeysKey[color]}
      size={sizeIcon}
    />
  );
};
