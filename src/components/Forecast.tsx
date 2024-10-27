import { getLimit } from "../functions/getLimit";
import type { ForecastProps } from "../interface";

const Forecast: React.FC<ForecastProps> = ({ Icon, date, temp }) => {
  return (
    <div className="forecast">
      <Icon className="icon-forecast" />
      <p>{getLimit(date)}</p>
      <p>{temp}</p>
    </div>
  );
};

export default Forecast;
