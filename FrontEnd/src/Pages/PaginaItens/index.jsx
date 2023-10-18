import { useEffect, useState } from 'react';
import style from './PaginaItens.module.css';
import { useParams } from 'react-router-dom';
import { pegarLivrosNoBancoPorId } from '../../Services/getLivrosId';
import CamposItens from '../../Components/CamposItens';
import CamposItensImagem from '../../Components/CamposItensImagem';

const PaginaItens = () => {

    const [itemQueVaiSerMostrado, setItemQueVaiSerMostrado] = useState([]);

    const { id } = useParams();

    async function pegarItemPorId(id){
        const retornoDoBanco = await pegarLivrosNoBancoPorId(id);
        setItemQueVaiSerMostrado(retornoDoBanco);
    }

    useEffect(() => {
        pegarItemPorId(id)
    }, [id])

    console.log(itemQueVaiSerMostrado)

    return(
       <section className={style.sectionContainerItens}>
            
            <CamposItens
                nome='Titulo'
                campo='titulo'
                item={itemQueVaiSerMostrado}
            />

            <CamposItens
                nome='Autor'
                campo='autor'
                item={itemQueVaiSerMostrado}
            />

            <CamposItens
                nome='Editora'
                campo='editora'
                item={itemQueVaiSerMostrado}
            />

            <CamposItens
                nome='Ano de Leitura'
                campo='anoLeitura'
                item={itemQueVaiSerMostrado}
            />

            <CamposItens
                nome='Descrição'
                campo='descricao'
                item={itemQueVaiSerMostrado}
            />
            
            <CamposItensImagem
                item={itemQueVaiSerMostrado}
            />

            {/* 
            
            <div className={style.divPaginaItens}>
                <p className={style.tituloPaginaItens}>Imagem</p>
            </div> */}
       </section>
    )
}

export default PaginaItens;