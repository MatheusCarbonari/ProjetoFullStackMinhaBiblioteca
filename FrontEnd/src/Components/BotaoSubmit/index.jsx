import style from './BotaoSubmit.module.css';

const BotaoSubmit = () => {
    return(
        <div className={style.divInputSubmit}>
            <input type="submit" value="Enviar"/>
        </div>
    )
}

export default BotaoSubmit;