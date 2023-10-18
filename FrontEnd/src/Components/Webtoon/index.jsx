// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

import style from './TodosOsLivros.module.css';

// import required modules
import { Pagination, EffectCoverflow } from 'swiper/modules';
import CardsLivros from '../CardsLivros';

//imports for connection with server
import { useEffect, useState } from 'react';
import { pegarLivros } from '../../Services/Home/getLivros';
import { deleteLivro } from '../../Services/deletarLivros';
import Loading from '../Loading';

const Webtoon = () => {
    
    const [todosOsItensDaBiblioteca, setTodosOsItensDaBiblioteca] = useState([]);
    const [carregando, setCarregando] = useState(true)

    async function pegarTodosOsItens() {
        const pegarItensBack = await pegarLivros();
        const listaWebtoons = pegarItensBack.filter((item) => item.categoria === "Webtoon")
        setTodosOsItensDaBiblioteca(listaWebtoons);
        setCarregando(false)
    }

    useEffect(() => {
        pegarTodosOsItens()
    }, [])

    async function deletarItenPorId(id) {
        await deleteLivro(id);
        window.location.reload();
    }

    if(carregando){
        return <Loading  title="Webtoons Lidas"/>
    }else if(todosOsItensDaBiblioteca.length === 0 ){
        return <Loading  title="Webtoons Lidas" cor="#007DDD"/>
    }

    return (
    <section className={style.livrosNaoLidosContainer}>
        <h1>Webtoons Lidas</h1>
        <div>
            <Swiper
            //Coverflow
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={2}
            coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
            // slidesPerView={2}
            // spaceBetween={20}
            // freeMode={true}
            // pagination={{
            //     background: 'black',
            //     clickable: true,
            // }}
            // modules={[FreeMode, Pagination]}
            
            >
                {todosOsItensDaBiblioteca.map((item) => (
                    <SwiperSlide key={item._id} className={style.swiperSlideNaoLidos}>
                        <CardsLivros
                            id={item._id}
                            imagem={item.imagem}
                            titulo={item.titulo}
                            deletarLivros={id => deletarItenPorId(id)}
                        />
                    </SwiperSlide>
                ))}
            
            </Swiper>
        </div>
    </section>
    );
    
}

export default Webtoon;