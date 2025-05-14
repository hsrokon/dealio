import CouponAside from "../sub/CouponAside";
import CouponCardsSection from "../sub/CouponCardsSection";


const Coupons = () => {
    return (
        <div className="min-h-screen relative mb-10">
            <h1 className="my-8 w-fit mx-auto pr-2 shadow-[3px_3px_0px_#FF6B2C] shadow-secondary text-4xl font-semibold text-primary">Find your desired one!</h1>
            <div className="grid grid-cols-12 h-full ">
                <aside className="col-span-2 sticky top-36 h-fit">
                    <CouponAside></CouponAside>
                </aside>
                <main className="col-span-10 ml-6">
                    <CouponCardsSection></CouponCardsSection>
                </main>
            </div>
            
        </div>
    );
};

export default Coupons;