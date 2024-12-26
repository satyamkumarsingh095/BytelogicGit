import React from 'react'
import hand from '../assets/Rectangle.png';
import { RiArrowRightDownLine } from "react-icons/ri";
import group from '../assets/Group-35-1.png';
import group1 from '../assets/Group-34-1-1.png';

const Chooseus = () => {
  return (
    <div className="w-full bg-[#0F0F0F] justify-center items-center flex flex-col">

        <div className="w-11/12 flex flex-col mb-10 mt-7">

          {/* id="box31" */}
          <div className="mx-auto justify-center mt-10 " id="choose2">
            <h2 className="font-normal text-[2.5rem] sm:text-[3rem] text-[#FFFFFF] text-center">Why Choose us</h2>
          </div>
          
          {/* mx-auto justify-evenly flex mt-20 gap-10 ml-[10%] mr-[10%] mb-10 items-center */}
          {/* id="box57" */}
          <div className="mx-auto flex flex-col md:flex-row mt-[70px] gap-10 mb-10 items-center justify-evenly">

            {/* id="box35" */}
            <div className="w-[60%] items-start justify-start flex flex-col gap-10" id="cho1">
            
            <div className="w-[90%] p-5 mt-1 " id="cho2">
                <div className="gap-[3rem]" id="choose3">
                    <img src={group} alt="group"/>
                    <h3 className="text-white font-poppins text-[23px] font-medium">One - Step Solution</h3>
                    <div className="h-6"></div>
                    <p className="text-white text-[1rem] font-normal leading-6 ">We provide a seamless, all-in-one solution for your web development needs, ensuring that your website is built, optimized, and launched with minimal hassle. From concept to completion, we handle every step of the process.
                    </p>
                </div>

                <div className="h-[2rem]">
                </div>

                {/* id="box33" */}
                <div className="justify-between flex  w-[100%] " id="choose3">
                    <h3 className="font-poppins items-start text-white text-[23px] font-medium">Costom Your Own Unique Design</h3>
                    <RiArrowRightDownLine className="text-white text-[1rem] items-center"/>
                </div>

                <div className="h-[2rem]">
                </div>

                {/* id="box33" */}
                <div className="justify-between flex w-[100%]" id="choose3">
                    <h3 className="font-poppins items-start text-white text-[23px] font-medium">Quick Turnaround Time</h3>
                    <RiArrowRightDownLine className="text-white"/>
                </div>

                <div className="h-[2rem]">
                </div>

                {/* id="box33" */}
                <div className="justify-between flex w-[100%]" id="choose3">
                    <h3 className="font-poppins items-start text-white text-[23px] font-medium">Ethically Quality Control</h3>
                    <RiArrowRightDownLine className="text-white"/>
                </div>

                <div className="h-[2rem]">
                </div>

                {/* id="box33" */}
                <div className="justify-between flex w-[100%] " id="choose3">
                    <h3 className="font-poppins items-start text-white text-[23px] font-medium">Lower Your Inventory Risk</h3>
                    <RiArrowRightDownLine className="text-white"/>
                </div>

                <div className="h-[2rem]" id="choose4">
                </div>

            </div>

            </div>

            {/* id="img1" */}
            <div className="w-[35%] " id="choose5">
              <div id="choose1">
                  <img src={group1} alt="img" className="absolute z-[1] translate-x-[18rem]"/>
              </div>
              <img src={hand} alt="hand" className="relative"/>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Chooseus
