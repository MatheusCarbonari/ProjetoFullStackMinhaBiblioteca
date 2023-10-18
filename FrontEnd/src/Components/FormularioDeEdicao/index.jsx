import { useEffect, useState } from 'react';
import BotaoSubmit from '../BotaoSubmit';
import style from './FormularioDeEdicao.module.css';
import CamposEditar from '../CamposEditar/index ';
import TextAreaEditar from '../TextArea/TextAreaEditar';
import CampoLidoEdicao from '../CampoLidoEdicao';
import CampoCategoriaEdicao from '../CampoCategoriaEdicao';

const FormularioDeEdicao = ({objetoQueVaiSerEditado, dadosLivroQueVaiSerEditado}) => {

    const [titulo, setTitulo] = useState("");
    const [autor, setAutor] = useState("");
    const [editora, setEditora] = useState("");
    const [anoLeitura, setAnoLeitura] = useState("");
    const [imagem, setImagem] = useState("");
    const [lido, setLido] = useState("");
    const [descricao, setDescricao] = useState("");
    const [categoria, setCategoria] = useState("");

    function setarValoresUseStates() {
        for(const chave in objetoQueVaiSerEditado){
            
            switch (chave) {
                case 'titulo':
                    setTitulo(objetoQueVaiSerEditado[chave])
                    break;
                case 'autor':
                    setAutor(objetoQueVaiSerEditado[chave])
                    break;
                case 'editora':
                    setEditora(objetoQueVaiSerEditado[chave])
                    break;
                case 'anoLeitura':
                    setAnoLeitura(objetoQueVaiSerEditado[chave])
                    break;
                case 'imagem':
                    setImagem(objetoQueVaiSerEditado[chave])
                    break;
                case 'lido':
                    setLido(objetoQueVaiSerEditado[chave])
                    break;
                case 'descricao':
                    setDescricao(objetoQueVaiSerEditado[chave])
                    break;
                case 'categoria':
                    setCategoria(objetoQueVaiSerEditado[chave])
                    break;
                default:
                    break;
            }
            
        }
    }

    useEffect(() => {
        setarValoresUseStates()
    }, [objetoQueVaiSerEditado])

    const enviarEditar = (event) => {
        event.preventDefault()
        dadosLivroQueVaiSerEditado({
            titulo: titulo,
            autor: autor,
            editora: editora,
            categoria: categoria,
            anoLeitura: anoLeitura,
            imagem: imagem,
            lido: lido,
            descricao: descricao
        })
    }

    return(
        <div className={style.containerFormDeEdicao}>
            <form onSubmit={enviarEditar} className={style.formularioDeEdicao}>
                <fieldset className={style.containerFieldSet}>
                    <CamposEditar
                        label="Titulo do Livro:"
                        type="text"
                        name="titulo"
                        placeholder="Digite o titulo do Livro"
                        required={true}
                        mudarValorInput={valor => setTitulo(valor)}
                        value={titulo}
                    />
                    <CamposEditar
                        label="Autor:"
                        type="text"
                        name="autor"
                        placeholder="Digite o nome do autor"
                        required={true}
                        mudarValorInput={valor => setAutor(valor)}
                        value={autor}
                    />
                    <CamposEditar
                        label="Editora:"
                        type="text"
                        name="editora"
                        placeholder="Digite a editora"
                        required={true}
                        mudarValorInput={valor => setEditora(valor)}
                        value={editora}
                    />
                    <CampoCategoriaEdicao
                        label="Categoria:"
                        name="categoria"
                        mudarValorInput={valor => setCategoria(valor)}
                        value={categoria}
                    />
                    <CamposEditar
                        label="Ano em que foi lido:"
                        type="text"
                        name="anoLeitura"
                        placeholder="Ano que leu o livro"
                        required=""
                        mudarValorInput={valor => setAnoLeitura(valor)}
                        value={anoLeitura}
                    />
                    <TextAreaEditar 
                        label=""
                        type="text"
                        name="descricao"
                        placeholder='Digite a descrição do livro...'
                        required={true}
                        mudarValorInput={valor => setDescricao(valor)}
                        value={descricao}
                    />
                    <CamposEditar
                        label="Imagem:"
                        type="url"
                        name="imagem"
                        placeholder="Cole a url da imagem"
                        required=""
                        mudarValorInput={valor => setImagem(valor)}
                        value={imagem}
                    />
                    <CampoLidoEdicao
                        mudarValorInput={valor => setLido(valor)}
                        name="lido"
                        value={lido}
                    />
                    <BotaoSubmit/>
                </fieldset>
            </form>
        </div>
    )
}

export default FormularioDeEdicao;