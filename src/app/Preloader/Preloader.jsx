"use client";
import React, { useEffect } from "react";
import { Expo, gsap } from "gsap";
import ScramblingLetter from "../ScramblingLetter/ScramblingLetter";

const Preloader = () => {
  const name = "john carlo carbonel";
  useEffect(() => {
    setTimeout(() => {
      document.body.style.cursor = "default";
      if (typeof window !== "undefined") window.scrollTo(0, 0);
    }, 4100);
    const tl = gsap.timeline({ delay: 4 });
    tl.to("#preloader", {
      height: 0,
      width: 0,
      duration: 1.5,
      ease: Expo.easeOut,
    });
    tl.to("#preloaderParent", { display: "none" });
  }, []);

  return (
    <div
      id="preloaderParent"
      className="fixed w-full h-full flex flex-col justify-center items-center z-50"
    >
      <div
        id="preloader"
        className="absolute flex flex-col justify-center items-center h-[200vw] w-[200vw] rounded-full overflow-hidden bg-orange"
      >
        <div className="font-ibmPlexMono uppercase text-4xl text-customGray flex flex-row">
          {name.split("").map((letter, index) => (
            <ScramblingLetter key={index} letter={letter} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Preloader;
