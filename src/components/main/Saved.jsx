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
                <h1 className="my-8 w-fit mx-auto pr-2 shadow-[3px_3px_0px_#FF6B2C] shadow-primary text-xl md:text-3xl lg:text-4xl font-semibold text-secondary">Never miss the favorite!</h1>
            <section className="min-h-10">
                <h3 className="text-lg md:text-2xl lg:text-3xl font-semibold mt-12"><span className="text-primary">&#10095;</span> Electronics 🔌📱💻</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5">
                    {
                        electronicsSaved.map(c => <CouponCard key={c.id} coupon={c}></CouponCard>)
                    }
                </div>
                <div className="text-center">
                    {
                    electronicsSaved.length ===0 && <h2>No coupon saved in this category!</h2>
                    }
                </div>
            </section>
            <section className="min-h-10">
                <h3 className="text-lg md:text-2xl lg:text-3xl font-semibold mt-12"><span className="text-primary">&#10095;</span> Food🍔🍕🍣</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5">
                    {
                        foodSaved.map(c => <CouponCard key={c.id} coupon={c}></CouponCard>)
                    }
                </div>
                <div className="text-center">
                    {
                    foodSaved.length ===0 && <h2>No coupon saved in this category!</h2>
                    }
                </div>
            </section>
            <section className="min-h-10">
                <h3 className="text-lg md:text-2xl lg:text-3xl font-semibold mt-12"><span className="text-primary">&#10095;</span> Fashion👗👜👟</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5">
                    {
                        fashionSaved.map(c => <CouponCard key={c.id} coupon={c}></CouponCard>)
                    }
                </div>
                <div className="text-center">
                    {
                    fashionSaved.length ===0 && <h2>No coupon saved in this category!</h2>
                    }
                </div>
            </section>
            <section className="min-h-10">
                <h3 className="text-lg md:text-2xl lg:text-3xl font-semibold mt-12"><span className="text-primary">&#10095;</span> Beauty💄🧴💅</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5">
                    {
                        beautySaved.map(c => <CouponCard key={c.id} coupon={c}></CouponCard>)
                    }
                </div>
                <div className="text-center">
                    {
                    beautySaved.length ===0 && <h2>No coupon saved in this category!</h2>
                    }
                </div>
            </section>
            <section className="min-h-10">
                <h3 className="text-lg md:text-2xl lg:text-3xl font-semibold mt-12"><span className="text-primary">&#10095;</span> Travel✈️🌍🧳</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5">
                    {
                        travelSaved.map(c => <CouponCard key={c.id} coupon={c}></CouponCard>)
                    }
                </div>
                <div className="text-center">
                    {
                    travelSaved.length ===0 && <h2>No coupon saved in this category!</h2>
                    }
                </div>
            </section>
            
        </div>
    );
};

export default Saved;