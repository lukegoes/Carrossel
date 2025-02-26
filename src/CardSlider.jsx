import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './style.css'

const CardSlider = () => {
    return (
<main> 
    <div className="container">
    <Swiper
      modules={[Pagination]}
      initialSlide={0}
      centeredSlides={true}
      slidesPerView="auto"
      speed={800}
      slideToClickedSlide={true}
      pagination={{ el: ".swiper-pagination", clickable: true }}
      breakpoints={{
        320: { spaceBetween: 40, },
        430: { spaceBetween: 50, },
        580: { spaceBetween: 70,},
        650: { spaceBetween: 30,},
      }} >
      
      
      <SwiperSlide className='swiper-slide slide-1' key="slide-1">
        <div className='title'>
            <h1>Queijos</h1>
        </div>
        <div className="content">
            
            <div className="text">
                <h2>Queijos</h2>
                <p>Descubra nossa seleção de queijos,
                    com opções que atendem todos os gostos.
                    Ideal para petiscos, pratos sofisticados ou aquele lanche especial!</p>
            </div>
        </div>

      </SwiperSlide>
      <SwiperSlide className='swiper-slide slide-2' key="slide-2">
        <div className='title'>
            <h1>Latícinios</h1>
        </div>
        <div className="content">
            
            <div className="text">
                <h2>Latícinios</h2>
                <p>Nossos laticínios são produzidos com os melhores ingredientes,
                    garantindo frescor e sabor. Oferecemos opções ideais para sua casa ou comércio.
                    Qualidade e confiança em cada produto!</p>
            </div>
        </div>

      </SwiperSlide>
      <SwiperSlide className='swiper-slide slide-3' key="slide-3">
        <div className='title'>
            <h1>Enlatados</h1>
        </div>
        <div className="content">
            
            <div className="text">
                <h2>Enlatados</h2>
                <p>Praticidade e sabor em cada refeição. 
                    Diversas opções para tornar seu dia a dia mais fácil sem
                    perder o sabor e a qualidade.</p>
            </div>
        </div>

      </SwiperSlide>
      <SwiperSlide className='swiper-slide slide-4' key="slide-4">
        <div className='title'>
            <h1>Congelados</h1>
        </div>
        <div className="content">
            
            <div className="text">
                <h2>Congelados</h2>
                <p>Os congelados oferecem soluções rápidas para sua refeição. 
                    Todos os produtos são cuidadosamente selecionados para garantir
                    sabor e qualidade com praticidade.</p>
            </div>
        </div>

      </SwiperSlide>

      <div className='swiper-pagination'></div>
    </Swiper>
    </div>
</main>
    )
    

};

export default CardSlider;