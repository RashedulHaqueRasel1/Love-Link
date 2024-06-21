import { Swiper, SwiperSlide } from 'swiper/react';

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
          <BannerImg img={img1} title={'Find Your Perfect Match Today'} text={'Start your journey to find the love of your life. Join our community and meet like-minded individuals who are ready to commit to a lifelong partnership.'}></BannerImg>
        </SwiperSlide>
        <SwiperSlide>
          <BannerImg img={img2} title={'Connecting Hearts, Building Futures'} text={'At Love Link Matrimony, we believe in creating meaningful connections that last a lifetime. Our platform brings together hearts and minds to build beautiful futures together.'}></BannerImg>
        </SwiperSlide>
        <SwiperSlide>
          <BannerImg img={img3} title={'Matchmaking Made Easy'} text={'Finding your soulmate has never been easier. With Love Link Matrimony, enjoy a seamless and efficient matchmaking experience tailored to your preferences.'}></BannerImg>
        </SwiperSlide>
        <SwiperSlide>
          <BannerImg img={img4} title={'Bringing Soulmates Together'} text={'We specialize in bringing soulmates together. Join our community and let us help you find the person who complements you perfectly.'}></BannerImg>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;