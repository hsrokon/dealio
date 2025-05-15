import { useContext, useEffect, useState } from "react";
import { SavedContext } from "../../utils/saved";


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
            <section>
                <h3>Electronics</h3>
            </section>
            
        </div>
    );
};

export default Saved;