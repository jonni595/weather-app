import { IoSunnyOutline } from "react-icons/io5";
import DateStamp from "../components/DateStamp";
import TemperatureDisplay from "../components/TemperatureDisplay";
import { useWeather } from "../hooks/useWeather";

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
            <TemperatureDisplay
              Icon={IoSunnyOutline}
              temp={
                weather?.main.temp && Math.round(weather?.main.temp - 273.15)
              }
              description={weather?.weather[0].description}
            />
          </aside>
          <section className="primary-section">section 1</section>
          <section className="secondary-section">section 2</section>
          <footer className="footer">footer</footer>
        </main>
      )}
      {error && <p>{error}</p>}
    </>
  );
};

export default Weather;
