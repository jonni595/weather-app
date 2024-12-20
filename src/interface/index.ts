import { IconType } from "react-icons";

export interface DateStampProps {
  city: string | undefined;
}

export interface IWeather {
  base: string;
  clouds: Clouds;
  cod: number;
  coord: Coord;
  dt: number;
  id: number;
  main: Main;
  name: string;
  sys: Sys;
  timezone: number;
  visibility: number;
  weather: Weather[];
  wind: Wind;
}

export interface Clouds {
  all: number;
}

export interface Coord {
  lat: number;
  lon: number;
}

export interface Main {
  feels_like: number;
  grnd_level: number;
  humidity: number;
  pressure: number;
  sea_level: number;
  temp: number;
  temp_max: number;
  temp_min: number;
}

export interface Sys {
  country: string;
  id: number;
  sunrise: number;
  sunset: number;
  type: number;
}

export interface Weather {
  description: string;
  icon: string;
  id: number;
  main: string;
}

export interface Wind {
  deg: number;
  speed: number;
}

export interface Temp {
  Icon: IconType;
  temp: number | string | undefined;
  description: string | undefined;
}

export interface TempSummary {
  pressure: number | undefined;
  humidity: number | undefined;
  wind: number | undefined;
}

export interface ForecastProps {
  id: number;
  Icon: IconType;
  temp: string;
  date?: string;
}

export interface ButtonProps {
  search: string;
  onSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSearchClick: () => void;
}

export interface TimedMessageProps {
  message: string;
}
