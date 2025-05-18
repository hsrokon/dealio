import { createContext, useState } from "react";
import CouponAside from "../sub/CouponAside";
import CouponCardsSection from "../sub/CouponCardsSection";

export const CouponCatContext = createContext();

const Coupons = () => {

    const [ cat, setCat ] = useState('All');

    return (
        <div className="min-h-screen relative mb-10">
            <CouponCatContext.Provider value={{cat, setCat}}> 
            <h1 className="my-8 w-fit mx-auto pr-2 shadow-[3px_3px_0px_#FF6B2C] shadow-secondary text-xl md:text-3xl lg:text-4xl font-semibold text-primary">Find your desired one!</h1>
            <div className="flex flex-col md:grid md:grid-cols-12 h-full w-11/12 mx-auto">
                <aside className="md:col-span-2 md:sticky md:top-36 h-fit">
                    <CouponAside></CouponAside>
                </aside>
                <main className="md:col-span-10 md:ml-6 px-2">
                    <CouponCardsSection></CouponCardsSection>
                </main>
            </div>
            </CouponCatContext.Provider>
        </div>
    );
};

export default Coupons;