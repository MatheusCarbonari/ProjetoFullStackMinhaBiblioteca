import { IconContext } from 'react-icons';
import style from './CardsLivros.module.css';
import { FaTimesCircle } from 'react-icons/fa';
import { FaEdit } from 'react-icons/fa';
import { FaShareAlt } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const CardsLivros = ({imagem, titulo, deletarLivros, id, livroParaEditar}) => {

    const aoDeletar = (id) => {
        var respostaUsuario = window.confirm("O Livro será deletado de forma permanente?");
        if(respostaUsuario === true){
            deletarLivros(id)
            alert("O livro foi deletado corretamente")
        }else{
            alert("O livro não foi deletado")
        }
    }

    const idItens = `${window.location.pathname}livro/${id}`
    const idUrl = `${window.location.pathname}editar/${id}`

    return(
        <div className={style.cardsContainer}>
            <div className={style.divImagem}>
                <img
                    src={imagem}
                    alt='Slider'
                    className={style.cardsContainer__SlideImage}
                />
            </div>
            <NavLink to={idItens} className={style.navLink}>
                <h2 className={style.tituloLivro}>{titulo}</h2>
            </NavLink>
            <div className={style.iconsContainer}>
                <IconContext.Provider value={{ color: "blue", size: '2rem'  }}>
                    <div className={style.div_edit}>
                        <NavLink to={idUrl}>
                            <FaEdit />
                        </NavLink>
                    </div> 
                </IconContext.Provider>
                <IconContext.Provider value={{ color: "red", size: '2rem' }}>
                    <div className={style.div_edit}>
                        <FaTimesCircle
                            onClick={() => aoDeletar(id)}
                        />
                    </div> 
                </IconContext.Provider>
                <IconContext.Provider value={{ color: "black", size: '2rem'  }}>
                    <div className={style.div_edit}>
                        <FaShareAlt />
                    </div> 
                </IconContext.Provider>
            </div>
        </div>
    )
}

export default CardsLivros;