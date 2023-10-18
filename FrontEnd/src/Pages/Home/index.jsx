import styled from 'styled-components';
import BarraDePesquisa from '../../Components/Pesquisa';
import LivrosLidos from '../../Components/LivrosLidos';
import MinhaListadeLeitura from '../../Components/MinhaListadeLeitura';
import Webtoon from '../../Components/Webtoon';
import Mangas from '../../Components/Manga';
import Novels from '../../Components/Novels';

const MainHome = styled.main`   
`

const Home = ()=> {
    return(
        <MainHome>
            <BarraDePesquisa/>
            <LivrosLidos/>
            <Webtoon/>
            <Mangas/>
            <Novels/>
            <MinhaListadeLeitura/>
        </MainHome>
    )
}

export default Home;