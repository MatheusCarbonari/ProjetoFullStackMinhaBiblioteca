// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

import style from './MinhaListadeLeitura.module.css';

// import required modules
import { Pagination, EffectCoverflow } from 'swiper/modules';
import CardsLivros from '../CardsLivros';

// import for connection with server
import { useEffect, useState } from 'react';
import { pegarLivros } from '../../Services/Home/getLivros';
import { deleteLivro } from '../../Services/deletarLivros';
import Loading from '../Loading';

const MinhaListadeLeitura = () => {
    
    const [livrosListaLeitura, setLivrosListaLeitura] = useState([])
    const [carregando, setCarregando] = useState(true)

    async function pegarLivrosParaLer() {
        const buscarLivrosBack = await pegarLivros();
        const livrosParaLer = buscarLivrosBack.filter((livro) => livro.lido === "false");
        setLivrosListaLeitura(livrosParaLer);
        setCarregando(false)
    }

    useEffect(() => {
        pegarLivrosParaLer()
    }, [])

    async function deletarLivroPorId(id) {
        await deleteLivro(id);
        window.location.reload();
    }

    if(carregando){
        return <Loading   title="Lista de Leitura"/>
    }else if(livrosListaLeitura.length === 0 ){
        return <Loading   title="Lista de Leitura" cor="#007DDD"/>
    }

    return (
        <section className={style.MinhaListadeLeituraContainer}>
            <h1>Lista de Leitura</h1>
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
                    {livrosListaLeitura.map((item) => (
                        <SwiperSlide key={item._id} className={style.swiperSlideListaLeitura}>
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

export default MinhaListadeLeitura;