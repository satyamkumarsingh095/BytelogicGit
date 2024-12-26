import React from 'react'
import tele from '../assets/Send.png';
import call from '../assets/Calling.png';

const Info = () => {
  return (
    <div className=" mt-[10rem] w-full items-center justify-between mb-[5 rem] border border-blue-100" id="in3">

        <div className="w-full items-center justify-center flex flex-col gap-10 pt-[8rem] mb-[4rem]" id="in4">

            {/* id="info1" */}
            <div className="mt-5 w-[55%] items-center justify-between" id="info1">
                <h2 className="font-outfit font-semibold text-[3rem] leading-[3.5rem] text-center ">Have a project idea in mind.
                Get in touch and let's chat!</h2>
            </div>

            <div className="flex gap-10 justify-end" id="in1">

                {/* id="info2" */}
                <div className="flex flex-col items-center gap-3 ">
                    <div>
                        <img src={tele} alt="tele"/>
                    </div>
                    <p>Email Address</p>
                    <p>bytelogicindia@info.com</p>
                </div>

                {/* id="info2" */}
                <div className="flex flex-col items-center gap-3 mt-1.5">
                    <div>
                        <img src={call} alt="call"/>
                    </div>
                    <p>Phone Number</p>
                    <p>(406) 555-0120</p>
                </div>
            </div>

            <div className=" items-center w-[10rem] h-[3rem] gap-5">

                {/* id="info3" */}
                <div className="bg-[#6854FC] p-3 pr-5 pl-5 rounded-2xl items-center ">
                    <p className="text-white font-bold font-sans text-[1rem] leading-6 ">Request Quote</p>
                </div>
            </div>

        </div>

    </div>
  )
}

export default Info
