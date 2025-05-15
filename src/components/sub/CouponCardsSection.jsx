import { useContext, useEffect, useState } from "react";
import CouponCard from "./CouponCard";
import { CouponCatContext } from "../main/Coupons";


const CouponCardsSection = () => {

    const [ coupons, setCoupons ] = useState([]);
    const { cat } = useContext(CouponCatContext);
    const [ categorizedCoupon, setCategorizedCoupon ] = useState([]);

    useEffect(()=> {
        fetch('mixed_coupon_data.json')
        .then(res => res.json())
        .then(data => setCoupons(data))
    },[])

    useEffect(()=>{
        if (cat==='All') {
        setCategorizedCoupon(coupons);
        } else if (cat==='Electronics') {
            const filteredEleCat = coupons.filter(coupon => coupon.category ==='Electronics');
            setCategorizedCoupon(filteredEleCat); 
        } else if (cat==='Food') {
            const filteredFoodCat = coupons.filter(coupon => coupon.category ==='Food');
            setCategorizedCoupon(filteredFoodCat);
        } else if (cat==='Fashion') {
            const filteredFashionCat = coupons.filter(coupon => coupon.category ==='Fashion');
            setCategorizedCoupon(filteredFashionCat);
        } else if (cat==='Beauty') {
            const filteredBeautyCat = coupons.filter(coupon => coupon.category ==='Beauty');
            setCategorizedCoupon(filteredBeautyCat);
        } else if (cat==='Travel') {
            const filteredTravelCat = coupons.filter(coupon => coupon.category ==='Travel');
            setCategorizedCoupon(filteredTravelCat);
        }
    },[cat, coupons])
    
    //Non-Mutating Methods: .filter() .map() .reduce() .slice() .concat() .find() .some(), .every() .includes()
    //Mutating Methods: .sort() .push() .pop() .splice() .reverse() .shift(), .unshift()

    return (
        <div className="grid grid-cols-4">
            {
                categorizedCoupon.map(coupon => 
                <CouponCard 
                key={coupon.id} 
                coupon={coupon}></CouponCard>)
            }
        </div>
    );
};

export default CouponCardsSection;