import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";


const HomeLayout = () => {
    return (
        <div className="w-11/12 min-h-screen mx-auto mt-4 font-poppins">
            <header>
                <Navbar></Navbar>
            </header> 
            <main>
                <Outlet></Outlet>
            </main>
            <footer>
                
            </footer>
        </div>
    );
};

export default HomeLayout;