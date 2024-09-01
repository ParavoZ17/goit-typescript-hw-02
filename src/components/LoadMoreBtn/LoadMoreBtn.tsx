import css from './LoadMoreBtn.module.css'

interface LoadMoreBtnProps {
    onClick: () => void;
}

export default function LoadMoreBtn({onClick}:LoadMoreBtnProps){
    
    return (
        <div className={css.loadMore}>
        <button className={css.btn} type='button' onClick={onClick}>Search more</button>
        </div>
    )
}