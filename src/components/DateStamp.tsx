import { FaLocationDot } from "react-icons/fa6";
import { getDate } from "../functions/getDate";
import type { DateStampProps } from "../interface";

const DateStamp: React.FC<DateStampProps> = ({ city }) => {
  const { day, formattedDate } = getDate();

  return (
    <>
      <h1>{day}</h1>
      <p>{formattedDate}</p>
      <div className="location">
        <FaLocationDot />
        <p className="city">{city}</p>
      </div>
    </>
  );
};

export default DateStamp;
