import { useState } from "react";
import { IoSunnyOutline, IoRainyOutline, IoSnowOutline } from "react-icons/io5";
import { IoMdCloudOutline } from "react-icons/io";
import { BsCloudHaze } from "react-icons/bs";
import DateStamp from "../components/DateStamp";
import TempDisplay from "../components/TempDisplay";
import { useWeather } from "../hooks/useWeather";
import TempSummary from "../components/TempSummary";
import Forecast from "../components/Forecast";
import Loading from "../components/Loading";
import Location from "../components/Location";
import TimedMessage from "../components/TimedMessage";
import { dailyForecast } from "../data";
import { getLimit } from "../functions/getLimit";

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

  const showIcon = () => {
    let iconForecast;

    if (
      weather?.weather[0].main === "Clouds" ||
      weather?.weather[0].main === "Mist"
    ) {
      iconForecast = IoMdCloudOutline;
    } else if (weather?.weather[0].main === "Rain") {
      iconForecast = IoRainyOutline;
    } else if (weather?.weather[0].main === "Snow") {
      iconForecast = IoSnowOutline;
    } else if (weather?.weather[0].main === "Haze") {
      iconForecast = BsCloudHaze;
    } else {
      iconForecast = IoSunnyOutline;
    }

    return iconForecast;
  };

  const forecast = showIcon();

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <main className="grid">
          <aside className="primary-aside">
            <DateStamp
              city={`${getLimit(weather?.name as string)}, ${
                weather?.sys.country
              }`}
            />
          </aside>
          <aside className="secondary-aside">
            <TempDisplay
              Icon={forecast}
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
