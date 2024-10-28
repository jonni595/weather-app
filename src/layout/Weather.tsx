import { IoSunnyOutline } from "react-icons/io5";
import DateStamp from "../components/DateStamp";
import TempDisplay from "../components/TempDisplay";
import { useWeather } from "../hooks/useWeather";
import TempSummary from "../components/TempSummary";
import Forecast from "../components/Forecast";
import { dailyForecast } from "../data";
import Loading from "../components/Loading";
import Location from "../components/Location";
import { useState } from "react";
import TimedMessage from "../components/TimedMessage";

const Weather = () => {
  const [city, setCity] = useState("");
  const { weather, loading, error, setLocation } = useWeather("london");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };

  const handleSearchSubmit = () => {
    if (!city) return;
    setLocation(city);
    setCity("");
  };
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <main className="grid">
          <aside className="primary-aside">
            <DateStamp city={`${weather?.name}, ${weather?.sys.country}`} />
          </aside>
          <aside className="secondary-aside">
            <TempDisplay
              Icon={IoSunnyOutline}
              temp={
                weather?.main.temp && Math.round(weather?.main.temp - 273.15)
              }
              description={weather?.weather[0].description}
            />
          </aside>
          <section className="primary-section">
            <TempSummary
              pressure={weather?.main.pressure}
              humidity={weather?.main.humidity}
              wind={weather?.wind.speed}
            />
          </section>
          <section className="secondary-section">
            {dailyForecast.map((forecast) => (
              <Forecast {...forecast} key={forecast.id} />
            ))}
          </section>
          <footer className="footer">
            <Location
              search={city}
              onSearch={handleSearch}
              onSearchClick={handleSearchSubmit}
            />
          </footer>
        </main>
      )}
      {error && <TimedMessage message={error} />}
    </>
  );
};

export default Weather;
