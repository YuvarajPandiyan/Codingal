import React, { useEffect, useState } from "react";
export interface Props {
  time: { minutes: number; seconds: number };
}
export const Timer: React.FC<Props> = ({ time }) => {
  const { minutes, seconds } = time;
  const [[mint, sec], setTime] = useState([minutes, seconds]);
  const countDown = () => {
    if (sec !== 0) {
      setTime([mint, sec - 1]);
    } else if (sec === 0) {
      setTime([mint - 1, 59]);
    }
  };

  useEffect(() => {
    const countDownInterWell = setInterval(() => countDown(), 1000);
    if(mint === 0 && sec === 0){
      clearInterval(countDownInterWell);
    }
    return () => clearInterval(countDownInterWell);
  });
  return (
    <div className="py-2 text-2xl">
      {`${mint.toString().padStart(2, "0")}`} :{" "}
      {`${sec.toString().padStart(2, "0")}`}
    </div>
  );
};
