import { SizeProp } from "@fortawesome/fontawesome-svg-core";
import React from "react";

import { Icon } from "../Icon/Icon";
import "./style.css";

export type EvaluationPriceProps = {
  rank: number;
  onClick?: (item: number) => void;
  spacing?: boolean;
  size?: SizeProp;
};

export const EvaluationPrice = ({
  rank,
  onClick,
  spacing,
  size,
}: EvaluationPriceProps) => {
  const numberStars = Array.from(Array(5).keys());

  const handleChange = (item: number) => {
    if (typeof onClick === "function") {
      onClick(item);
    }
  };
  return (
    <div className={`evaluation-price${spacing ? "--spacing" : ""}`}>
      {numberStars.map((item) => {
        if (item + 1 <= rank) {
          return (
            <div
              onClick={() => handleChange(item++)}
              key={item++}
              className="evaluation-price__icon--fill"
            >
              <Icon icon="money-bill-alt" color="success" sizeIcon={size} />
            </div>
          );
        }
        return (
          <div
            onClick={() => handleChange(item++)}
            key={item++}
            className="evaluation-price__icon--dont-fill"
          >
            <Icon icon="money-bill" color="gray" sizeIcon={size} />
          </div>
        );
      })}
    </div>
  );
};
