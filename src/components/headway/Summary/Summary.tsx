import { data } from "assets/data/data";

import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  summary: {
    padding: "4px 0",
    textAlign: "center",
  },
  container: {
    background: "#FFEDE1",
    padding: "24px 16px 8px 16px",
    border: "1px solid rgba(255, 136, 51, 0.2)",
    borderRadius: 12,
    "& h1": {
      fontWeight: 700,
      lineHeight: "130%",
      fontSize: 40,
      margin: "0 auto 10px",
    },
    "& h2": {
      margin: "0 auto 30px",
      fontSize: 20,
      lineHeight: "150%",
    },
    "& h3": {
      fontSize: 16,
      marginBottom: 5,
      lineHeight: "150%",
    },
    "& h4": {
      display: "inline-block",
      position: "relative",
      fontSize: 16,
      color: "rgba(0, 0, 0, 0.4)",
      paddingBottom: 97,
      marginBottom: 10,
      "&:before": {
        position: "absolute",
        content: '""',
        width: 77,
        height: 2,
        background: "#FF8833",
        top: 70,
        left: 45,
        transform: "rotate(90deg)",
      },
    },
    "& h5": {
      marginBottom: 8,
      fontSize: 16,
    },
    "& p": {
      color: "rgba(0, 0, 0, 0.4)",
      fontSize: 16,
      lineHeight: "150%",
    },
    "& img": {
      marginBottom: 15,
    },
    "& span": {
      display: "block",
      position: "relative",
      margin: "50px auto 50px",
      width: 77,
      height: 2,
      background: "#FF8833",
      transform: "rotate(90deg)",
      "&:before, &:after": {
        position: "absolute",
        content: '""',
        width: 15,
        height: 2,
        background: "#FF8833",
        left: 64,
        borderRadius: 8,
      },
      "&:before": {
        transform: "rotate(-30deg)",
        bottom: -3.6,
      },
      "&:after": {
        transform: "rotate(30deg)",
        bottom: 3.6,
      },
    },
    "@media (max-width: 710px)": {
      "& h1": {
        fontSize: 30,
      },
      "& h2": {
        fontSize: 16,
      },
    },
  },
});

export const Summary = () => {
  const { summary } = data;
  const { title, subTitle, images, text } = summary;

  const classes = useStyles();

  return (
    <div className={classes.summary}>
      <div className={classes.container}>
        <h1>{title}</h1>
        <h2>{subTitle}</h2>
        {images &&
          images
            .map((item) => <img key={item.id} src={item.src} alt={item.alt} />)
            .slice(0, 1)}
        <h3>{text[0].title}</h3>
        <h4>{text[0].subTitle}</h4>
        <h3>{text[1].title}</h3>
        <span />
        {images &&
          images
            .map((item) => <img key={item.id} src={item.src} alt={item.alt} />)
            .slice(1, 2)}
        <h5>{text[2].title}</h5>
        <p>{text[2].subTitle}</p>
      </div>
    </div>
  );
};
