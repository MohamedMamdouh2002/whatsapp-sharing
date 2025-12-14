import type { CardProps } from "./types";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
function MainCard({
  children,
  cardClassName,
  moreDetails,
  bodyCardClassName,
  moreDetailsClassName,
  title,
  titleClassName,
}: CardProps) {
  return (
    <>
      <div className="my-10">
        <div
          className={`h-16 bg-[var(--color-primary)] dark:bg-[#404040] flex justify-between items-center sm:px-9 px-6 text-white rounded-t-lg  ${cardClassName}`}
        >
          <div className="flex items-center gap-1">
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <Star className="text-white  w-6 h-6" />
            </motion.div>
            <h2 className={` font-semibold text-lg ${titleClassName}`}>
              {title}
            </h2>
          </div>
          <div className={`${moreDetailsClassName} sm:flex hidden`}>
            {moreDetails}
          </div>
        </div>
        <div
          className={`bg-white  dark:bg-[var(--color-bgDark)] text-[var(--color-black)] shadow-md rounded-b-lg dark:text-white font-medium    sm:px-9 px-6 ${bodyCardClassName}`}
        >
          {children}
        </div>
      </div>
    </>
  );
}

export default MainCard;
