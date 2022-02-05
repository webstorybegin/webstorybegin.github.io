import { FC } from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "21px 0",
    width: 288,
    background: "#FF8B37",
    textAlign: "center",
    borderRadius: 12,
    color: "#ffffff",
    fontSize: 20,
    fontWeight: 600,
    transition: ".1s linear 0s",
    "&:hover": {
      background: "#FFAC70",
    },
    "&:active": {
      background: "#E87928",
    },
    "@media (max-width: 375px)": {
      maxWidth: "100%",
    },
  },
}));

interface IPrimaryButton {
  readonly text: string;
  readonly start?: boolean;
  readonly setStart: (start: boolean) => void;
}

export const PrimaryButton: FC<IPrimaryButton> = ({
  text,
  start,
  setStart,
}) => {
  const classes = useStyles();

  const restart = () => {
    start === true ? setStart(false) : setStart(true);
  };

  return (
    <>
      <button className={classes.root} onClick={restart}>
        {text}
      </button>
    </>
  );
};
