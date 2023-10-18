import { useState } from 'react';
import CamposFormulario from '../CamposFormulario';
import TextArea from '../TextArea';
import style from './Formulario.module.css';
import CampoLido from '../CampoLido';
import { AdicionarLivrosAoBanco } from '../../Services/adicionarLivros';
import { useNavigate } from 'react-router-dom';
import BotaoSubmit from '../BotaoSubmit';
import CampoCategoria from '../CampoCategoria';

const Formulario = () => {

    let navigate = useNavigate();

    function redirecionar(){
        navigate('/')
    }

    const [dados, setDados] = useState({
        titulo: '',
        autor: '',
        editora: '',
        anoLeitura: '',
        imagem: '',
        lido: ''|| 'false',
        descricao: '',
        categoria: '',
    })

    const valorInput = (event) => setDados({...dados, [event.target.name]: event.target.value})

    const enviarForm = (e) => {
        e.preventDefault()
        console.log(`
            titulo: ${dados.titulo}
            autor: ${dados.autor}
            editora: ${dados.editora}
            anoLeitura: ${dados.anoLeitura}
            imagem: ${dados.imagem}
            lido: ${dados.lido}
            descricao: ${dados.descricao}
            categotia: ${dados.categoria}
        `)

        AdicionarLivrosAoBanco(dados)
        redirecionar()
    }
    
    return(
        <div className={style.formulariocontainer}>
            <form onSubmit={enviarForm} className={style.formulario}>
                <fieldset className={style.fieldsetContainer}>  
                    <CamposFormulario
                        label="Titulo do Livro:"
                        type="text"
                        name="titulo"
                        placeholder="Digite o titulo do Livro"
                        required={true}
                        pegarValorInput={valor => valorInput(valor)}
                    />
                    <CamposFormulario
                        label="Autor:"
                        type="text"
                        name="autor"
                        placeholder="Digite o nome do autor"
                        required={true}
                        pegarValorInput={valor => valorInput(valor)}
                    />
                    <CamposFormulario
                        label="Editora:"
                        type="text"
                        name="editora"
                        placeholder="Digite a editora"
                        required={true}
                        pegarValorInput={valor => valorInput(valor)}
                    />
                    <CampoCategoria
                        label="Categoria:"           
                        name="categoria"
                        pegarValorInput={valor => valorInput(valor)}
                    />
                    <CamposFormulario
                        label="Ano em que foi lido:"
                        type="text"
                        name="anoLeitura"
                        placeholder="Ano que leu o livro"
                        required=""
                        pegarValorInput={valor => valorInput(valor)}
                    />
                    <TextArea 
                        pegarValorInput={valor => valorInput(valor)}
                        name="descricao"
                        placeholder='Digite a descrição do livro...'
                        required={true}
                    />
                    <CamposFormulario
                        label="Imagem:"
                        type="url"
                        name="imagem"
                        placeholder="Cole a url da imagem"
                        required=""
                        pegarValorInput={valor => valorInput(valor)}
                    />
                    <CampoLido
                        pegarValorInput={valor => valorInput(valor)}
                        name="lido"
                    />
                    <BotaoSubmit/>
                </fieldset>
            </form>
        </div>
    )
}

export default Formulario;