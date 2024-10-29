import type { TempSummary } from "../interface";

const TempSummary: React.FC<TempSummary> = ({ pressure, humidity, wind }) => {
  return (
    <div className="temp-summary">
      <div className="pressure">
        <p>Pressure </p>
        <span>{pressure}</span>
      </div>
      <div className="humidity">
        <p>Humidity </p>
        <span>{humidity} %</span>
      </div>
      <div className="wind">
        <p>Wind Speed </p>
        <span>{wind} km/h</span>
      </div>
    </div>
  );
};

export { TempSummary };
