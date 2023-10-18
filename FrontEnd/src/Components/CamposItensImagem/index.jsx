import { useEffect, useState } from 'react';
import style from './CamposItensImagem.module.css';

const CamposItensImagem = ({item}) => {

    const [campoDoItem, setCampoDoItem] = useState('')

    function setarValoreEspecifico() {
        for(const chave in item){
            if(chave === "imagem"){
                console.log(`${chave}: ${item[chave]}`)
                setCampoDoItem(item[chave])
            }
        }
    }

    useEffect(() => {
        setarValoreEspecifico()
    }, [item])

    return(
        <div className={style.divPaginaItensImagem}>
            <img src={campoDoItem} className={style.imagemPaginaItens}/>
        </div>
    )
}

export default CamposItensImagem;