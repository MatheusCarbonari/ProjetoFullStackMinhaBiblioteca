import style from './Botao.module.css';
import { NavLink } from 'react-router-dom';

const BotaoPadrao = ({children}) => {
    return(
        <NavLink 
            className={style.buttonContainer}
            to="/"
            end
        >
            <p>{children}</p>
        </NavLink>
    )
}

export default BotaoPadrao;