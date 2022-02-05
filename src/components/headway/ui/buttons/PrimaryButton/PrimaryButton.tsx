import { data } from "assets/data/data";

import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  button: {
    width: 336,
    padding: "20px 0",
    background: "#0066FF",
    textAlign: "center",
    color: "#fff",
    fontSize: 16,
    fontWeight: 600,
    borderRadius: 8,
    transition: ".1s linear 0s",
    "&:hover": {
      background: "#327ef0",
    },
    "&:active": {
      background: "#154ea3",
    },
    "@media (max-width: 375px)": {
      width: "100%",
    },
  },
});

export const PrimaryButton = () => {
  const { become } = data;
  const { buttonText } = become;

  const classes = useStyles();

  return <button className={classes.button}>{buttonText}</button>;
};
