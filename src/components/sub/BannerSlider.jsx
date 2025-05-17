import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';

const BannerSlider = () => {
  const banners = [
    'https://i.ibb.co/PzYTCNNS/17057110-5375621.jpg',
    'https://i.ibb.co/hFQ10Qtp/m010t0655-d-sale-banner-03mar23.jpg',
    'https://i.ibb.co/nqnQzch4/20284953-6254366.jpg',
    'https://i.ibb.co/KxNrLWMP/6626525-3386820.jpg',
    'https://i.ibb.co/WWmh5w7p/17057114-5375636.jpg',
    'https://i.ibb.co/TDC5zHLN/10016860-27331.jpg',
  ];

  return (
    <div className="relative w-full h-48 xl:h-[40rem] rounded-b-xl overflow-hidden">
      {/* Swiper in background */}
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        className="absolute inset-0 z-0"
      >
        {banners.map((img, idx) => (
          <SwiperSlide key={idx}>
            <img
              src={img}
              className="w-full h-full object-cover"
              alt={`Banner ${idx + 1}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Static content on top */}
      <div className="absolute inset-0 bg-black/50 z-10 flex items-center justify-center">
        <div className="text-center text-white space-y-4">
          <h1 className="text-4xl font-bold">Get the Best Deals on Dealio</h1>
          <Link to={'/coupons'}>
            <button className="btn border-none px-6 py-6 text-[1rem] bg-white text-primary font-semibold rounded-md shadow hover:bg-gray-100 transition">
              View More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BannerSlider;
