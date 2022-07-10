import React from "react";
import "./style.css";

type WrapperProps = {
  children: JSX.Element;
};

export const Wrapper = ({ children }: WrapperProps) => {
  return (
    <div className="wrapper">
      <div className="wrapper__content">{children}</div>
    </div>
  );
};
