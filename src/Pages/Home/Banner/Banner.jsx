// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import img1 from "../../../assets/img1.jpg"
import img2 from "../../../assets/img2.jpg"
import img3 from "../../../assets/img3.jpg"
import img4 from "../../../assets/img4.jpg"


import './styles.css';

import { EffectFade, Navigation, Pagination } from 'swiper/modules';
import BannerImg from './BannerImg';


const Banner = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={'fade'}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <BannerImg img={img1} title={'lorem1'} text={'hhhhhhhhhhhhhhhhhhhh1'}></BannerImg>
        </SwiperSlide>
        <SwiperSlide>
          <BannerImg img={img2} title={'lorem2'} text={'hhhhhhhhhhhhhhhhhhhh2'}></BannerImg>
        </SwiperSlide>
        <SwiperSlide>
          <BannerImg img={img3} title={'lorem3'} text={'hhhhhhhhhhhhhhhhhhhh3'}></BannerImg>
        </SwiperSlide>
        <SwiperSlide>
          <BannerImg img={img4} title={'lorem4'} text={'hhhhhhhhhhhhhhhhhhhh4'}></BannerImg>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;