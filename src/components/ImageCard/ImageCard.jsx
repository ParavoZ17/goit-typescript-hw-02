import css from "./ImageCard.module.css";

export default function ImageCard({ item, openModal }) {
  return (
    <>
     
        <img
        onClick={()=>{openModal(item)}}
          src={item.urls.small}
          alt={item.urls.alt_description}
          className={css.img}
        />
      
    </>
  );
}
