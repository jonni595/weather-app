import { LuWind } from "react-icons/lu";
import { IoMdCloudOutline } from "react-icons/io";
import { IoRainyOutline, IoSnowOutline } from "react-icons/io5";
import type { ForecastProps } from "./interface";
import { days } from "./functions/getDate";

const getDayName = (index: number, days: string[]) => {
  const dayIndex = (new Date().getDay() + index) % 7;
  return days[dayIndex];
};

const forecastData: ForecastProps[] = [
  { id: 0, Icon: IoMdCloudOutline, temp: "15°C" },
  { id: 1, Icon: IoRainyOutline, temp: "20°C" },
  { id: 2, Icon: IoSnowOutline, temp: "10°C" },
  { id: 3, Icon: LuWind, temp: "10°C" },
];

export const dailyForecast: ForecastProps[] = forecastData.map(
  (item, index) => ({
    ...item,
    date: getDayName(index + 1, days),
  })
);
