import React from "react";
import { SizeProp } from "@fortawesome/fontawesome-svg-core";
import { ThemeKeys } from "../../../helpers/ThemeKeys";
import { Icon } from "../Icon/Icon";
import "./style.css";

export type EvaluationProps = {
  rank: number;
  onClick?: (item: number) => void;
  color?: keyof ThemeKeys;
  size?: SizeProp;
};

export const Evaluation = ({ rank, onClick, color, size }: EvaluationProps) => {
  const numberStars = Array.from(Array(5).keys());

  const handleChange = (item: number) => {
    if (typeof onClick === "function") {
      onClick(item);
    }
  };
  return (
    <div className="evaluation">
      {numberStars.map((item) => {
        if (item + 1 <= rank) {
          return (
            <div
              onClick={() => handleChange(item++)}
              key={item++}
              className="evaluation__star--fill"
            >
              <Icon icon="star" color={color} sizeIcon={size} />
            </div>
          );
        }
        return (
          <div
            onClick={() => handleChange(item++)}
            key={item++}
            className="evaluation__star--dont-fill"
          >
            <Icon icon="star" sizeIcon={size} />
          </div>
        );
      })}
    </div>
  );
};
