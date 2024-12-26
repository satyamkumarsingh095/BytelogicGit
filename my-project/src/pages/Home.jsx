import React  from 'react';
// import Navbar from '../components/Navbar';
import Aboutus from '../components/Aboutus';
import Explore from '../components/Explore';
import Work from '../components/Work';
import Chooseus from '../components/Chooseus';
// import Card from '../components/Card';
// import CardContainer from '../components/CardContainer';
import Contactus from '../components/Contactus';
import Testimonial from '../components/Testimonial';
import Info from '../components/Info';
import logo from '../assets/bytelogo.png';
import hero from '../assets/hero-1-png.png';
import vector from '../assets/Vector.png';
import star from '../assets/star1.png';
import StatsSection from '../InbuiltComponents/StatsSection';

const Home = () => {

    // const handleCardClick = () => {
    //     setCurrentCard((prev) => (prev === 3 ? 1 : prev + 1)); // Cycle through cards
    //   };

  return (
    <div className=" w-full max-w-max h-full ">

        <div className="flex flex-col items-center justify-between mx-auto border border-gray-400">
            
            {/* section 1 */}
            {/* hero section */}
          <div className="flex flex-col bg-gray-100 w-[100%]" >

            <div className="items-start justify-start ml-10 mt-4 " id="hero10">
                <img src={logo} alt="logo" className="items-start w-[9rem] h-[4.5rem]"/>
            </div>

            <div className=" flex items-center justify-between w-[100%]" id="resp1">

            {/* left side */}
                <div className="w-[50%] items-start justify-start flex flex-col gap-3 ml-5 p-5 mb-4 " id="hero9">

                    <div className="items-start" id="hero1">
                        <img src={star} alt="star" className="ml-[6rem] translate-y-5"/>
                        <h2 className="text-[4rem] leading-[4rem] font-bold font-outfit text-gray-900">Lets make <span className="text-[#24A556]">{"{ }"}</span> <br/>website together!</h2>
                    </div>

                    <div id="">
                        <p className="text-[30px] font-bold">Starting From <span className="text-[#f00] text-[30px] font-bold">$299/-USD*</span></p>
                    </div>

                    <div className="items-end ml-[22rem] mt-3 mb-3 w-[60%]" id="hero2">
                        <img src={vector} alt="img" className=""/>
                    </div>

                    <div className="items-start mb-2 " id="hero5">
                        <p className="text-[16px] text-gray-600">Bytelogic Technologies: Transforming Ideas into Stunning, High-Performance Websites 
                        That Drive Growth and Deliver Results—Your Success Starts Here!</p>
                    </div>

                    <div className="justify-between items-center flex gap-8 mb-3">
                    {/* left side button */}
                        <div className="rounded-3xl border-2 border-[#2489D3] p-2  transition-all duration-300 bg-[#2489D3] cursor-pointer hover:bg-white " id="hero6">
                            <p className=" pl-7 pr-7 text-white hover:text-[#2489D3]">Start Now</p>
                        </div>

                    {/* right side button */}
                        <div className="rounded-3xl border-2 border-[#2489D3] p-2  transition-all duration-300 hover:bg-[#2489D3] cursor-pointer" id="hero6">
                            <p className="text-blue-500 pl-7 pr-7 hover:text-white">View Services</p>
                        </div>
                    
                    </div>

                    {/* <div>
                        <StatsSection/>
                    </div> */}

                    <div className='items-start flex justify-start gap-6 ' id="hero8">
                         
                        
                        <div className="flex " id="count1">

                            <div className="flex flex-col" id="tab1">
                                <div id="hero4">
                                    <p className="text-[#F0C932] font-bold font-outfit text-[3rem] leading-[3.5rem]">5,200+</p>
                                </div>
                                <div id="hero7">
                                    <p>Satisfied <br/>Clients</p>
                                </div>
                            </div>

                            <div className="flex flex-col" id="tab1">
                                <div id="hero4">
                                    <p className="text-[#2489D3] font-bold font-outfit text-[3rem] leading-[3.5rem]">6,500+</p>
                                </div>
                                <div id="hero7">
                                    <p >Web Projects <br/>Delivered</p>
                                </div>
                            </div>
                        
                        </div>

                        <div className="flex" id="count2">
                            <div className="flex flex-col" id="tab1">
                                <div id="hero4">
                                    <p className="text-[#25d324] font-bold font-outfit text-[3rem] leading-[3.5rem]">25+</p>
                                </div>
                                <div id="hero7">
                                    <p >Team <br/>Members</p>
                                </div>
                            </div>

                            <div className="flex flex-col" id="tab1">
                                <div id="hero4">
                                    <p className="text-[#FE753F] font-bold font-outfit text-[3rem] leading-[3.5rem]">12+</p>
                                </div>
                                <div id="hero7">
                                    <p id="hero7">Years of <br/> Experience</p>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

                {/* right side */}
                <div className=" w-[50%]" id="hero3">
                    <img src={hero} alt="logo" className="" id="hero11"/>
                </div>

            </div>

          </div>

            {/* section 4 */}
            <div>
                <Aboutus/>
            </div>

            {/* section 5 */}
            <div className="pt-14">
                <Explore/>
            </div>

            {/* section 6 */}
            <div className=" w-[80%] justify-evenly items-center mb-10 " id="wor1">
                <Work/>
            </div>

            {/* section 8 */}
            <div className="border ">
                <Chooseus/>
            </div>

            {/* section 9*/}
            <div className="" id="dec12">
                <Contactus/>
            </div>

            <div>
                <Testimonial/>
            </div>

            <div className=" w-[100%]">
                <Info/>
            </div>
        </div>

    </div>
      
  )
}

export default Home;
