import React from 'react';
import img1 from '../../assets/images/image1.jpg'
import img2 from '../../assets/images/image2.jpg'
import img3 from '../../assets/images/image3.webp'
import img4 from '../../assets/images/image4.avif'
import img5 from '../../assets/images/image5.jpeg'
import img6 from '../../assets/images/image6.jpg'

const Destination = () => {
  return (
    <div className='w-10/12 mx-auto my-20 pb-[600px] md:pb-5'>
      <div className='text-center'>
        <h2 className='py-5 text-3xl md:text-6xl font-bold'>Explore Top Destination</h2>
        <p className='text-gray-500 w-8/12 mx-auto'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old</p>
      </div>
      <div className='md:flex items-center m-8 h-[320px] gap-2'>
        <div className='flex-1/2 relative'>
          <img className='h-[320px] py-4 md:py-0 rounded-xl' src={img1} alt="" />
          <h2 className='absolute left-2 md:left-20 bottom-5 text-2xl md:text-3xl font-bold py-2 px-5 text-white'>United States of America</h2>
        </div>
        <div className='flex-1/2 md:flex items-center gap-2'>
          <div className='relative'>
            <img className='w-[260px] py-4 md:py-0 rounded-xl h-[320px] mx-auto' src={img2} alt="" />
            <h2 className='absolute left-20 bottom-5 text-3xl font-bold py-2 px-5 text-white'>Paris</h2>
          </div>
          <div className='relative'>
            <img className='w-[260px] rounded-xl py-4 md:py-0 relative h-[320px] mx-auto' src={img3} alt="" />
            <h2 className='absolute left-20 bottom-5 text-3xl font-bold py-2 px-5 text-white'>Paris</h2>
          </div>
        </div>
      </div>
      <div className='md:flex items-center m-8 h-[320px] gap-2'>
        <div className='flex-1/2 md:flex items-center gap-2'>
          <div className='relative'>
            <img className='w-[260px] py-4 md:py-0 rounded-xl h-[320px] mx-auto' src={img4} alt="" />
            <h2 className='absolute left-20 bottom-5 text-3xl font-bold py-2 px-5 text-white'>India</h2>
          </div>
          <div className='relative'>
            <img className='w-[260px] py-4 md:py-0 rounded-xl h-[320px] mx-auto' src={img5} alt="" />
            <h2 className='absolute left-2 bottom-5 text-3xl font-bold py-2 px-5 text-white'>Grand Canyon</h2>
          </div>
        </div>
        <div className='flex-1/2 relative'>
          <img className='h-[320px] py-4 md:py-0 rounded-xl' src={img6} alt="" />
          <h2 className='absolute left-10 md:left-44 bottom-5 text-3xl font-bold py-2 px-5 text-white'>England</h2>
        </div>
      </div>
    </div>
  );
};

export default Destination;