import { useEffect, useState } from "react";
import PopularCoupon from "./PopularCoupon";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';


const PopularCoupons = () => {

    const [ coupons , setCoupons ] = useState([]);
    
    useEffect(()=>{
        fetch('popular_coupons.json')
        .then(res => res.json())
        .then(data => setCoupons(data))
    },[])

    
    
    return (
        <div className="w-full max-w-7xl mx-auto">
            <h2 className="text-4xl text-primary font-semibold text-center">Get the popular deals!</h2>
            <Swiper
                modules={[Autoplay]}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                loop={true}
                //in groups show
                spaceBetween={20}
                slidesPerView={3}// shows 3 slides at a time
                slidesPerGroup={3}//slides 3 at once
                //responsive
                breakpoints={{
                640: { slidesPerView: 1, slidesPerGroup: 1 },
                768: { slidesPerView: 2, slidesPerGroup: 2 },
                1024: { slidesPerView: 3, slidesPerGroup: 3 },
                }}
                className="z-0"
                >
                {
                    coupons.map(coupon => 
                        <SwiperSlide key={coupon.id} >
                            <PopularCoupon coupon={coupon}
                            ></PopularCoupon>
                        </SwiperSlide>
                    )
                }
            </Swiper>
            
        </div>
    );
};

export default PopularCoupons;