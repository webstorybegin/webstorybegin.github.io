import { FC } from "react";
import { data } from "assets/data/data";
import { Helmet } from 'react-helmet';

import { PrimaryButton } from "components/millionaire/ui";

import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "0 10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "& img": {
      marginRight: 30,
      maxWidth: "100%",
    },
    [theme.breakpoints.down("md")]: {
      flexWrap: "wrap",
      justifyContent: "center",
      textAlign: "center",
      "& img": {
        marginBottom: 42,
        marginRight: 0,
        maxWidth: "75%",
      },
    },
  },
  rootItem: {
    width: "50%",
    "@media (max-width: 600px)": {
      width: "100%",
    },
  },
  mainTitle: {
    fontSize: 56,
    fontWeight: 600,
    color: "#1C1C21",
    lineHeight: "116%",
    marginBottom: 65,
    [theme.breakpoints.down("sm")]: {
      fontSize: 32,
    },
  },
}));

interface IStartPage {
  readonly setStart: (setStart: boolean) => void;
}

export const StartPage: FC<IStartPage> = ({ setStart }) => {
  const { mainImage, start } = data;
  const { src, alt } = mainImage;
  const { title, buttonText } = start;

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Helmet>
        <meta 
          name="game"
          content="this page - game"
        />
        <title>Millionaire game</title>
      </Helmet>
      <img src={src} alt={alt} />
      <div className={classes.rootItem}>
        <h1 className={classes.mainTitle}>{title}</h1>
        <PrimaryButton setStart={setStart} text={buttonText} />
      </div>
    </div>
  );
};
