import { useState } from "react";
import { data } from "assets/data/data";

import { Switch } from "components/headway/ui";

import { makeStyles } from "@material-ui/core";
import cn from "classnames";

const useStyles = makeStyles({
  read: {
    padding: "4px 0",
    textAlign: "center",
  },
  container: {
    background: "#ff33331a",
    padding: "24px 16px 0px 16px",
    border: "1px solid #ff33331a",
    borderRadius: 12,
    textAlign: "center",
    "& h1": {
      margin: "0 auto 10px",
      fontSize: 40,
      fontWeight: 700,
      lineHeight: 1.2,
    },
    "& h2": {
      margin: "0 auto 30px",
      fontSize: 20,
      lineHeight: "150%",
    },
    "& img": {
      maxWidth: "100%",
      width: 300,
      height: 304,
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
  images: {
    height: 305,
    marginTop: 25,
    position: "relative",
    "& img": {
      position: "absolute",
      left: "50%",
      bottom: -1,
      transform: "translateX(-50%)",
      transition: ".5s ease 0s",
    },
  },
  active: {
    "& img:last-child": {
      opacity: 0,
    },
  },
});

export const Read = () => {
  const [toggled, setToggled] = useState(true);
  const { read } = data;
  const { title, subTitle, images } = read;

  const classes = useStyles();

  return (
    <div className={classes.read}>
      <div className={classes.container}>
        <h1>{title}</h1>
        <h2>{subTitle}</h2>
        <Switch toggled={toggled} setToggled={setToggled} />
        <div className={cn(classes.images, toggled && classes.active)}>
          <img src={images[0].src} alt={images[0].alt} />
          <img src={images[1].src} alt={images[1].alt} />
        </div>
      </div>
    </div>
  );
};
