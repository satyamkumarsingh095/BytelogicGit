import React from 'react'
import card1 from '../assets/card1.jpg';
import card2 from '../assets/card2.jpg';
import card3 from '../assets/card3.jpg';
import card4 from '../assets/card4.jpg';
import card5 from '../assets/card5.jpg';
import MultipleItems from '../InbuiltComponents/MultipleItems';
const Work = () => {
  return (
    <div className="w-[100%] flex flex-col justify-evenly mt-4 mb-4 rounded-3xl  gap-[3rem] items-center bg-black text-white" id="wor1">
      
      <div className="flex justify-between w-[90%] items-center mt-[3rem]" id="wor2">
           
          <div className=" " id="wor4">
              <h2 className="font-bold text-[40px] font-sans leading-[1.3em]">Our Works</h2>
          </div>

          <div className=" w-[30%]" id="wor3">
            <p className="text=[16px]">Explore our recent portfolio showcasing the successful works for our clients.</p>
          </div>

      </div>

      <div className="flex items-center justify-between w-[90%] gap-2 " id="wor5">

        <div className=" border-gray-500 rounded-3xl w-[33%] border-2 " id="wor6">
          <img src={card1} alt="card1" className="rounded-3xl"/>
        </div>

        <div className="border-2 border-gray-500 w-[33%] rounded-3xl" id="wor6">
          <img src={card2} alt="card2" className="rounded-3xl"/>
        </div>

        <div className="border-2 border-gray-500 w-[33%] rounded-3xl" id="wor6">
          <img src={card3} alt="card3" className="rounded-3xl"/>
        </div>

        {/* <div className="border border-gray-300 w-[30%]">
          <img src={card4} alt="card4"/>
        </div>
        <div className="border border-gray-300 w-[30%]">
          <img src={card5} alt="card5"/>
        </div> */}
      </div>

      {/* <div className="border border-red-500 w-[50%] bg-transparent">
        <MultipleItems/>
      </div> */}

      <div className="items-center justify-center mb-6 mt-[-4rem]">
           <p className="text-[2.5rem] font-bold">. . . . .</p>
      </div>

    </div>
  )
}

export default Work

