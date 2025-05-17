import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

const SpotlightButton = () => {
  return (
    <div className="flex items-center justify-center px-4">
      <SpotlightButtonFun />
    </div>
  );
};

const SpotlightButtonFun = () => {
  const btnRef = useRef(null);
  const spanRef = useRef(null);

 useEffect(() => {
  const btn = btnRef.current;
  const span = spanRef.current;

  if (!btn || !span) return; // <-- ⛑ prevent crash

  const handleMouseMove = (e) => {
    const { width } = e.target.getBoundingClientRect();
    const offset = e.offsetX;
    const left = `${(offset / width) * 100}%`;
    span.animate({ left }, { duration: 250, fill: "forwards" });
  };

  const handleMouseLeave = () => {
    span.animate({ left: "50%" }, { duration: 100, fill: "forwards" });
  };

  btn.addEventListener("mousemove", handleMouseMove);
  btn.addEventListener("mouseleave", handleMouseLeave);

  return () => {
    btn.removeEventListener("mousemove", handleMouseMove);
    btn.removeEventListener("mouseleave", handleMouseLeave);
  };
}, []);


  return (
    <motion.button
      whileTap={{ scale: 0.985 }}
      ref={btnRef}
      className="relative w-full max-w-xs overflow-hidden rounded-lg bg-slate-950 px-4 py-3 lg:text-lg font-medium text-white"
    >
      <span className="pointer-events-none relative z-10 mix-blend-difference">
        Get the code
      </span>
      <span
        ref={spanRef}
        className="pointer-events-none absolute left-[50%] top-[50%] h-32 w-32 -translate-x-[50%] -translate-y-[50%] rounded-full bg-slate-100"
      />
    </motion.button>
  );
};

export default SpotlightButton;