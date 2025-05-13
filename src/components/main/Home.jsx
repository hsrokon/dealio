import PopularCoupons from '../sub/PopularCoupons';
import BannerSlider from '../sub/BannerSlider'

const Home = () => {
    return (
        <div>
            <section className="mt-1">
                   <BannerSlider></BannerSlider>
            </section>
            <section className='my-10'>
                    <PopularCoupons></PopularCoupons>
            </section>
        </div>
    );
};

export default Home;