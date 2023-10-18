import ProfileCard from './LoadingStyle';
import style from './Loading.module.css';

const Loading = ({cor, title}) => {

    if(cor === undefined){
        cor = "#DCDCDC"
    }

    return(
        <div className={style.loadingContainer}>
            <h1>{title}</h1>
            <ProfileCard cor={cor}/>
        </div>
    )
}

export default Loading;