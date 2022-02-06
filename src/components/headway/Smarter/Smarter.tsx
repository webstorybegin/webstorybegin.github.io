import { data } from "assets/data/data";

import { makeStyles } from "@material-ui/core";

const lightning = require("assets/images/lightning.png");

const useStyles = makeStyles({
  smarter: {
    padding: "4px 0px",
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
      lineHeight: "130%",
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
      lineHeight: "150%",
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
      "&:nth-child(1)": {
        width: 123,
        height: 123,
      },
      "&:nth-child(2)": {
        margin: "-5px 0px 0px -15px",
        width: 104,
        height: 65,
      },
      "&:nth-child(3)": {
        margin: "45px 0px 0px -110px",
        width: 96,
        height: 96,
      },
    },
  },
  fields: {
    margin: "45px auto 35px",
    display: "flex",
    justifyContent: "center",
    position: "relative",
    height: 100,
    "& div": {
      position: "absolute",
      border: "1px solid rgba(0, 102, 255, 0.2)",
      borderRadius: 8,
      background: "#fff",
      "&:nth-child(1)": {
        position: "relative",
        padding: "24px 31px 24px 50px",
        width: 263,
        zIndex: 3,
        "& span": {
          position: "absolute",
          animation: "$lineCenter 2s infinite 0s",
          marginTop: 18,
          left: 50,
          display: "block",
          background: "rgba(0, 102, 255, 0.2)",
          borderRadius: 4,
          width: 188,
          height: 10,
          "&:before, &:after": {
            position: "absolute",
            content: '""',
            left: 0,
            background: "rgba(0, 102, 255, 0.2)",
            borderRadius: 4,
            height: 10,
          },
          "&:before": {
            animation: "$lineBottom 2s infinite .3s",
            width: 172,
            top: 20,
          },
          "&:after": {
            animation: "$lineTop 2s infinite .6s",
            width: 142,
            bottom: 20,
          },
        },
        "&:before": {
          position: "absolute",
          content: '""',
          backgroundImage: `url(${lightning})`,
          left: 20,
          top: 23,
          width: 16,
          height: 24,
        },
      },
      "&:nth-child(2)": {
        width: 225,
        height: 28,
        top: -14,
        zIndex: 2,
      },
      "&:nth-child(3)": {
        width: 188,
        height: 36,
        top: -26,
        zIndex: 1,
      },
    },
  },
  "@keyframes lineCenter": {
    "25%": {
      width: 188,
    },
    "50%": {
      width: 205,
    },
    "100%": {
      width: 188,
    },
  },
  "@keyframes lineBottom": {
    "25%": {
      width: 172,
    },
    "50%": {
      width: 190,
    },
    "100%": {
      width: 172,
    },
  },
  "@keyframes lineTop": {
    "25%": {
      width: 142,
    },
    "50%": {
      width: 175,
    },
    "100%": {
      width: 142,
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
        margin: "-75px -130px 0px -30px",
        width: 87,
        height: 87,
      },
      "&:nth-child(2)": {
        margin: "-48px -20px 0px 0px",
        width: 65,
        height: 65,
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
        "&:nth-child(4)": {
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
          <div>
            <span />
          </div>
          <div />
          <div />
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
