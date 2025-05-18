import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, Copy } from "lucide-react";

const CopyCouponCode = ({ code }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);

    // Reset after 2s
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative w-full group translate-z-96">
      <div className="flex items-center justify-between bg-white border border-primary text-primary px-4 py-1 lg:py-2 rounded-lg font-mono font-semibold">
        <span>{code}</span>

        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={handleCopy}
          className="ml-2 p-1 text-primary hover:text-accent transition"
        >
          {copied ? (
            <motion.div
              key="check"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={{ duration: 0.3 }}
            >
              <CheckCircle className="w-5 h-5 text-green-500" />
            </motion.div>
          ) : (
            <Copy className="w-5 h-5" />
          )}
        </motion.button>
      </div>

      <AnimatePresence>
        {copied && (
          <motion.div
            key="toast"
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.3 }}
            className="absolute top-1/2 left-[60%] transform -translate-x-1/2 -translate-y-1/2 text-sm text-green-600"
          >
            Copied!
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CopyCouponCode;