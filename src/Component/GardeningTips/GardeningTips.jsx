import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

import pic1 from '../../assets/FireSh.png';
import pic2 from '../../assets/FireSho.png';
import pic3 from '../../assets/Fi.png';
import { Link } from 'react-router';

const GardeningTips = () => {
    return (
        <div>
            
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-4">
            <div className="w-full md:w-1/2">
                <Swiper
                    modules={[Autoplay]}
                    autoplay={{ delay: 2500, disableOnInteraction: false }}
                    loop={true}
                    spaceBetween={30}
                    slidesPerView={1}
                >
                    <SwiperSlide>
                        <img src={pic1} alt="Slide 1" className="rounded-xl w-full" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={pic2} alt="Slide 2" className="rounded-xl w-full" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={pic3} alt="Slide 3" className="rounded-xl w-full" />
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className="w-full md:w-1/2 text-center md:text-left">
                <h1 className="text-2xl md:text-4xl font-bold mb-4">
                    Gardening Community & Resource Hub
                </h1>
                <p className="text-gray-600">
                    Discover tips, tools, and a thriving community to help your garden grow. Whether you’re a beginner or seasoned gardener, our hub is your go-to resource.
                </p>
                 <div className='flex mt-1 -mb-2'>
                   <button className="mr-1 px-3  bg-blue-100 text-blue-700 font-semibold rounded-full text-sm hover:bg-blue-200 transition">html</button>
                   <button className=" px-6 py-2 bg-blue-100 text-blue-700 font-semibold rounded-full text-sm hover:bg-blue-200 transition">tailwind css</button>
                   <button className=" px-6 py-2 bg-blue-100 text-blue-700 font-semibold rounded-full text-sm hover:bg-blue-200 transition">react js</button>
                   <button className=" px-6 py-2 bg-blue-100 text-blue-700 font-semibold rounded-full text-sm hover:bg-blue-200 transition">node js</button>
                   <button className=" px-6 py-2 bg-blue-100 text-blue-700 font-semibold rounded-full text-sm hover:bg-blue-200 transition">mongodb</button>
                </div>
                <Link to='/detalils'> <button className='btn bg-black text-white mt-6'>Details</button></Link>

            </div>
        </div>
        </div>
    );
};

export default GardeningTips;
