import React from 'react';
// import {Link} from 'react-router-dom'
import { BsTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { CiGlobe } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";

const Contactus = () => {
  return (
    <div className="w-[80%] items-center justify-center " id="dec11">

        {/* id="box1" */}
        <div className="flex w-11/12 flex-col mt-16 " id="contact1">

            {/* id="box36" */}
            <div className="flex flex-col items-center mb-10 gap-4" id="dec1">
                <h2 className="font-sans font-bold text-[3rem] leading-10 text-center">Contact us</h2>
                <p>Tailored Solutions for Every Digital Project.</p>
            </div>

            <div className="flex items-start justify-between border border-gray-400 rounded-3xl p-8 h-[40rem]" id="dec2">

                <div className=" bg-[#6854FC] text-white items-start justify-start  p-8  rounded-3xl h-[32rem]" id="contact2">

                    {/* id="box45" */}
                    <div>

                        {/* id="c1" */}
                        <div id="dec7">
                            <p className="text-start font-bold text-[1.5rem]">Contact Information</p>
                        </div>
                        <br/>
                        <div id="dec8">
                            <p className="font-sans font-medium text-[1rem] leading-6 text-gray-200">Fill up the form and our Team will <br/>get back to you within 24 hours.</p>
                        </div>
                        
                    </div>
                    <br/>
                    <div className="w-[23rem] mt-5" id="dec14">
                        <ul className="flex flex-col gap-5" id="contact4">
                            <li className="flex gap-3 ">
                                <BsTelephoneFill className="bg-blue"/>
                                <a href="tel:9958474631">
                                    <p>+91-9958474631</p>
                                </a>
                            </li>
                            <li className="flex gap-3">
                                <MdEmail />
                                <a href="http://localhost:3000/">
                                    <p>info@bytelogicindia.com</p>
                                </a>
                            </li>
                            <li className="flex gap-3">
                                <CiGlobe />
                                <a href="https://bytelogicindia.com/">
                                    <p>https://bytelogicindia.com/</p>
                                </a>
                            </li>
                            <li className="flex gap-3">
                                <CiLocationOn />
                                <div className="" id="dec9">
                                    <a href="https://www.google.com/maps/place/Bytelogic+Technologies:+Noida's+Premier+Website+Design+Company/@28.6297293,77.376994,17z/data=!3m1!4b1!4m6!3m5!1s0x390cef14d15d62a3:0x885da66f2e050ef9!8m2!3d28.6297293!4d77.376994!16s%2Fg%2F11r5t8z86p?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D">
                                        <p>Suit-06, H-25, Sector 63, Noida, Uttar Pradesh 201301, India</p>
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* <div className=" z-[-1]">
                        <img src={ellipse} alt="image" className="w-[8rem]"/>
                    </div> */}
                </div>

                {/* id="box38" */}
                <div className="flex flex-col items-start justify-start w-[40rem] gap-10 ml-[4rem] mb-[17rem]" id="contact3" >

                    {/* id="box44" */}
                    <div className="flex gap-10" id="dec4">

                        {/* id="box46" */}
                        <div className="flex flex-col gap-5" id="dec6">
                            <label className="font-semibold text-[14px]">First Name</label>
                            <input 
                                type="text" 
                                name="firstname"
                                placeholder='_________________________'
                            />
                        </div>

                        {/* id="box46" */}
                        <div className="flex flex-col gap-5" id="dec6">
                            <label className="font-semibold text-[14px]">Last Name</label>
                            <input 
                                type="text" 
                                name="lastname"
                                placeholder='_________________________'
                            />
                        </div>

                    </div>

                    {/* id="box44" */}
                    <div className="flex gap-10 " id="dec4">
                        
                        {/* id="box46" */}
                        <div className="flex flex-col gap-5" id="dec6">
                            <label className="font-semibold text-[14px]">Mail</label>
                            <input 
                                type="text" 
                                name="lastname"
                                placeholder='_________________________'
                            />
                        </div>

                        {/* id="box46" */}
                        <div className="flex flex-col gap-5" id="dec6">
                            <label className="font-semibold text-[14px]">Phone</label>
                            <input 
                                type="text" 
                                name="phone"
                                placeholder='_________________________'
                            />
                        </div>
                    </div>

                    <div className="flex" id="dec5">

                        {/* id="box57" */}
                        <div className="flex flex-col gap-5" id="dec15">
                            <label className="font-semibold text-[14px]">Message</label>
                            <input 
                                type="text" 
                                name="message"
                                placeholder='_____________________________________________________________________________________________________________________________________________________________________________________________________________'
                            />
                        </div>
                    </div>

                    <div className="flex justify-start items-start w-[10rem] h-[3rem] gap-5 " >
                        <div className="bg-[#6854FC] p-2 pr-5 pl-5 rounded-full items-center " >
                            <p className="text-white font-bold font-sans text-[14px] leading-6 ">Send Message</p>
                        </div>
                    </div>

                </div>

            </div>
            
        </div>
      
    </div>
  )
}

export default Contactus
