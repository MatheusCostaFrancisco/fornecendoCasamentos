import React from "react";
import ImageGallery from "react-image-gallery";

export type GalleryProps = {
  images?: any[];
};

export default function Gallery({ images }: GalleryProps) {
  const imagesDefault = [
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
  ];

  return <ImageGallery items={imagesDefault} />;
}
