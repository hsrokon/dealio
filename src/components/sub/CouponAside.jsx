import { useContext, useEffect, useState } from "react";
import { CouponCatContext } from "../main/Coupons";
import { NavLink } from "react-router-dom";

const CouponAside = () => {

    const [ categories, setCategories ] = useState([]);
    
    useEffect(()=>{
        fetch('coupon_cat.json')
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])

    //context
    const { cat: activeCat, setCat } = useContext(CouponCatContext);
    const handleSetCategory = cat => {
        setCat(cat);
    }


    return (
        <div className="flex flex-col items-start h-full justify-center gap-10">
            {
                categories.map((cat, idx)=>
            <div 
            onClick={()=> handleSetCategory(cat)}
            key={idx} className="bg-white w-full flex items-center justify-center"> 
                <button className={`px-6 py-2 font-medium 
                    ${activeCat===cat ? 'bg-primary shadow-[3px_3px_0px_#4FC3F7]':'bg-[#4FC3F7] shadow-[3px_3px_0px_#FF6B2C]'}  text-white w-full transition-all  hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]`}>
                    {cat}
                </button>
            </div>
                )
            }
            
        </div>
    );
};

export default CouponAside;