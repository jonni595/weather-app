import type { Temp } from "../interface";

const TemperatureDisplay: React.FC<Temp> = ({ temp, Icon, description }) => {
  return (
    <div className="temperature">
      <Icon className="icon" />
      <p className="temp">
        {temp}
        <span className="unit">°C</span>
      </p>
      <p className="description">{description}</p>
    </div>
  );
};

export default TemperatureDisplay;
