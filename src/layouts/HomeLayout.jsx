import BannerSlider from "../components/BannerSlider";
import Navbar from "../components/Navbar";


const HomeLayout = () => {
    return (
        <div className="w-11/12 mx-auto mt-4 font-poppins">
            <header>
                <Navbar></Navbar>
            </header>
            <main>
                <section className="mt-1">
                    <BannerSlider></BannerSlider>
                </section>
            </main>
            
        </div>
    );
};

export default HomeLayout;