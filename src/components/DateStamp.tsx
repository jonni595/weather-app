import { getDate } from "../functions/getDate";
import { DateStampProps } from "../interface";

const DateStamp: React.FC<DateStampProps> = ({ city }) => {
  const { day, formattedDate } = getDate();

  return (
    <>
      <h1>{day}</h1>
      <p>{formattedDate}</p>
      <p className="city">{city}</p>
    </>
  );
};

export default DateStamp;
