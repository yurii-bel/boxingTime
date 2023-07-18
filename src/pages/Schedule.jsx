import React, { useState, useEffect } from "react";
import ScheduleItem from "../components/ScheduleItem";
import scraperData from "../data/scraperData.json";

const Schedule = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(scraperData);
  }, []);

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-2">
      <h1 className="text-4xl text-center mb-6 md:text-start">Schedule</h1>
      {data.map((fight, index) => (
        <ScheduleItem fight={fight} index={index} />
      ))}
    </div>
  );
};

export default Schedule;
