import ImageCard from "../ImageCard/ImageCard"
import css from "./ImageGallery.module.css"

export default function ImageGallery ({items, openModal}){
return(
    <ul className={css.gallery}>
        {   items.map((item)=>{
            return (
                <li key={item.id} className={css.item}>
                    <ImageCard openModal={openModal} item ={item}/>
                </li>
            )
        })}
    </ul>
)
}