import React from 'react';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';


// import required modules
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';

export default function App() {
    return (
        <>


            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={2}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 3,
                    depth: 100,
                    modifier: 8.5,
                    slideShadows: true,
                }}
                pagination={false}
                navigation={
                   { nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',}
                }
              
                
                modules={[EffectCoverflow, Pagination, Navigation]}
                className="mySwiper"
            >
                 <div className='swiper-button-prev' style={{color: 'white'}}></div>

                <SwiperSlide>
                    <div data-tooltip-id="my-tooltip" data-tooltip-content="This is a tooltip!">
                        <Tooltip
                            id="my-tooltip"
                            place="top"
                            offset={10}
                            style={{
                                backgroundColor: 'white',
                                color: '#000',
                                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                                padding: '8px',
                                borderRadius: '4px',
                            }}
                        />

                        <div className="card-inside-content bg-white text-center p-5 rounded-lg shadow-lg">
                            <Image
                                src="/images/auth.jpg"
                                alt="Abhishek Gupta"
                                width={120}
                                height={120}
                                className="rounded-full mx-auto"
                            />
                            <h2 className="text-xl font-bold mt-4 text-black">Abhishek Gupta</h2>
                            <span className="block text-sm text-gray-600 mt-2">
                                Marketing | 2+ years
                            </span>

                            <div className="flex justify-center mt-4 space-x-4 flex-col">
                                <p className="px-4 py-1 text-[#4c4747] bg-gray-200 rounded-md mb-2">loremipsum</p>
                                <p className="px-4 py-1 text-[#4c4747] bg-gray-200 rounded-md mb-2">loremipsum</p>
                                <div className='flex'>
                                    <p className="px-4 mr-2 text-[#4c4747] py-1 bg-gray-200 rounded-md mb-2">loremipsum</p>
                                    <p className="px-4 py-1 text-[#4c4747] bg-gray-200 rounded-md mb-2">loremipsum</p>

                                </div>
                            </div>
                        </div>

                    </div>

                    <div>
                   
                    </div>
                </SwiperSlide>


                {[...Array(2)].map((_, index) => (
                    <SwiperSlide key={index}>
                        <div data-tooltip-id="my-tooltip" data-tooltip-content="This is a tooltip!">
                            <Tooltip
                                id="my-tooltip"
                                place="top"
                                offset={10}
                                style={{
                                    backgroundColor: 'white',
                                    color: '#000',
                                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                                    padding: '8px',
                                    borderRadius: '4px',
                                }}
                            />
                            <div className="card-inside-content bg-white text-center p-5 rounded-lg shadow-lg">
                                <Image
                                    src="/images/auth.jpg"
                                    alt="Abhishek Gupta"
                                    width={120}
                                    height={120}
                                    className="rounded-full mx-auto"
                                />
                                <h2 className="text-xl font-bold mt-4 text-black">Abhishek Gupta</h2>
                                <span className="block text-sm text-gray-600 mt-2">
                                    Marketing | 2+ years
                                </span>

                                <div className="flex justify-center mt-4 space-x-4 flex-col">
                                    <p className="px-4 py-1 text-[#4c4747] bg-gray-200 rounded-md mb-2">loremipsum</p>
                                    <p className="px-4 py-1 text-[#4c4747] bg-gray-200 rounded-md mb-2">loremipsum</p>
                                    <div className='flex'>
                                        <p className="px-4 mr-2 text-[#4c4747] py-1 bg-gray-200 rounded-md mb-2">loremipsum</p>
                                        <p className="px-4 py-1 text-[#4c4747] bg-gray-200 rounded-md mb-2">loremipsum</p>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
                                <div className='swiper-button-next' style={{color: 'white'}}></div>

            </Swiper>



        </>
    );
}
