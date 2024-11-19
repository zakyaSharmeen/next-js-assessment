import React from 'react'
import { FaUser } from "react-icons/fa";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
<FaRegArrowAltCircleRight />



function Footer() {
    return (
        <>



            {/* <div className="main-footer-container">
                <div className="container">

                    <div className='flex-container-1'>
                        <div className="header">
                            <div className="logo padding-bottom">
                                <h1>hyperhire</h1>
                            </div>
                            <p className='padding-bottom'>We match the best talent beyond national borders.</p>
                            <div >
                                <p className='padding-bottom'><b>010-0000-0000</b></p>
                                <p className="padding-bottom"><b>aaaaa@naver.com</b></p>
                            </div>
                        </div>

                        <div className="content">

                            <div className="content-right">
                                <div className="card">

                                    <div className='card-inside-content'>
                                        <div className='icon'>
                                            <FaUser />
                                        </div>
                                        <h3 className='padding-bottom2'>Remote Hiring </h3>
                                        <a href="#">Go to Link <FaRegArrowAltCircleRight /></a>
                                    </div>
                                </div>
                                <div className="card">

                                    <div className='card-inside-content'>
                                        <div className='icon'>
                                            <FaUser />
                                        </div>
                                        <h3 className='padding-bottom2'>Remote Hiring </h3>
                                        <a href="#">Go to Link <FaRegArrowAltCircleRight /></a>
                                    </div>
                                </div>
                                <div className="card">

                                    <div className='card-inside-content'>
                                        <div className='icon'>
                                            <FaUser />
                                        </div>
                                        <h3 className='padding-bottom2'>Remote Hiring </h3>
                                        <a href="#">Go to Link <FaRegArrowAltCircleRight /></a>
                                    </div>
                                </div>
                                <div className="card">

                                    <div className='card-inside-content'>
                                        <div className='icon'>
                                            <FaUser />
                                        </div>
                                        <h3 className='padding-bottom2'>Remote Hiring </h3>
                                        <a href="#">Go to Link <FaRegArrowAltCircleRight /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="footer">
                        <div className="info">
                            <div className='info-sub-content'>
                                <p className='padding-bottom2'>lorem</p>
                                <p className='padding-bottom2'>loremipusnmmm</p>
                                <p><b>Hyperhire India Private
                                </b></p>
                            </div>
                            <div className='info-sub-content'>
                                <p className='padding-bottom2'>lorem</p>
                                <p className='padding-bottom2'>loremipusnmmm</p>
                                <p><b>Hyperhire India Private
                                </b></p>
                            </div>
                            <div className='info-sub-content'>
                                <p className='padding-bottom2'>lorem</p>
                                <p className='padding-bottom2'>loremipusnmmm</p>
                                <p><b>Hyperhire India Private
                                </b></p>
                            </div>
                            <div className='info-sub-content'>
                                <p className='padding-bottom2'>lorem</p>
                                <p className='padding-bottom2'>loremipusnmmm</p>
                                <p><b>Hyperhire India Private
                                </b></p>
                            </div>
                        </div>
                        <p><b>&copy; 2023 Hyperhire</b></p>
                    </div>
                </div>

            </div> */}

<div className="main-footer-container bg-[#fbfbfb] py-[100px] text-[#686c77] ">
  <div className="mx-auto max-w-[1200px] px-4 border-2 border-green-800">
    <div className="flex-container-1 flex pb-8 border-2 border-yellow-800 sm: flex-col">
  
      <div className="header flex-[0_0_30%] max-w-[30%]">
        <div className="logo pb-4">
          <h1 className="text-lg font-bold">hyperhire</h1>
        </div>
        <p className="pb-4 text-sm">We match the best talent beyond national borders.</p>
        <div>
          <p className="pb-4 text-sm font-bold">010-0000-0000</p>
          <p className="pb-4 text-sm font-bold">aaaaa@naver.com</p>
        </div>
      </div>

     
      <div className="content flex-[0_0_70%] max-w-[70%]">
        <div className="content-right flex ml-[100px] sm:flex-wrap">
        
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="card flex-[0_0_25%] max-w-[25%] p-2.5 sm: w-[200px]">
              <div className="card-inside-content bg-white rounded-lg p-4">
                <div className="icon flex bg-[#fbfbfb] p-4 w-[30%] mb-4 justify-center items-center">
                  <FaUser />
                </div>
                <h3 className="pb-2 text-base font-medium">Remote Hiring</h3>
                <a href="#" className="text-black text-sm flex items-center gap-2.5 no-underline">
                  Go to Link <FaRegArrowAltCircleRight />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    
    <div className="footer">
      <div className="info flex pb-12 w-[80%]">
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} className="info-sub-content flex-[0_0_25%] max-w-[25%]">
            <p className="pb-2 text-sm">lorem</p>
            <p className="pb-2 text-sm">loremipusnmmm</p>
            <p className="text-sm font-bold">Hyperhire India Private</p>
          </div>
        ))}
      </div>
    </div>
    <p className="text-sm font-bold">&copy; 2023 Hyperhire</p>

  </div>
</div>

        </>
    )
}

export default Footer