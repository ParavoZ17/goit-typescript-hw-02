import css from './LoadMoreBtn.module.css'

export default function LoadMoreBtn({onClick}){
    
    return (
        <div className={css.loadMore}>
        <button className={css.btn} type='button' onClick={onClick}>Search more</button>
        </div>
    )
}