import type { Temp } from "../interface";

const TemperatureDisplay: React.FC<Temp> = ({ temp, Icon, description }) => {
  return (
    <>
      <Icon className="icon" />
      <p className="temp">{temp}</p>
      <p className="description">{description}</p>
    </>
  );
};

export default TemperatureDisplay;
