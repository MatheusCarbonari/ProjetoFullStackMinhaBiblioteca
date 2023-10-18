// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

import style from './Manga.module.css';

// import required modules
import { Pagination, EffectCoverflow } from 'swiper/modules';
import CardsLivros from '../CardsLivros';

//imports for connection with server
import { useEffect, useState } from 'react';
import { pegarLivros } from '../../Services/Home/getLivros';
import { deleteLivro } from '../../Services/deletarLivros';
import Loading from '../Loading';

const Mangas = () => {

    const [mangasDaBiblioteca, setMangasDaBiblioteca] = useState([]);
    const [carregando, setCarregando] = useState(true)

    async function pegarTodosOsItens() {
        const pegarItensBack = await pegarLivros();
        const listaMangas = pegarItensBack.filter((item) => item.categoria === "Manga")
        const listaMangasLidos = listaMangas.filter((item) => item.lido === "true")
        setMangasDaBiblioteca(listaMangasLidos);
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
        return <Loading  title="Mangas Lidos"/>
    }else if(mangasDaBiblioteca.length === 0 ){
        return <Loading  title="Mangas Lidos" cor="#007DDD"/>
    }

    return (
    <section className={style.livrosNaoLidosContainer}>
        <h1>Mangas Lidos</h1>
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
                {mangasDaBiblioteca.map((item) => (
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

export default Mangas;