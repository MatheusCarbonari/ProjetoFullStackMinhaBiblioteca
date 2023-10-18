import { useEffect, useState } from 'react';
import style from './CamposItens.module.css';

const CamposItens = ({item, nome, campo}) => {

    const [campoDoItem, setCampoDoItem] = useState('')

    function setarValoreEspecifico() {
        for(const chave in item){
            if(chave === campo){
                console.log(`${chave}: ${item[chave]}`)
                setCampoDoItem(item[chave])
            }
        }
    }

    useEffect(() => {
        setarValoreEspecifico()
    }, [item])

    return(
        <div className={style.divPaginaItens}>
            <p className={style.tituloPaginaItens}>{nome}: <strong>{campoDoItem}</strong></p>
        </div>
    )
}

export default CamposItens;