import React from 'react'
// import img from '../assets/Mask.png';
// import grp from '../assets/Group 29.png';
import uncle from '../assets/uncle.jpg';
import VideoPlayer from '../InbuiltComponents/VideoPlayer';
const Testimonial = () => {
  return (

    // id="box4"
    <div className="w-[100%] flex flex-col items-center justify-center mt-20 gap-10 ml-[5rem] border border-red-500" id="test1">
      
      {/* id="box5" */}
      <div className="w-[100%] flex flex-col items-center justify-center gap-8 border border-gray-400" id="test7" >

        <div id="vid4">
            <h3 className="text-orange-500 ">Testimonial</h3>
        </div>

        {/* id="box42" */}
        <div className="border border-yellow-300" id="test2">
            <h2 className="font-bold text-[3rem] leading-10 text-[#FD853A] font-outfit">What They Say ?</h2>
        </div>

        {/* id="box43" */}
        <div className="w-[90%] items-center justify-center border border-blue-500" id="test3">
            <p ClassName="font-normal text-12px leading-[2rem] font-sans text-center text-gray-700">ByteLogic has been trusted by clients around the globe, earning more than 100k positive ratings.</p>
            <p className="font-normal text-12px leading-[2rem] font-sans text-center text-gray-700">Our clients consistently praise our dedication, innovation, and commitment to delivering top-quality web development solutions.</p>
            <p className="font-normal text-12px leading-[2rem] font-sans text-center text-gray-700">Developers and businesses alike have found great value in our services, transforming their digital presence with custom websites, user-centric designs, and high-performance solutions.</p><br/>
        </div>
      </div>

      {/* id="box39" */}
      {/* <div className="w-[40%] flex mb-5 shadow-2xl rounded-3xl mr-5 " id="test4">

        <div className="ml-[-12px] mb-5 shadow-2xl rounded-3xl " id="test5">
          <img src={uncle} alt="test" className="w-[25rem] h-[20rem] rounded-3xl "/>
        </div>
        <div className="flex flex-col ml-5 w-[40%] items-center " id="test6">
            <h2 className="font-semibold text-[1rem] items-center justify-center">Robert<br/> Pulford</h2>
            <div className="h-5"></div>
            <p className="text[12px] items-center justify-center ">Absolutely stunning website! cant't Believe how good it is.Robert</p>
        </div>
        
      </div> */}

      <div className="">
        <VideoPlayer/>
      </div>
    </div>
  )
}

export default Testimonial
