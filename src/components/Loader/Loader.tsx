import { ThreeDots } from 'react-loader-spinner';
import css from './Loader.module.css'

export default function Loader (){
    return (<div className={css.loader}><ThreeDots
        visible={true}
        height="200"
        width="200"
        color="#4fa94d"
        radius="10"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
        />
        </div>)
}
