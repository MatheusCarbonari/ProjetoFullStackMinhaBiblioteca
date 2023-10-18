import styled from 'styled-components';

const Footer = styled.footer`
    max-width: 100vw;
    height: 2rem;
    background-color: var(--azul);
    display: flex;
    align-items: center;
    justify-content: center;
`

const DireitosReservados = styled.p`
    color: var(--white);
    font-size: .7rem;
`

const Rodape = () => {
    return(
        <Footer>
            <DireitosReservados>&copy; Biblioteca Pessoal: todos os direitos reservados</DireitosReservados>
        </Footer>
    )
}

export default Rodape;