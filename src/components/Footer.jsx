import { FaSquareFacebook, FaSquareXTwitter } from 'react-icons/fa6';
import logo from '../assets/logoImg.webp';
import { SiInstagram } from 'react-icons/si';

const Footer = () => {
    return (
        <footer className="lg:flex md:flex justify-around bg-[#222222] text-white p-10 text-center">
            <nav className='flex flex-col space-y-3'>
                <h6 className="footer-title text-xl">WORKER-SERVICE</h6>
                <a className="link link-hover">Home</a>
                <a className="link link-hover">All Services</a>
                <a className="link link-hover">Contract</a>
                <a className="link link-hover">copyright @ 2024-2030</a>
            </nav>
            <nav className='flex flex-col space-y-3'>
                <h6 className="footer-title text-xl">DESCRIPTION</h6>
                <p>Worker Services provides<br/> a secure online platform for<br/> the access of files and forms between a company<br/> and its employees, an organization<br/> and its members</p>
            </nav>
            <nav className='flex flex-col space-y-3'>
                <h6 className="footer-title text-xl">social profiles</h6>
                <div className='flex justify-center space-x-3 cursor-pointer'>
                    <div>
                        <img className='w-28 rounded-xl' src={logo} alt="" />
                        <p className=''>www.WORKER.com</p>
                    </div>
                    <div className='space-y-3 text-4xl'>
                        <FaSquareFacebook className='text-blue-500' />
                        <FaSquareXTwitter />
                        <SiInstagram className='text-red-500' />
                    </div>
                </div>
            </nav>
        </footer>
    );
};

export default Footer;