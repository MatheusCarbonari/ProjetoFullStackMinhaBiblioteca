import style from './IconesPaginasSucesso.module.css';
import { IoCheckmarkDoneSharp } from 'react-icons/io5'
import { IconContext } from 'react-icons';
import BotaoPadrao from '../Botao';

const IconesPaginasSucesso = () => {
    return(
        <div className={style.divIconPAginaSucesso}>
            <IconContext.Provider value={{ color: "green", size: '5rem'  }}>
                <IoCheckmarkDoneSharp/>
            </IconContext.Provider>
            <div>
                <p>Requisição realizada com sucesso!!!</p>
            </div>
            <BotaoPadrao>
                Home
            </BotaoPadrao>
        </div>
    )
}

export default IconesPaginasSucesso;