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
      <Icon icon="heart" sizeIcon="2x" color={isLiked ? "error" : undefined} />
    </div>
  );
}
