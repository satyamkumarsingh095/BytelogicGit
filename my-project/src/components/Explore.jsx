import React from 'react'
import i2 from '../assets/i2.png';
import i7 from '../assets/i7.png';
import i1 from '../assets/i1.png';
import i3 from '../assets/i3.png';
import i4 from '../assets/i4.png';
import i5 from '../assets/i5.png';
import i6 from '../assets/i6.png';
const Explore = () => {
  return (
    <div className="w-full items-center justify-between flex flex-col mx-auto overflow-hidden gap-5 mb-[5rem]">
      
      <div className="w-[90%] items-start justify-between flex flex-col gap-4">
        <div className="w-[56%] flex gap-2 " id="explore1">
            <h2 className="text-[40px] leading-[44px] font-medium text-[#334155]">Explore </h2>
            <img src={i7} alt="im2" className="w-[3rem] h-[3rem] "/>
            <h2 className="text-[40px] leading-[44px] font-medium text-[#334155]">Our Expert Design Services</h2>
        </div>
        <div id="p1">
            <p className="font-normal text-[16px] text-[#334155]">Tailored Solutions for Every Digital Project.</p>
        </div>
      </div>

      {/* categories */}
      <div className="w-[90%] justify-between flex flex-col gap-3 " id="resp4">

        <div className="" id="cate1">
            <p className="text-[26px] text-[#334155] font-bold">Categories</p>
        </div>

        <div className="items-center justify-center flex flex-col mx-auto gap-5 ">
            
            {/* first content */}
            <div className=" flex gap-3 items-center justify-center" id="resp3">

                {/* 1 box */}
                <div className="w-[33%] items-start gap-3 flex flex-col rounded-3xl p-6 space-y-2 bg-my-gradient cursor-pointer" id="resp5">

                    <div className="" id="explore4">
                        <img src={i2} alt="word" />
                    </div>

                    <div className="space-y-4 " id="explore5">
                        <h3 className="text-[30px] font-medium text-[#1E293B]">WordPress</h3>

                        <p className="text-[16px] text-[#334155]">WordPress is a popular platform for building websites and blogs. 
                        It offers customizable themes and plugins, making it easy to manage content and design without coding.</p>
                    </div>

                    <div className="flex flex-col " id="explore3">
                         <h1 className="text-[26px] font-sans text-[#1E293B]">1,675</h1>
                         <p className="text-[16px] text-[#334155]">Wordpress Projects Completed</p>
                    </div>

                </div>

                {/* 2 box */}
                <div className="w-[33%] items-start justify-start gap-3 flex flex-col rounded-3xl p-6 space-y-4 bg-my-gradient1 cursor-pointer " id="resp5">

                    <div id="explore4">
                        <img src={i1} alt="word"/>
                    </div>

                    <div className="space-y-5" id="explore5">
                        <h3 className="text-[30px] font-medium text-[#1E293B]">Shopify</h3>

                        <p className="text-[16px] text-[#334155]">Shopify is a platform that helps businesses easily create and manage online stores. 
                        It offers customizable templates and built-in tools for smooth e-commerce operations.</p>
                    </div>

                    <div className="flex flex-col" id="explore3">
                         <h1 className="text-[26px] font-sans text-[#1E293B]">1,234</h1>
                         <p className="text-[16px] text-[#334155]">Shopify store setups</p>
                    </div>

                </div>
                

                {/* 3 box */}
                <div className="w-[33%] items-start justify-start gap-3 flex flex-col rounded-3xl p-6 space-y-4 bg-my-gradient2 bg-transparent" id="resp5">

                    <div id="explore4">
                        <img src={i3} alt="word"/>
                    </div>

                    <div className="space-y-5" id="explore5">
                        <h3 className="text-[30px] font-medium text-[#1E293B]">React Js</h3>

                        <p className="text-[16px] text-[#334155]">Reactjs is a popular platform for building websites and blogs. It offers customizable themes 
                        and plugins, making it easy to manage content and design with coding.</p>

                    </div>

                    <div className="flex flex-col" id="explore3">
                         <h1 className="text-[26px] font-sans text-[#1E293B]">987</h1>
                         <p className="text-[16px] text-[#334155]">ReactJS Projects Completed</p>
                    </div>

                </div>

            </div>

            {/* second content */}
            <div className=" flex gap-3 items-center justify-center" id="resp3">

                {/* 1 box */}
                <div className="w-[33%] items-start justify-start gap-3 flex flex-col rounded-3xl p-6 space-y-7 bg-my-gradient3 bg-transparent" id="resp5">
                    
                    <div id="explore4">
                        <img src={i4} alt="word"/>
                    </div>

                    <div className="space-y-5" id="explore5">
                        <h3 className="text-[30px] font-medium text-[#1E293B]">E COMMERCE</h3>

                        <p>E-commerce web development focuses on building online stores with secure 
                        payments and user-friendly designs for seamless shopping experiences.</p>

                    </div>

                    <div className="flex flex-col" id="explore3">
                         <h1 className="text-[26px] font-sans text-[#1E293B]">1,232</h1>
                         <p className="text-[16px] text-[#334155]">E-Commerce Websites Developed</p>
                    </div>

                </div>

                
                {/* 2 box */}
                <div className="w-[33%] items-start justify-start gap-3 flex flex-col rounded-3xl p-6 space-y-2 bg-my-gradient4 bg-transparent" id="resp5">
                    
                    <div id="explore4">
                        <img src={i5} alt="word"/>
                    </div>

                    <div className="space-y-4" id="explore5">
                        <h3 className="text-[30px] font-medium text-[#1E293B]">Custom Website</h3>

                        <p>Your business deserves a website that is as unique as your brand. Our custom website 
                        development services focus on delivering tailored, high-quality solutions designed to meet your 
                        specific goals and requirements.</p>

                    </div>

                    <div className="flex flex-col" id="explore3">
                         <h1 className="text-[26px] font-sans text-[#1E293B]">875</h1>
                         <p className="text-[16px] text-[#334155]">Custom Website Built</p>
                    </div>

                </div>

                {/* 3 box */}
                <div className="w-[33%] items-start justify-start gap-3 flex flex-col rounded-3xl p-6 space-y-4 bg-my-gradient5 bg-transparent" id="resp5">

                    <div id="explore4">
                        <img src={i6} alt="word"/>
                    </div>

                    <div className=" space-y-5" id="explore5">
                        <h3 className="text-[30px] font-medium text-[#1E293B]">UI/UX Design</h3>

                        <p>User experience (UX) and user interface (UI) design are at the heart of every successful 
                        digital product. We specialize in creating intuitive, engaging, 
                        and user-friendly designs that not only look great.</p>
                    </div>

                    <div className="flex flex-col" id="explore3">
                         <h1 className="text-[26px] font-sans text-[#1E293B]">1,112</h1>
                         <p className="text-[16px] text-[#334155]">UI/UX experiences</p>
                    </div>

                </div>

            </div>

        </div>

      </div>
    </div>
  )
}

export default Explore
