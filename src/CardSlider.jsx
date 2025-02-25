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
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat recusandae accusamus veniam beatae voluptatum cumque eos est modi, ipsum error atque nisi sequi nam dolores autem fuga ipsa quaerat rem.</p> 
            </div>
            <div className="marcas">
                <span style={{ "--i": 1 }}>Cambuquira</span>
                <span style={{ "--i": 2 }}>Crioulo</span>
                <span style={{ "--i": 3 }}>Diminas</span>
                <span style={{ "--i": 4 }}>E mais...</span>
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
                <p>Lorgdfdfgdfgfdg Fugiat recusandae accusamus veniam beatae voluptatum cumque eos est modi, ipsum error atque nisi sequi nam dolores autem fuga ipsa quaerat rem.</p> 
            </div>
            <div className="marcas">
                <span style={{ "--i": 1 }}>Crioulo</span>
                <span style={{ "--i": 2 }}>Tirol</span>
                <span style={{ "--i": 3 }}>Polenghi</span>
                <span style={{ "--i": 4 }}>E mais...</span>
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
                <p>Lorgdfdfgdfgfdg Fugiat recusandae accusamus veniam beatae voluptatum cumque eos est modi, ipsum error atque nisi sequi nam dolores autem fuga ipsa quaerat rem.</p> 
            </div>
            <div className="marcas">
                <span style={{ "--i": 1 }}>Gomes da Costa</span>
                <span style={{ "--i": 2 }}>88</span>
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
                <p>Lorgdfdfgdfgfdg Fugiat recusandae accusamus veniam beatae voluptatum cumque eos est modi, ipsum error atque nisi sequi nam dolores autem fuga ipsa quaerat rem.</p> 
            </div>
            <div className="marcas">
                <span style={{ "--i": 1 }}>Seara</span>
                <span style={{ "--i": 2 }}>Massa Leve</span>
                <span style={{ "--i": 3 }}>Perdigão</span>
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