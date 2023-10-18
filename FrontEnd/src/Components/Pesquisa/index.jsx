import styled from 'styled-components'

const SectionContainerInput = styled.section`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Input = styled.input`
    width: 70%;
    margin-top: 1rem;
    border-radius: 16px;
    padding: .7rem;
    font-size: 18px;
    border: 1px solid var(--azul);
    background-color: var(--background);
`

const BarraDePesquisa = () => {
    return(
        <SectionContainerInput>
            <Input name='pesquisa' type='text' placeholder='Pesquisar...'/>
        </SectionContainerInput>
    )
}

export default BarraDePesquisa;