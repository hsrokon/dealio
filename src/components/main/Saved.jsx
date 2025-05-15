import { useContext, useEffect, useState } from "react";
import { SavedContext } from "../../utils/saved";
import CouponCard from "../sub/CouponCard";


const Saved = () => {
    const [ coupons, setCoupons ] = useState([]);
    useEffect(()=>{
        fetch('mixed_coupon_data.json')
        .then(res => res.json())
        .then(data => setCoupons(data));
    },[])

    const { getSaved } = useContext(SavedContext);

    const [electronicsSaved, setElectronicsSaved] = useState([]);
    const [foodSaved, setFoodSaved] = useState([]);
    const [fashionSaved, setFashionSaved] = useState([]);
    const [beautySaved, setBeautySaved] = useState([]);
    const [travelSaved, setTravelSaved] = useState([]);

    useEffect(()=>{
        if (coupons.length>0) {
            setElectronicsSaved(coupons.filter(coupon => getSaved('Electronics').includes(coupon.id)));
            setFoodSaved(coupons.filter(coupon => getSaved('Food').includes(coupon.id)))
            setFashionSaved(coupons.filter(coupon => getSaved('Fashion').includes(coupon.id)))
            setBeautySaved(coupons.filter(coupon => getSaved('Beauty').includes(coupon.id)))
            setTravelSaved(coupons.filter(coupon => getSaved('Travel').includes(coupon.id)))
        }

    },[coupons, getSaved])

    

    return (
        <div className="min-h-screen">
                <h1 className="my-8 w-fit mx-auto pr-2 shadow-[3px_3px_0px_#FF6B2C] shadow-primary text-4xl font-semibold text-secondary">Never miss the favorite!</h1>
            <section>
                <h3 className="text-3xl font-semibold mt-12">Electronics 🔌📱💻</h3>
                <div className="grid grid-cols-5">
                    {
                        electronicsSaved.map(c => <CouponCard key={c.id} coupon={c}></CouponCard>)
                    }
                </div>
            </section>
            <section>
                <h3 className="text-3xl font-semibold mt-12">Food🍔🍕🍣</h3>
                <div className="grid grid-cols-5">
                    {
                        foodSaved.map(c => <CouponCard key={c.id} coupon={c}></CouponCard>)
                    }
                </div>
            </section>
            <section>
                <h3 className="text-3xl font-semibold mt-12">Fashion👗👜👟</h3>
                <div className="grid grid-cols-5">
                    {
                        fashionSaved.map(c => <CouponCard key={c.id} coupon={c}></CouponCard>)
                    }
                </div>
            </section>
            <section>
                <h3 className="text-3xl font-semibold mt-12">Beauty💄🧴💅</h3>
                <div className="grid grid-cols-5">
                    {
                        beautySaved.map(c => <CouponCard key={c.id} coupon={c}></CouponCard>)
                    }
                </div>
            </section>
            <section>
                <h3 className="text-3xl font-semibold mt-12">Travel✈️🌍🧳</h3>
                <div className="grid grid-cols-5">
                    {
                        travelSaved.map(c => <CouponCard key={c.id} coupon={c}></CouponCard>)
                    }
                </div>
            </section>
            
        </div>
    );
};

export default Saved;