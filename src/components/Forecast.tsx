import type { ForecastProps } from "../interface";

const Forecast: React.FC<ForecastProps> = ({ Icon, date, temp }) => {
  return (
    <div className="forecast">
      <Icon className="icon-forecast" />
      <p>{date}</p>
      <p>{temp}</p>
    </div>
  );
};

export { Forecast };
