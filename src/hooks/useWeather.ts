import { useEffect, useState } from "react";
import type { IWeather } from "../interface";

export const useWeather = (initialLocation: string) => {
  const [weather, setWeather] = useState<IWeather | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [location, setLocation] = useState<string>(initialLocation);

  const API_KEY = import.meta.env.VITE_API_KEY;

  const getWeather = async (city: string) => {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
      );
      if (!res.ok) {
        throw new Error("Failed to fetch weather data");
      }
      const data = await res.json();
      setWeather(data);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      getWeather(location);
    }, 2000);

    return () => clearTimeout(timer);
  }, [location]);

  return {
    weather,
    error,
    loading,
    setLocation,
  };
};
