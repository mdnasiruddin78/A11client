import { FaInternetExplorer, FaLocationDot, FaPhoneVolume } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { LuSend } from "react-icons/lu";
import CountUp from 'react-countup';
import React from "react";


const Contract = () => {

    return (
        <div>
            <h3 className="text-white text-3xl text-center font-bold mb-5">Contract Us</h3>
            <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1">
                <div className="space-y-5">
                    <div className="flex items-center space-x-2">
                        <FaInternetExplorer className="text-white text-2xl" />
                        <h3 className="text-white text-2xl font-bold">Company Name: WORK-SERVICE</h3>
                    </div>
                    <div className="flex items-center space-x-2">
                        <FaPhoneVolume className="text-white text-2xl" />
                        <p className="text-white text-2xl font-bold">Mobile: +0018439875323</p>
                    </div>
                    <div className="flex items-center space-x-2">
                        <HiOutlineMail className="text-white text-2xl" />
                        <p className="text-white text-2xl font-bold">Email: workservice12@gmail.com</p>
                    </div>
                    <div className="flex items-center space-x-2">
                        <FaLocationDot className="text-white text-2xl" />
                        <p className="text-white text-2xl font-bold">
                            Company Office: New-Market,road 12/14,Chittagong,Bangladesh!
                        </p>
                    </div>
                </div>
                <div className="space-y-10">
                   <div className="space-y-3">
                    <h3 className="text-white text-2xl">Users Review Countup</h3>
                   <CountUp duration={50} start={0} end={200}>
                        {({ countUpRef }) => (
                            <div className="flex items-center space-x-3">
                                <span className="text-6xl text-white font-bold" ref={countUpRef} />
                            </div>
                        )}
                    </CountUp>
                   </div>
                    <div>
                        <div className="flex items-center space-x-2">
                            <LuSend className="text-white text-2xl" />
                            <h3 className='text-2xl font-bold text-white'>Send Your Email</h3>
                        </div>
                        <div className="flex items-center">
                            <input type="email" placeholder="Type your email" className="input input-bordered w-full max-w-xs" />
                            <button className="btn -7 bg-black text-white border-2 border-white">Send </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contract;