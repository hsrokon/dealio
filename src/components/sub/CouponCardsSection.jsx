import { useEffect, useState } from "react";
import CouponCard from "./CouponCard";


const CouponCardsSection = () => {

    const [ coupons, setCoupons ] = useState([]);

    useEffect(()=> {
        fetch('mixed_coupon_data.json')
        .then(res => res.json())
        .then(data => setCoupons(data))
    },[])


    return (
        <div className="grid grid-cols-4">
            {
                coupons.map(coupon => 
                <CouponCard 
                key={coupon.id} 
                coupon={coupon}></CouponCard>)
            }
        </div>
    );
};

export default CouponCardsSection;