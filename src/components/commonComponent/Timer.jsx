import React, { useEffect, useState } from "react";
import { icons } from "../../helpers/iconProvider";

const Timer = () => {
  const [time, setTime] = useState(5 * 24 * 60 * 60 * 1000);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => {
        if (prev <= 1000) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
      return () => clearInterval(interval);
    });
  }, []);

  const formatDate = (miliSecond) => {
    let totalSeconds = parseInt(Math.floor(miliSecond / 1000));
    let totalMinutes = parseInt(Math.floor(totalSeconds / 60));
    let totalHour = parseInt(Math.floor(totalMinutes / 60));
    let days = parseInt(Math.floor(totalHour / 24));
    let hour = parseInt(Math.floor(totalHour % 60));
    let minutes = parseInt(Math.floor(totalMinutes % 60));
    let seconds = parseInt(Math.floor(totalSeconds % 60));
    return { days, hour, minutes, seconds };
  };
  const { days, hour, minutes, seconds } = formatDate(time);

  const offerTime = [
    {
      id: 1,
      name: "Days",
      date: String(days).padStart(2, "0"),
    },
    {
      id: 2,
      name: "Hour",
      date: String(hour).padStart(2, "0"),
    },
    {
      id: 3,
      name: "Minutes",
      date: String(minutes).padStart(2, "0"),
    },
    {
      id: 4,
      name: "Seconds",
      date: String(seconds).padStart(2, "0"),
    },
  ];
  return (
    <div className="flex gap-x-2">
      {offerTime?.map((item, index) => (
        <div key={item.id} className="flex flex-col">
          <span className="text-xs font-medium">{item.name}</span>
          <div className="flex items-center gap-x-2">
            <span className="font-inter font-bold text-[32px]">
              {item.date}
            </span>
            {offerTime.length - 1 != index && (
              <span className="text-red-db4444 text-base!">
                {icons.threeDot}
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timer;
