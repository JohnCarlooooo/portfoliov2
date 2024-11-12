"use client";
import useRunningTime from "./useRunningTime";

const RunningTime = () => {
  const time = useRunningTime();
  return <span>{time}</span>;
};

export default RunningTime;
