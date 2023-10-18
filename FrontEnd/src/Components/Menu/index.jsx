import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const HeaderMenu = styled.header`
    max-width: 100vw;
    background-color: var(--azul);
    color: var(--white);
    font-weight: var(--font-bold);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem 0;
`

const ListaMenu = styled.ul`
    display:flex;
    list-style: none;
`

const ItensLista = styled.li`
    margin-right: 1.2rem;
`

const LinkElem = styled(NavLink)`
    color: var(--white);
    text-decoration: none;

    &.active{
        color:black;
    }

`

const Menu = () => {
    return(
        <HeaderMenu>
            <ListaMenu>
                <ItensLista>
                    <LinkElem to="/">
                        Home
                    </LinkElem>
                </ItensLista>
                <ItensLista>
                    <LinkElem to="/adicionarlivros">
                        Adicionar
                    </LinkElem>
                </ItensLista>
            </ListaMenu>
        </HeaderMenu>
    )
}

export default Menu; 