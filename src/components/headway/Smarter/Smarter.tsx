import { data } from "assets/data/data";

import { makeStyles } from "@material-ui/core";

const lightning = require("assets/images/lightning.png");

const useStyles = makeStyles({
  smarter: {
    padding: "8px 0px",
    textAlign: "center",
  },
  container: {
    background: "#E6F2E7",
    padding: "24px 16px 8px 16px",
    border: "1px solid rgba(0, 187, 119, 0.4)",
    borderRadius: 12,
    "& h1": {
      fontWeight: 700,
      fontSize: 40,
      lineHeight: 1.2,
      margin: "0 auto 25px",
    },
    "& h2": {
      fontWeight: 700,
      fontSize: 20,
      marginBottom: 20,
    },
    "& p:nth-child(1)": {
      fontSize: 16,
      marginBottom: 70,
    },
    "& p": {
      fontSize: 16,
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
    marginBottom: 10,
    "& img": {
      "&:nth-child(2)": {
        margin: "-15px 0px 0px -30px",
      },
      "&:nth-child(3)": {
        margin: "52px 0px 0px -110px",
      },
    },
  },
  fields: {
    margin: "45px auto 35px",
    position: "relative",
    width: 263,
    height: 98,
    border: "1px solid rgba(0, 102, 255, 0.2)",
    borderRadius: 8,
    background: "#fff",
    "&:before, &:after": {
      position: "absolute",
      content: '""',
      border: "1px solid rgba(0, 102, 255, 0.2)",
      borderRadius: 8,
      background: "#fff",
      left: "50%",
      transform: "translateX(-50%)",
    },
    "&:before": {
      width: 225,
      height: 28,
      top: -12,
      zIndex: 2,
    },
    "&:after": {
      width: 188,
      height: 28,
      top: -22,
      zIndex: 1,
    },
  },
  lines: {
    position: "relative",
    padding: "24px 36px 24px 55px",
    "&:before": {
      position: "absolute",
      content: '""',
      backgroundImage: `url(${lightning})`,
      left: 25,
      top: 30,
      width: 16,
      height: 24,
    },
    "& span": {
      marginTop: 25,
      display: "block",
      background: "rgba(0, 102, 255, 0.2)",
      borderRadius: 4,
      width: 188,
      height: 10,
      "&:before, &:after": {
        position: "absolute",
        content: '""',
        left: 55,
        background: "rgba(0, 102, 255, 0.2)",
        borderRadius: 4,
        height: 10,
      },
      "&:before": {
        width: 172,
        top: 30,
      },
      "&:after": {
        width: 142,
        bottom: 5,
      },
    },
  },
  build: {
    margin: "90px 0px 20px 0px",
    "& > div": {
      position: "relative",
      height: 80,
      background: "#fff",
      border: "1px solid rgba(0, 102, 255, 0.2)",
      borderRadius: 8,
      "&:nth-child(1)": {
        margin: "0 auto 25px",
        width: 260,
        transform: "rotate(2deg)",
        zIndex: 1,
      },
      "&:nth-child(2)": {
        margin: "-105px auto 25px",
        width: 280,
        transform: "rotate(-3deg)",
        zIndex: 2,
      },
    },
  },
  image: {
    "& img": {
      "&:nth-child(1)": {
        margin: "-75px -150px 0px -30px",
      },
      "&:nth-child(2)": {
        margin: "-48px -30px 0px 0px",
      },
    },
    "& ul": {
      display: "flex",
      justifyContent: "center",
      "& li": {
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        color: "#00BB77",
        fontSize: 10,
        width: 26,
        height: 26,
        borderRadius: "50%",
        marginRight: 10,
        border: "1.6px solid",
        borderColor: "rgba(0, 187, 119, 0.2) ",
        transition: ".2s ease 0s",
        "&:nth-child(-n+3)": {
          background: "#00BB77",
          color: "#fff",
        },
        "&:hover": {
          "&:before": {
            position: "absolute",
            content: '""',
            width: "100%",
            height: 1.6,
            background: "#00BB77",
            bottom: -10,
          },
        },
        "&:last-child": {
          marginRight: 0,
        },
      },
    },
  },
});

export const Smarter = () => {
  const { smarter } = data;
  const { title, text, circle, images } = smarter;

  const classes = useStyles();

  return (
    <div className={classes.smarter}>
      <div className={classes.container}>
        <h1>{title}</h1>
        <div className={classes.images}>
          {images &&
            images
              .map((item) => (
                <img key={item.id} src={item.src} alt={item.alt} />
              ))
              .slice(0, 3)}
        </div>
        <h2>{text[0].title}</h2>
        <p>{text[0].subTitle}</p>
        <div className={classes.fields}>
          <div className={classes.lines}>
            <span />
          </div>
        </div>
        <h2>{text[1].title}</h2>
        <p>{text[0].subTitle}</p>
        <div className={classes.build}>
          <div />
          <div className={classes.image}>
            {images &&
              images
                .map((item) => (
                  <img key={item.id} src={item.src} alt={item.alt} />
                ))
                .slice(3, images.length)}
            <ul>
              {circle &&
                circle.map((item) => <li key={item.id}>{item.text}</li>)}
            </ul>
          </div>
        </div>
        <h2>{text[2].title}</h2>
        <p>{text[2].subTitle}</p>
      </div>
    </div>
  );
};
