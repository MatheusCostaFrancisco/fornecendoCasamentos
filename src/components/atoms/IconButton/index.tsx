import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconName, library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCheckSquare, faAdd } from "@fortawesome/free-solid-svg-icons";
import "./style.css";

library.add(fab, faCheckSquare, faAdd);

export type IconButtonProps = {
  testID?: string;
  onClick: () => void;
  icon?: IconName;
  text?: string;
  circle?: boolean;
  backgroundColor?: any; // TODO ThemeKeys
};

export const IconButton = ({
  onClick,
  testID,
  icon = "add",
  text = "textButton",
  circle = false,
}: IconButtonProps) => {
  const [rounded, setRounded] = useState("");

  useEffect(() => {
    const isRounded = circle ? "--rounded" : "";
    setRounded(isRounded);
  }, [circle]);

  return (
    <div className="icon-button" onClick={onClick} data-testid={testID}>
      <div className={`icon-button__image${rounded} bg-color`}>
        <FontAwesomeIcon icon={["fas", icon]} />
      </div>

      <div className="icon-button__text">{text}</div>
    </div>
  );
};
