"use client";

import UseRunningTime from "@/app/Hooks/UseRunningTime";

const RunningTime = () => {
  const time = UseRunningTime();
  return <span>{time}</span>;
};

export default RunningTime;
