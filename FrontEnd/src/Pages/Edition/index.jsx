import styled from "styled-components";
import FormularioDeEdicao from "../../Components/FormularioDeEdicao";
import { useParams } from "react-router-dom";
import { pegarLivrosNoBancoPorId } from "../../Services/getLivrosId";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { editarLivrosNoBancoDeDados } from "../../Services/editarLivros";

const SectionContainer = styled.section`
    background-color: var(--background);
`

const EditionOfBooks = () => {

    let sucesso = useNavigate();

    function redirecionar() {
        sucesso("/sucessoNaRequisicao")
    }

    const [livroASerEditado, setLivroASerEditado] = useState({});

    const { id } = useParams();

    async function pegarLivroPorId(id){
        const retornoLivroId = await pegarLivrosNoBancoPorId(id);
        setLivroASerEditado(retornoLivroId);
    }

    useEffect(() => {
        pegarLivroPorId(id)
    }, [id])

    async function editarLivros(livro, id) {
        await editarLivrosNoBancoDeDados(livro, id)
        redirecionar()
    }
    
    return(
        <SectionContainer>
            <FormularioDeEdicao 
                objetoQueVaiSerEditado={livroASerEditado}
                dadosLivroQueVaiSerEditado={livro => editarLivros(livro, id)}
            />
        </SectionContainer>
    )
}

export default EditionOfBooks;