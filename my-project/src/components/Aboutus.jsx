import React from 'react'
import aboutus from '../assets/Group1.png';
import { BsArrowUpRightCircle } from "react-icons/bs";

const Aboutus = () => {
  return (
    <div className="w-full items-center justify-center flex flex-col overflow-hidden ">

        {/* id="box18" */}
        <div id="about3">
            <h2 className="font-bold text-black mt-8 text-[2.5rem]">About Us</h2>
        </div>

        {/* id="box52" */}
        <div className="justify-between p-5 flex w-11/12 mt-15 " id="resp2">
            
            {/* left side */}
            {/* id="box9" */}
            <div className=" p-4 w-[55%] " id="about7">
                <img src={aboutus} alt="About us" className=""/>
            </div>

            {/* right side */}
            {/* id="box53" */}
            <div className="bg-[#FFFFFF] w-[40%] mr-4 justify-between items-center gap-2" id="cont1">

                <div className="rounded-3xl border border-gray-300 w-[7rem] h-7 " id="who2">
                    <div className="items-center justify-center ml-2 " id="who1">
                        <p className="items-center font-semibold ">Who We Are</p>
                    </div>
                </div>

                <div id="about1" className="w-[80%]">
                    <h3 className="text-[3rem] font-bold">We Are on a Mission to Build Websites That Empower Businesses</h3>
                </div>

                {/* id="box8" */}
                <div id="about4">
                    <p className="font-normal text-[1rem]">Our goal is to help businesses grow faster than ever by delivering innovative, 
                    user-friendly, and high-performance websites tailored to their needs. </p>            
                </div>

                <div className="flex  mt-5 gap-2">
                    <div className="mt-2 " id="about6">
                        <BsArrowUpRightCircle  className="w-5 h-5" id="about5"/>
                    </div>
                    <div id="about2">
                        <h3><span className="text-[26px]">Innovative Design</span></h3>
                        <p className="text-[16px] text-[#334155]">We bring creativity to every project, ensuring your website captures attention and engages users.</p>
                    </div>
                </div>

                <div className="flex  mt-5 gap-2">
                    <div className="mt-2" id="about6">
                        <BsArrowUpRightCircle  className="w-5 h-5" id="about5"/>
                    </div>
                    <div id="about2">
                        <h3><span className="text-[26px]">Perfromance-focused</span></h3>
                        <p className="text-[16px] text-[#334155]">Scalable web applications designed for growth and performance.</p>
                    </div>

                </div>

                <div className="flex  mt-5 gap-2">
                    <div className="mt-2 " id="about6">
                        <BsArrowUpRightCircle  className="w-5 h-5" id="about5"/>
                    </div>
                    <div id="about2">
                        <h3><span className="text-[26px]">Seamless User Experience</span></h3>
                        <p className="text-[16px] text-[#334155]">From intuitive navigation to mobile responsiveness, we prioritize delivering websites that work flawlessly on every device.</p>
                    </div>

                </div>
    
            </div>

        </div>
      
    </div>
  )
}

export default Aboutus;
