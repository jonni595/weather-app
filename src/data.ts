import { LuWind } from "react-icons/lu";
import { IoMdCloudOutline } from "react-icons/io";
import { IoRainyOutline, IoSnowOutline } from "react-icons/io5";
import type { ForecastProps } from "./interface";

export const dailyForecast: ForecastProps[] = [
  {
    id: 0,
    Icon: IoMdCloudOutline,
    date: "Saturday",
    temp: "15°C",
  },
  {
    id: 1,
    Icon: IoRainyOutline,
    date: "Sunday",
    temp: "20°C",
  },
  {
    id: 2,
    Icon: IoSnowOutline,
    date: "Monday",
    temp: "10°C",
  },
  {
    id: 3,
    Icon: LuWind,
    date: "Tuesday",
    temp: "10°C",
  },
];
