import { FC } from "react";
import { useState, useEffect } from "react";

import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  timer: {
    position: "absolute",
    top: 350,
    fontSize: 17,
    padding: "10px 20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "1px solid #D0D0D8",
    background: "#F5F5F7",
    pointerEvents: "none",
    "@media (max-width: 768px)": {
      left: "50%",
      transform: "translateX(-50%)",
      top: 120,
    },
  },
});

interface ITimer {
  readonly setStop: (setStop: boolean) => void;
  readonly questionNumber: number;
}

export const Timer: FC<ITimer> = ({ setStop, questionNumber }) => {
  const [time, setTime] = useState(600);

  useEffect(() => {
    if (time === 0) return setStop(true);
    const interval = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [setStop, time]);

  useEffect(() => {
    setTime(600);
  }, [questionNumber]);

  const classes = useStyles();

  return <div className={classes.timer}>{time}</div>;
};
