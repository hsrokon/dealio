// CouponCard.jsx - Enhanced and integrated CouponCard with live coupon data
import { useContext, useEffect, useRef, useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { SavedContext } from "../../utils/saved";
import { AuthContext } from "../../provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const categoryColors = {
  Electronics: { bg: "bg-secondary", text: "text-base-100" },
  Food: { bg: "bg-primary", text: "text-white" },
  Fashion: { bg: "bg-accent", text: "text-base-content" },
  Beauty: { bg: "bg-neutral", text: "text-white" },
  Travel: { bg: "bg-blue-600", text: "text-base-100" },
  Default: { bg: "bg-gray-100", text: "text-gray-800" }
};

const ROTATION_RANGE = 100.5;
const HALF_ROTATION_RANGE = ROTATION_RANGE / 2;

const CouponCard = ({ coupon }) => {
  const {
    id, title, code, percent_off,
    duration, duration_in_months,
    times_redeemed, valid, category,
    store, expires_on
  } = coupon;
  const color = categoryColors[category] || categoryColors.Default;

  //login user show
  const { user } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const handleSeeCode = () => {
    navigate( '/auth/login', {
      state: location.pathname,
    })
  }

  const [ update, setUpdate ] = useState(false)
  //card saving
  const {saveToLS, getSaved} = useContext(SavedContext);
  const handleSaved = (ids, cat) => {
    saveToLS(ids, cat)
    setUpdate(!update)
  }

  //card save onState logic
  const [ isSaved, setIsSaved ] = useState()
  useEffect(()=>{
    const savedIds =  getSaved(category)
    setIsSaved(savedIds.includes(id))
  },[update])
  

  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const xSpring = useSpring(x, { stiffness: 200, damping: 15 });
  const ySpring = useSpring(y, { stiffness: 200, damping: 15 });
  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;
    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;
    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transformStyle: "preserve-3d", transform }}
      className={`relative h-72 w-60 m-4 rounded-xl shadow-lg transition-all duration-300 ${color.bg} ${color.text}`}
    >
      <div
        style={{ transform: "translateZ(60px)", transformStyle: "preserve-3d" }}
        className="absolute inset-4 flex flex-col justify-between p-4 rounded-xl bg-white text-black shadow-inner"
      >
        <div>
          <h3 className="text-lg font-bold mb-1 h-14">{title}</h3>
          <div  className="flex flex-col items-center">
            <button 
            onClick={()=> handleSaved(id, category)} 
            className="text-2xl text-primary">{isSaved ? <FaHeart/> : <FaRegHeart />}</button>
          </div>
        </div>
        <div className="text-sm space-y-1 mt-1">
          {
            user ? <p><strong>Code:</strong> {code}</p> : <button onClick={handleSeeCode} className="bg-primary text-white font-medium py-2 px-6 rounded transition-all hover:bg-accent hover:text-base-content active:scale-95 w-full translate-z-96">
          Get code</button>
          }
          <p><strong>{percent_off}%</strong> off • {duration} ({duration_in_months} mo)</p>
          <p>Redeemed: {times_redeemed}x</p>
          <p>Valid: {valid ? 'Yes' : 'No'}</p>
          <p>Expires: {expires_on}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default CouponCard;