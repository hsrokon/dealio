import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/sub/Footer";
import ScrollToTopButton from "../components/sub/ScrollToTopButton";
import { getSaved, SavedContext, saveToLS } from "../utils/saved";
import { ToastContainer } from "react-toastify";


const HomeLayout = () => {
    return (
        <div className="w-11/12 min-h-screen mx-auto mt-4 font-poppins relative">
            <SavedContext.Provider value={{getSaved, saveToLS}}>
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
            </SavedContext.Provider>
            <ToastContainer />
        </div>
    );
};

export default HomeLayout;