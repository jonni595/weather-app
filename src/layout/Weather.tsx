import { IoSunnyOutline } from "react-icons/io5";
import DateStamp from "../components/DateStamp";
import TempDisplay from "../components/TempDisplay";
import { useWeather } from "../hooks/useWeather";
import TempSummary from "../components/TempSummary";
import Forecast from "../components/Forecast";
import { dailyForecast } from "../data";

const Weather = () => {
  const { weather, loading, error } = useWeather("london");

  return (
    <>
      {loading ? (
        <p>Loading...</p>
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
          <footer className="footer">footer</footer>
        </main>
      )}
      {error && <p>{error}</p>}
    </>
  );
};

export default Weather;
