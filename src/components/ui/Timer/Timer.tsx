import { FC } from "react";
import { useState, useEffect } from "react";
import useSound from "use-sound";

import wrong from 'assets/sounds/wrong.mp3'
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
  const [time, setTime] = useState(30);
  const [wrongAnswer] = useSound(wrong);

  useEffect(() => {
    if (time === 0) {
      wrongAnswer();
      setStop(true);
    };
    const interval = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [setStop, time]);

  useEffect(() => {
    setTime(30);
  }, [questionNumber]);

  const classes = useStyles();

  return <div className={classes.timer}>{time}</div>;
};
