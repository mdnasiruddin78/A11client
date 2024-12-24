import { Link, NavLink } from "react-router-dom";
import logo from '../assets/logoImg.webp';
import { HiMenuAlt1 } from "react-icons/hi";
import { TbLogin2 } from "react-icons/tb";
import { FaRegRegistered } from "react-icons/fa6";
import { useContext } from "react";
import { AuthContext } from "../Provider/Authprovider";
import { MdLogout } from "react-icons/md";


const Navbar = () => {

    const { user, logoutUser } = useContext(AuthContext)

    return (
        <div className="flex justify-between items-center backdrop-blur bg-white/10 py-2 px-5">
            <div className="flex space-x-3 items-center">
                <div>
                    <img className="lg:flex md:flex hidden w-16 rounded-full" src={logo} alt="logo" />
                </div>
                <div className="dropdown lg:hidden md:hidden flex">
                    <div tabIndex={0} role="button"><HiMenuAlt1 className='text-3xl text-white' /></div>
                    <ul tabIndex={0} className="dropdown-content menu text-white backdrop-blur bg-white/30 font-bold rounded-box z-[1] w-44 p-2">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/service">Services</NavLink></li>
                        <li>
                            {
                                user && <NavLink to="/addservice">Add Service</NavLink>
                            }
                        </li>
                        <li>
                            {
                                user && <NavLink to="/myreview">My Reviews</NavLink>
                            }
                        </li>
                    </ul>
                </div>
                <div className="lg:flex md:flex hidden space-x-4 text-white font-bold">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/service">Services</NavLink>
                    {
                        user && <NavLink to="/addservice">Add Service</NavLink>
                    }

                    {
                        user && <NavLink to="/myreview">My Reviews</NavLink>
                    }
                </div>
            </div>
            <div className='flex justify-between items-center space-x-2'>
                <div>
                    {
                        user && <div className='tooltip tooltip-left' data-tip={`${user?.email}`}><img className='w-12 rounded-full' src={user?.photoURL} alt="" /></div>
                    }
                </div>
                {
                    user && user?.email ? <button onClick={logoutUser} className="btn bg-white text-black">Logout<MdLogout className="text-xl"
                    /></button> : <div className="space-x-2">
                        <Link to="/login" className="btn bg-white text-black">Login <TbLogin2 className="text-xl" /></Link>
                        <Link to="/register" className="btn bg-white text-black">Register <FaRegRegistered className="text-xl" /></Link>
                    </div>
                }
            </div>
        </div>
    );
};

export default Navbar;