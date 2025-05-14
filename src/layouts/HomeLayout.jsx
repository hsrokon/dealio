import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/sub/Footer";
import ScrollToTopButton from "../components/sub/ScrollToTopButton";


const HomeLayout = () => {
    return (
        <div className="w-11/12 min-h-screen mx-auto mt-4 font-poppins relative">
            <header>
                <Navbar></Navbar>
            </header> 
            <main>
                <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
            <ScrollToTopButton></ScrollToTopButton>
        </div>
    );
};

export default HomeLayout;