import { useEffect, useState } from "react";
import type { TimedMessageProps } from "../interface";

const TimedMessage: React.FC<TimedMessageProps> = ({ message }) => {
  const [isError, setIsError] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsError(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    isError && (
      <div className="timed-message">
        <p className="error">{message}</p>
      </div>
    )
  );
};

export { TimedMessage };
