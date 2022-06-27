import React from "react";
import {
  IconDefinition,
  IconName,
  library,
} from "@fortawesome/fontawesome-svg-core";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as all from "@fortawesome/free-solid-svg-icons";

type IconProps = {
  icon: IconName;
};

export const Icon = ({ icon = "add" }: IconProps) => {
  const icons = Object.entries(all).map(([key, value]) => {
    if (key !== "prefix" && key !== "fas") {
      return value as IconDefinition;
    }

    return all.faAdd;
  });
  library.add(...icons);

  return <FontAwesomeIcon icon={["fas", icon]} />;
};
