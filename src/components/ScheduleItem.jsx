import React from "react";
import { BiTimeFive } from "react-icons/bi";
import { PiTelevisionSimpleLight } from "react-icons/pi";
import { MdOutlinePlace } from "react-icons/md";

const ScheduleItem = ({ fight, index }) => {
  return (
    <div
      className="flex flex-col gap-4 bg-white rounded shadow-md p-6 mb-4"
      key={index}
    >
      <div className="flex justify-center bg-blue-900 items-center gap-4 text-gray-100 text-lg font-bold rounded-sm">
        <p className="font-bold">{fight.fightDay}</p>
        <p className="font-bold">{fight.fightDate}</p>
      </div>
      <p className="text-2xl text-red-900 font-bold text-center">
        {fight.fightTitle.replace("vs", "-")}
      </p>
      <ul className="list-none pl-8">
        {fight.scheduleDetails.map((detail, index) => (
          <li
            className="flex justify-start items-center gap-4 italic"
            key={index}
          >
            {index === 0 && <BiTimeFive />} {/* First icon */}
            {index === 1 && <PiTelevisionSimpleLight />} {/* Second icon */}
            {index === 2 && <MdOutlinePlace />} {/* Third icon */}
            {detail}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ScheduleItem;
