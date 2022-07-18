import React from "react";
import { Icon } from "../Icon/Icon";

type LikeButtonProps = {
  isLiked?: boolean;
  onClick: () => void;
};

export default function LikeButton({
  isLiked = false,
  onClick,
}: LikeButtonProps) {
  return (
    <div onClick={onClick}>
      {isLiked ? (
        <div>
          <Icon icon="heart" sizeIcon="2x" color="error" />
        </div>
      ) : (
        <div>
          <Icon icon="heart-broken" sizeIcon="2x" color="error" />
        </div>
      )}
    </div>
  );
}
