import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

import pic1 from '../assets/web1.png';
import pic2 from '../assets/Firwe.png';
import pic3 from '../assets/web2.png';
import { Link } from 'react-router'; // 

const Peoject2 = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-4 mt-8">
            <div className="w-full md:w-1/2">
                <Swiper
                    modules={[Autoplay]}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    loop={true}
                    spaceBetween={20}
                    slidesPerView={1}
                >
                    <SwiperSlide>
                        <img src={pic1} alt="Web 1" className="rounded-xl w-full" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={pic2} alt="Firwe" className="rounded-xl w-full" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={pic3} alt="Web 2" className="rounded-xl w-full" />
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className="w-full md:w-1/2 text-center md:text-left">
                <h1 className="text-2xl md:text-4xl font-bold mb-4">
                    Marigold Bill Management Website
                </h1>
                <p className="text-gray-600">
                    This website is built to streamline the bill payment process. Users can view and pay their utility bills (electricity, gas, water, internet, etc.) directly from their account balance. It’s designed to be simple, responsive, and efficient for end-users.
                </p>
                 <div className='flex mt-1 -mb-2'>
                   <button className="mr-1 px-4 py-2 bg-blue-100 text-blue-700 font-semibold rounded-full text-sm hover:bg-blue-200 transition">html</button>
                   <button className=" px-6 py-2 bg-blue-100 text-blue-700 font-semibold rounded-full text-sm hover:bg-blue-200 transition">tailwind css</button>
                   <button className=" px-6 py-2 bg-blue-100 text-blue-700 font-semibold rounded-full text-sm hover:bg-blue-200 transition">react js</button>
                   <button className=" px-6 py-2 bg-blue-100 text-blue-700 font-semibold rounded-full text-sm hover:bg-blue-200 transition">node js</button>
                   <button className=" px-6 py-2 bg-blue-100 text-blue-700 font-semibold rounded-full text-sm hover:bg-blue-200 transition">mongodb</button>
                </div>
                <Link to="/details2">
                    <button className="btn bg-black text-white mt-6"> Details</button>
                </Link>
            </div>
        </div>
    );
};

export default Peoject2;
