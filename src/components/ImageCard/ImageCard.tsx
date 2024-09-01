import React from "react";
import css from "./ImageCard.module.css";
import { Image } from "../App/App.type";

interface ImageCardProps {
  item: Image;
  openModal: (item: Image) => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ item, openModal }) => {
  return (
    <>
      <img
        onClick={() => openModal(item)}
        src={item.urls.small}
        alt={item.alt_description || ""}
        className={css.img}
      />
    </>
  );
};

export default ImageCard;