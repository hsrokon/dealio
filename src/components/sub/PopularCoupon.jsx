import { motion } from "framer-motion";
import SpotlightButton from "./SpotlightButton";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import CopyCouponCode from "./CopyCouponCode";

const categoryColors = {
  Electronics: { bg: "bg-secondary", text: "text-base-100" },
  Food: { bg: "bg-primary", text: "text-white" },
  Fashion: { bg: "bg-accent", text: "text-base-content" },
  Beauty: { bg: "bg-neutral", text: "text-white" },
  Travel: { bg: "bg-blue-600", text: "text-base-100" },
  Default: { bg: "bg-gray-100", text: "text-gray-800" }
};

const PopularCoupon = ({ coupon }) => {
  const {
    title, code, percent_off,
    duration, duration_in_months,
    times_redeemed, valid, category,
    store, expires_on
  } = coupon;
  const color = categoryColors[category] || categoryColors.Default;

  const { user } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const handleSeeCode = () => {
    navigate( '/auth/login', {
      state: location.pathname,
    })
  }

  return (
    <motion.div
      whileHover="hover"
      transition={{ duration: 0.5, ease: "backInOut" }}
      variants={{ hover: { scale: 1.05 } }}
      className={`relative w-64 h-[21rem] mx-auto lg:w-72 lg:h-96 rounded-xl p-6 shadow-lg ${color.bg} ${color.text}`}
      style={{ overflow: "visible" }} // <-- allows scale to overflow
    >
      {/* Background animation */}
      <Background />

      <div className="relative z-10 h-full flex flex-col justify-between">
        <div>
          <span className="inline-block mb-2 rounded-full bg-white/30 px-3 py-1 text-sm">
            {category}
          </span>
          <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-1">{title}</h3>
          <p className="text-sm opacity-90">Store: {store}</p>
        </div>

        <hr className="border-dashed border-white/40 my-2" />

        <div className="text-sm space-y-1">
          {
            user ? <CopyCouponCode code={code} /> : <div onClick={handleSeeCode}><SpotlightButton></SpotlightButton></div>
          }
          <p><strong>Discount:</strong> {percent_off}%</p>
          <p><strong>Redeemed:</strong> {times_redeemed} times</p>
          <p><strong>Duration:</strong> {duration} ({duration_in_months} mo)</p>
          <p><strong>Valid:</strong> {valid ? 'Yes' : 'No'}</p>
          <p><strong>Expires:</strong> {expires_on}</p>
        </div>
      </div>
    </motion.div>
  );
};

// 🌀 Background animation
const Background = () => (
  <motion.svg
    width="320"
    height="384"
    viewBox="0 0 320 384"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute inset-0 z-0 opacity-30 blur-sm"
    variants={{
      hover: { scale: 1.1, rotate: 10 }
    }}
    transition={{
      duration: 1,
      ease: "easeInOut"
    }}
  >
    <motion.circle
      cx="160"
      cy="120"
      r="100"
      fill="#FDF6EC"  // A soft cream color
      variants={{
        hover: { scale: 1.2, cy: 100 }
      }}
      transition={{
        duration: 1,
        ease: "easeInOut",
        delay: 0.2
      }}
    />
    <motion.ellipse
      cx="160"
      cy="260"
      rx="80"
      ry="40"
      fill="#E0F7FA"  // A soft cyan tone
      variants={{
        hover: { scaleX: 1.5, scaleY: 1.2, cy: 280 }
      }}
      transition={{
        duration: 1,
        ease: "easeInOut",
        delay: 0.3
      }}
    />
  </motion.svg>
);


export default PopularCoupon;
