import { Swiper, SwiperSlide } from 'swiper/react'
import './banner.css'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
export function Banner(){
    const banners =[
         "https://images.unsplash.com/photo-1585386959984-a4155224a1ad",
         "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
         "https://images.unsplash.com/photo-1503602642458-232111445657",
    ]
    return(
       <Swiper
      modules={[Autoplay, Pagination]}
      autoplay={{ delay: 3000 }}
      pagination={{ clickable: true }}
      loop={true}
      spaceBetween={20}
      slidesPerView={1}
      className="banner-swiper"
    >
      {banners.map((img, index) => (
        <SwiperSlide key={index}>
          <img src={img} alt="Banner" className="banner-img" />
        </SwiperSlide>
      ))}
    </Swiper>
    );
}