import { FaLocationDot, FaPhoneVolume } from "react-icons/fa6";
import { GrUserWorker } from "react-icons/gr";
import { HiOutlineMail } from "react-icons/hi";
import { LuSend } from "react-icons/lu";


const Contract = () => {
    return (
        <div>
            <h3 className="text-white text-3xl text-center font-bold mb-5">Contract Us</h3>
            <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1">
                <div className="space-y-5">
                    <div className="flex items-center space-x-2">
                    <GrUserWorker className="text-white text-2xl"/>
                    <h3 className="text-white text-2xl font-bold">Company Name: WORKER-SERVICE</h3>
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
                <div className="space-y-5">
                    <p className="text-white text-2xl font-bold">Mailing Address: Advantage Resource
                        PO Box 4099
                        Lexington, KY 40544-4099</p>
                    <p className="text-white text-2xl font-bold">Thank you for the interest. Please feel free to contact us to learn more about WorkerServices, WorkerFringe, Worker401k, or Advantage Resource.</p>
                    <div>
                        <div className="flex items-center space-x-2">
                            <LuSend className="text-white text-2xl" />
                            <h3 className='text-2xl font-bold text-white'>Send Your Email</h3>
                        </div>
                        <div>
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