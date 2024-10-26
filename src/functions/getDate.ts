const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export const getDate = () => {
  const date = new Date();
  const day = days[date.getDay()];
  const options: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  const formattedDate = date.toLocaleDateString("en-US", options);

  return { day, formattedDate };
};
