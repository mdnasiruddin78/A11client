import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";


const Mainlayout = () => {
    return (
        <div>
            <nav className='sticky top-0 z-50'>
                <Navbar></Navbar>
            </nav>
            <main className="w-11/12 mx-auto">
                <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default Mainlayout;