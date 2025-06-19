import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className=' md:pt-8'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage:
                "url(https://i.ibb.co/HTVn9dRg/Getty-Images-1468908187-79e55dbe8078404b83d076e0fa5fcccf.jpg)",
            }}
          >
            <div className="hero-overlay"></div>
            <div className="hero-content text-neutral-content text-center">
              <div className="w-10/12 text-center mx-auto">
                <p className='uppercase py-2 leading-14'>come to experience in turio</p>
                <h1 className="mb-5 text-3xl md:text-6xl uppercase font-bold">grand canyon</h1>
                <h1 className="mb-5 text-2xl md:text-4xl uppercase font-bold">go explore</h1>
                <p className="mb-2 md:mb-5">
                  Nature is the heart of our planet, offering beauty, balance, and life. Trees give us oxygen and shade, while rivers and oceans keep the Earth cool and flowing. Birds sing in the morning, and flowers bloom in bright colors, making our surroundings peaceful and joyful. Mountains stand tall and proud, teaching us strength and patience. Every part of nature, from tiny insects to giant forests, has a role in the Earth’s harmony.
                </p>
                <Link to="/explore"> <button className="btn btn-accent text-xl font-bold my-5 text-black">Explore Now</button></Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage:
                "url(https://i.ibb.co/3YcMnH1S/moraine-lake-girl-on-rock.webp)",
            }}
          >
            <div className="hero-overlay"></div>
            <div className="hero-content text-neutral-content text-center">
              <div className="w-10/12 text-center mx-auto">
                <p className='uppercase py-2 leading-14'>come to experience in turio</p>
                <h1 className="mb-5 text-3xl md:text-6xl uppercase font-bold">Landmark tour</h1>
                <h1 className="mb-5 text-2xl md:text-4xl uppercase font-bold">Let's enjoy</h1>
                <p className="mb-2 md:mb-5">
                  Nature is the heart of our planet, offering beauty, balance, and life. Trees give us oxygen and shade, while rivers and oceans keep the Earth cool and flowing. Birds sing in the morning, and flowers bloom in bright colors, making our surroundings peaceful and joyful. Mountains stand tall and proud, teaching us strength and patience. Every part of nature, from tiny insects to giant forests, has a role in the Earth’s harmony.
                </p>
                <Link to="/explore"> <button className="btn btn-accent text-xl font-bold my-5 text-black">Explore Now</button></Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide><div
          className="hero min-h-screen"
          style={{
            backgroundImage:
              "url(https://i.ibb.co/67CmJKvt/lac-louise-2.jpg)",
          }}
        >
          <div className="hero-overlay"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="w-10/12 text-center mx-auto">
              <p className='uppercase py-2 leading-14'>come to experience in turio</p>
              <h1 className="mb-5 text-3xl md:text-6xl uppercase font-bold">Keep travel on</h1>
              <h1 className="mb-5 text-2xl md:text-4xl uppercase font-bold">calm & travel</h1>
              <p className="mb-2 md:mb-5">
                Nature is the heart of our planet, offering beauty, balance, and life. Trees give us oxygen and shade, while rivers and oceans keep the Earth cool and flowing. Birds sing in the morning, and flowers bloom in bright colors, making our surroundings peaceful and joyful. Mountains stand tall and proud, teaching us strength and patience. Every part of nature, from tiny insects to giant forests, has a role in the Earth’s harmony.
              </p>
              <Link to="/explore"> <button className="btn btn-accent text-xl font-bold my-5 text-black">Explore Now</button></Link>
            </div>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage:
                "url(https://i.ibb.co/tMKH2xGx/2011-12-26-Echo-Mtn-Piste.jpg)",
            }}
          >
            <div className="hero-overlay"></div>
            <div className="hero-content text-neutral-content text-center">
              <div className="w-10/12 text-center mx-auto">
                <p className='uppercase py-2 leading-14'>come to experience in turio</p>
                <h1 className="mb-5 text-3xl md:text-6xl uppercase font-bold">grand canyon</h1>
                <h1 className="mb-5 text-2xl md:text-4xl uppercase font-bold">go explore</h1>
                <p className="mb-5">
                  Nature is the heart of our planet, offering beauty, balance, and life. Trees give us oxygen and shade, while rivers and oceans keep the Earth cool and flowing. Birds sing in the morning, and flowers bloom in bright colors, making our surroundings peaceful and joyful. Mountains stand tall and proud, teaching us strength and patience. Every part of nature, from tiny insects to giant forests, has a role in the Earth’s harmony.
                </p>
                <Link to="/explore"> <button className="btn btn-accent text-xl font-bold my-5 text-black">Explore Now</button></Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Header;