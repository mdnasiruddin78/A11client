import image from '../assets/banner_MW.png';

const Partners = () => {
    return (
        <div>
            <h3 className="text-white text-3xl font-bold text-center mb-5">Meet Our Partners</h3>
            <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-3">
                <div>
                    <div>
                        <h3 className='text-white text-xl font-bold'>1.MISTER WORKER</h3>
                        <p className='text-gray-500'>
                            I placed an order a month ago,to messages for 3 weeks, then I the order would arrive on 12/16/2024, no order has arrived and no from them my is, it for 3 days, it's been stuck in moved, a 100% unreliable site. I don't a single star
                        </p>
                    </div>
                    <div>
                        <h3 className='text-white text-xl font-bold'>2.EXPERT</h3>
                        <p className='text-gray-500'>
                            If you're looking for high-quality tools and service, misterworker.com place to go. I'll be returning for future purchases. Highly recommended!
                            Special thanks to Leo from Customer Service for their outstanding support!
                        </p>
                    </div>
                    <div>
                        <h3 className='text-white text-xl font-bold'>3.STANLEY</h3>
                        <p className='text-gray-500'>
                        Good experience overall, I have ordered items which I couldn’t in the UK and time items ordered.I received the Friday FedEx emailed the extra custom import charges which £31.99 for items of a total value of €147.
                        </p>
                    </div>
                    <div>
                        <h3 className='text-white text-xl font-bold'>4.DEWALT</h3>
                        <p className='text-gray-500'>
                        As I couldn’t buy the needed in the UK and in receiving the parts (it took 2 weeks parts were ordered to when they were delivered) I’m very happy with the service offered by mister worker.
                        </p>
                    </div>
                </div>
                <div>
                    <img className='rounded-xl lg:h-[400px]' src={image} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Partners;