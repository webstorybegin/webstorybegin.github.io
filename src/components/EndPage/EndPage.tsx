import { FC } from "react";
import { PrimaryButton } from "components/ui/buttons/PrimaryButton/PrimaryButton";
import { data } from "assets/data/data";

import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  root: {
    padding: "0 10px",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    background: "#F5F5F7",
    height: "100vh",
    "& img": {
      maxWidth: "100%",
      "@media (max-width: 860px)": {
        maxWidth: "75%",
      },
    },
  },
  rootItem: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
  result: {
    textAlign: "center",
    "@media (max-width: 740px)": {
      textAlign: "center",
    },
  },
  mainTitle: {
    fontSize: 32,
    fontWeight: 600,
    color: "#1C1C21",
    opacity: 0.5,
    marginBottom: 20,
    "@media (max-width: 740px)": {
      fontSize: 18,
    },
  },
  earned: {
    fontSize: 56,
    fontWeight: 600,
    color: "#1C1C21",
    marginBottom: 60,
    "@media (max-width: 740px)": {
      fontSize: 32,
    },
  },
});

interface IEndPage {
  readonly start: boolean;
  readonly setStart: () => void;
  readonly earned: string;
}

export const EndPage: FC<IEndPage> = ({ start, setStart, earned }) => {
  const { mainImage, result } = data;
  const { src, alt } = mainImage;
  const { title, buttonText } = result;

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.rootItem}>
        <img src={src} alt={alt} />
        <div className={classes.result}>
          <p className={classes.mainTitle}>{title}</p>
          <p className={classes.earned}>{earned} earned</p>
          <PrimaryButton start={start} setStart={setStart} text={buttonText} />
        </div>
      </div>
    </div>
  );
};
