import { useEffect, useState } from "react";
import Button from "../../commonComponent/Button";

const Experience = ({ timeOfOffer }) => {
  const [time, setTime] = useState(timeOfOffer * 24 * 60 * 60 * 1000 || 0);

  useEffect(() => {
    const worker = new Worker(
      new URL("../../../../CountdownTwo.js", import.meta.url)
    );
    worker.postMessage(time);
    worker.onmessage = (e) => {
      setTime(e.data);
    };
    return () => {
      worker.terminate();
    };
  }, []);

  const formatDate = (miliSecond) => {
    let totalSeconds = parseInt(Math.floor(miliSecond / 1000));
    let totalMinutes = parseInt(Math.floor(totalSeconds / 60));
    let totalHour = parseInt(Math.floor(totalMinutes / 60));
    let days = parseInt(Math.floor(totalHour / 24));
    let hour = parseInt(Math.floor(totalHour % 24));
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
    <div>
      <div className="bg-[url(/banner-2.png)] h-[500px] px-[56px]! py-[69px]!">
        <div className="max-w-[443px]">
          <h3 className="text-button-00ff66 text-base font-semibold font-poppins">
            Categories
          </h3>
          <h2 className="text-[48px] font-inter font-semibold text-white-ffffff leading-[60px] mt-8!">
            Enhance Your Music Experience
          </h2>
          <div className="timer mt-8! flex gap-x-6">
            {offerTime?.map((time) => (
              <div
                key={time?.id}
                className="w-[64px] h-[64px] rounded-full bg-white-ffffff text-text-black-000000 font-poppins flex flex-col items-center justify-center"
              >
                <p className="text-text-black-000000 text-[16px] font-semibold font-poppins">
                  {time?.date}
                </p>
                <p className="text-text-black-000000 text-[11px] font-normal font-poppins">
                  {time?.name}
                </p>
              </div>
            ))}
          </div>
          <Button
            className="bg-button-00ff66! text-white-ffffff mt-10!"
            btnText={"Buy Now"}
          />
        </div>
      </div>
    </div>
  );
};

export default Experience;
