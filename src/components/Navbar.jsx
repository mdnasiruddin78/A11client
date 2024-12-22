import { Link, NavLink } from "react-router-dom";
import logo from '../assets/logoImg.webp';
import { HiMenuAlt1 } from "react-icons/hi";
import { TbLogin2 } from "react-icons/tb";
import { FaRegRegistered } from "react-icons/fa6";

const Navbar = () => {
    return (
        <div className="flex justify-between items-center backdrop-blur bg-white/10 py-3 px-6">
            <div className="flex space-x-3 items-center">
                <div>
                    <img className="lg:flex md:flex hidden w-16 rounded-xl" src={logo} alt="logo" />
                </div>
                <div className="dropdown lg:hidden md:hidden flex">
                    <div tabIndex={0} role="button"><HiMenuAlt1 className='text-3xl text-white' /></div>
                    <ul tabIndex={0} className="dropdown-content menu text-white backdrop-blur bg-white/30 font-bold rounded-box z-[1] w-44 p-2">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/service">Services</NavLink></li>
                        <li><NavLink to="/addservice">Add Service</NavLink></li>
                        <li><NavLink to="/myreview">My Reviews</NavLink></li>
                    </ul>
                </div>
                <div className="lg:flex md:flex hidden space-x-4 text-white font-bold">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/service">Services</NavLink>
                    <NavLink to="/addservice">Add Service</NavLink>
                    <NavLink to="/myreview">My Reviews</NavLink>
                </div>
            </div>
            <div className="space-x-3">
                <Link to="/login" className="btn bg-black text-white border-2 border-white">Login <TbLogin2 className="text-xl" /></Link>
                <Link to="/register" className="btn bg-black text-white border-2 border-white">Register <FaRegRegistered className="text-xl" /></Link>
            </div>
        </div>
    );
};

export default Navbar;