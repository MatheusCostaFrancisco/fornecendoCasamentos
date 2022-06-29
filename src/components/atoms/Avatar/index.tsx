import React from "react";
import "./style.css";

export type AvatarProps = {
  url?: string;
  alt: string;
  size?: "large" | "medium" | "small" | "mini";
};

export const Avatar = ({ url, alt, size = "medium" }: AvatarProps) => {
  const emptyImage = {
    url: `${process.env.PUBLIC_URL}/Profile_avatar_placeholder_large.png`,
    alt: "Sem imagem fornecida",
  };

  return (
    <div>
      <div className={`avatar avatar--${size}`}>
        <img src={url || emptyImage.url} alt={alt || emptyImage.alt} />
      </div>
    </div>
  );
};
