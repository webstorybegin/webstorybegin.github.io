import { useEffect, useRef } from "react";
import { data } from "assets/data/data";

import lottie from "lottie-web";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  become: {
    padding: "4px 0px",
    textAlign: "center",
    justifyContent: "center",
  },
  container: {
    background: "#fff",
    padding: "24px 16px 0px 16px",
    border: "1px solid rgba(0, 0, 0, 0.1)",
    borderRadius: 12,
    "& h1": {
      fontWeight: 700,
      fontSize: 40,
      marginBottom: 10,
    },
    "& h2": {
      fontSize: 20,
    },
    "& img": {
      marginTop: 15,
      marginBottom: -13,
      maxWidth: "100%",
      width: 327,
      height: 315,
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
  timeLine: {
    display: "inline-block",
    width: 300,
    height: 300,
    margin: "15px 50px 0px 0px",
    "& svg:not(:nth-child(1))": {
      display: "none",
    },
    "@media (max-width: 710px)": {
      display: "block",
      margin: "0 auto",
    },
  },
  button: {
    margin: "15px 0px",
  },
});

export const Become = () => {
  const container = useRef(null);
  const { become } = data;
  const { title, subTitle, image } = become;
  const { src, alt } = image;

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("assets/animations/timeline.json"),
    });
  }, []);

  const classes = useStyles();

  return (
    <div className={classes.become}>
      <div className={classes.container}>
        <h1>{title}</h1>
        <h2>{subTitle}</h2>
        <div className={classes.timeLine} ref={container} />
        <img src={src} alt={alt} />
        <div className={classes.button}></div>
      </div>
    </div>
  );
};
