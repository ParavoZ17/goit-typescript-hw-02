import React from "react";
import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";
import { Image } from "../App/App.type";

interface ImageGalleryProps {
  items: Image[];
  openModal: (item: Image) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ items, openModal }) => {
  return (
    <ul className={css.gallery}>
      {items.map((item) => (
        <li key={item.id} className={css.item}>
          <ImageCard openModal={openModal} item={item} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
