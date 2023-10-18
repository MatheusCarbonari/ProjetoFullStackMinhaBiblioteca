// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

import style from './LivrosLidos.module.css';

// import required modules
import { Pagination, EffectCoverflow } from 'swiper/modules';
import CardsLivros from '../CardsLivros';

// imports for connection with server
import { useEffect, useState } from 'react';
import { pegarLivros } from '../../Services/Home/getLivros';
import { deleteLivro } from '../../Services/deletarLivros';
import Loading from '../Loading';

const LivrosLidos = () => {

    const [livrosLidosBack, setLivrosLidosBack] = useState([]);
    const [carregando, setCarregando] = useState(true)

    async function pegarLivrosParaSlide() {
        const buscarLivrosBack = await pegarLivros();
        const filtrarPorCategoria = buscarLivrosBack.filter((livro) => livro.categoria === "Livro")
        const novaListaDeLivrosLidos = filtrarPorCategoria.filter((livro) => livro.lido === "true")
        setLivrosLidosBack(novaListaDeLivrosLidos);
        setCarregando(false)
    }

    useEffect(() => {
        pegarLivrosParaSlide()
    }, [])

    async function deletarLivroPorId(id) {
        await deleteLivro(id);
        window.location.reload();
    }

    if(carregando){
        return <Loading  title="Livros Lidos"/>
    }else if(livrosLidosBack.length === 0 ){
        return <Loading  title="Livros Lidos" cor="#007DDD"/>
    }

    return (
    <section className={style.livrosLidosSectionContainer}>
        <h1>Livros Lidos</h1>
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
                {livrosLidosBack.map((item) => (
                    <SwiperSlide key={item._id} className={style.swiperSlide}>
                        <CardsLivros
                            id={item._id}
                            imagem={item.imagem}
                            titulo={item.titulo}
                            deletarLivros={id => deletarLivroPorId(id)}
                        />
                    </SwiperSlide>
                ))}
            
            </Swiper>
        </div>
    </section>
    );
    
}

export default LivrosLidos;