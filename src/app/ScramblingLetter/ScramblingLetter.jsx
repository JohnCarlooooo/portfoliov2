"use client";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const letters = " abcdefghijklmnopqrstuvwxyz";

const ScramblingLetter = ({ letter }) => {
  const [curIndex, setCurIndex] = useState(0);
  useEffect(() => {
    let timeout = null;
    if (letter.toLowerCase() !== letters[curIndex])
      timeout = setTimeout(() => {
        if (curIndex === letters.length - 1) setCurIndex(0);
        else setCurIndex(curIndex + 1);
      }, 200);
    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [curIndex, letter]);
  return (
    <AnimatePresence mode="sync">
      <motion.div className="overflow-y-hidden w-8 flex justify-center items-center">
        <motion.span
          initial={{ y: "-100%" }}
          animate={{
            y: 0,
          }}
          exit={{
            y: "100%",
          }}
          key={letters[curIndex]}
        >
          {letters[curIndex]}
        </motion.span>
      </motion.div>
    </AnimatePresence>
  );
};

export default ScramblingLetter;
