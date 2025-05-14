import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { GoArrowUpRight } from "react-icons/go";

const ShuffleHero = () => {
  return (
    <section className="w-full px-8 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto">
      <div>
        <span className="block mb-4 text-xs md:text-sm text-primary font-medium">
          Better coupons day
        </span>
        <h3 className="text-4xl md:text-6xl font-semibold">
            Find the best deals for you
        </h3>
        <p className="text-base md:text-lg text-slate-700 my-4 md:my-6">
          Discover and collect coupons to save on your favorite store
        </p>
        <button className="bg-primary text-white font-medium py-2 px-6 rounded transition-all hover:bg-accent hover:text-base-content active:scale-95
        flex items-center gap-2">
          Browse coupons <GoArrowUpRight/>
        </button>
      </div>
      <ShuffleGrid />
    </section>
  );
};

const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const squareData = [
  {
    id: 1,
    src: "https://images.pexels.com/photos/7319294/pexels-photo-7319294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 2,
    src: "https://images.pexels.com/photos/11112046/pexels-photo-11112046.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 3,
    src: "https://images.pexels.com/photos/7987589/pexels-photo-7987589.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    id: 4,
    src: "https://images.pexels.com/photos/30742316/pexels-photo-30742316/free-photo-of-vibrant-50-percent-off-sale-promotion-image.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 5,
    src: "https://images.pexels.com/photos/2988232/pexels-photo-2988232.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 6,
    src: "https://images.pexels.com/photos/2002717/pexels-photo-2002717.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 7,
    src: "https://images.pexels.com/photos/95425/pexels-photo-95425.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 8,
    src: "https://images.pexels.com/photos/6214450/pexels-photo-6214450.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 9,
    src: "https://images.pexels.com/photos/5872182/pexels-photo-5872182.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 10,
    src: "https://images.pexels.com/photos/5926462/pexels-photo-5926462.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 11,
    src: "https://images.pexels.com/photos/7987591/pexels-photo-7987591.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 12,
    src: "https://images.pexels.com/photos/31995174/pexels-photo-31995174/free-photo-of-white-t-shirts-displayed-in-botanical-setting.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 13,
    src: "https://images.pexels.com/photos/5490778/pexels-photo-5490778.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 14,
    src: "https://images.pexels.com/photos/3664342/pexels-photo-3664342.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 15,
    src: "https://images.pexels.com/photos/18462106/pexels-photo-18462106/free-photo-of-paper-shopping-bag-in-man-hand.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 16,
    src: "https://images.pexels.com/photos/7620861/pexels-photo-7620861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
      }}
    ></motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();

    return () => clearTimeout(timeoutRef.current);
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1">
      {squares.map((sq) => sq)}
    </div>
  );
};

export default ShuffleHero;