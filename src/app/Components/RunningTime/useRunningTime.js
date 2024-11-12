import { useEffect, useState } from "react";

function getCurrentTimeInTimeZone(timezone) {
  const options = {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false, // 24-hour format
    timeZone: timezone,
  };

  return new Intl.DateTimeFormat("en-US", options).format(new Date());
}

const UseRunningTime = (timeZone = "Asia/Manila") => {
  const [currentTime, setCurrentTime] = useState("XX:XX:XX");

  useEffect(() => {
    let interval = setInterval(() => {
      setCurrentTime(getCurrentTimeInTimeZone(timeZone));
    }, 1000);
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [timeZone]);

  return currentTime;
};

export default UseRunningTime;
