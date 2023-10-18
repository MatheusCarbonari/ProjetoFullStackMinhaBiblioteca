import styled from "styled-components";
import IconesPaginasSucesso from "../../Components/IconesPaginasSucesso";

const SectionSucesso = styled.section`
    background-color: var(--background);
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`

const PaginaDeSucesso = () => {
    return(
        <SectionSucesso>
            <IconesPaginasSucesso/>
        </SectionSucesso>
    )
}

export default PaginaDeSucesso;