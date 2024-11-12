"use client";

import React from "react";
import Lenis from "@studio-freight/lenis";

const LenisProvider = ({ children }) => {
  const lenis = new Lenis();

  lenis.on("scroll", (e) => {
    // console.log(e);
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
  return <>{children}</>;
};

export default LenisProvider;
