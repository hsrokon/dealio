import PopularCoupons from '../sub/PopularCoupons';
import BannerSlider from '../sub/BannerSlider'
import ShuffleHero from '../sub/ShuffleHero';

const Home = () => {
    return (
        <div>
            <section className="mt-1">
                   <BannerSlider></BannerSlider>
            </section>
            <section className='my-10'>
                    <PopularCoupons></PopularCoupons>
            </section>
            <section className='my-10'>
                    <ShuffleHero></ShuffleHero>
            </section>
            <section>

            </section>
        </div>
    );
};

export default Home;