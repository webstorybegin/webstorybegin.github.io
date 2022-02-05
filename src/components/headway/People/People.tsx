import { data } from "assets/data/data";

import { RatingStars } from "components/headway/ui";

import { makeStyles } from "@material-ui/core";
const instagram = require("assets/images/instagram.png");

const useStyles = makeStyles({
  people: {
    padding: "8px 0",
    textAlign: "center",
  },
  container: {
    background: "#E6E9F5",
    padding: "24px 16px 8px 16px",
    border: "1px solid rgba(0, 102, 255, 0.2)",
    borderRadius: 12,
    "& h1": {
      fontWeight: 700,
      lineHeight: 1.2,
      fontSize: 40,
      margin: "0 auto 10px",
    },
    "& h2": {
      margin: "0 auto 30px",
      fontSize: 20,
      lineHeight: 1.2,
    },
    "& a": {
      color: "#0066FF",
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
  containerReview: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  review: {
    display: "flex",
    flexDirection: "column",
    width: 336,
    textAlign: "left",
    border: "1px solid rgba(0, 0, 0, 0.1)",
    background: "#fff",
    borderRadius: 12,
    padding: 12,
    marginRight: 12,
    marginBottom: 16,
    lineHeight: "146%",
    "& p": {
      marginBottom: 12,
    },
  },
  social: {
    display: "flex",
    alignItems: "center",
    marginTop: "auto",
    "& img": {
      marginRight: 8,
    },
    "& span": {
      position: "relative",
      paddingRight: 18,
      opacity: 0.4,
      "&::after": {
        position: "absolute",
        display: "block",
        content: "''",
        width: 14,
        height: 14,
        right: 0,
        top: 3,
        background: `url(${instagram}) no-repeat center/contain`,
      },
    },
  },
  containerEvaluation: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
  evaluation: {
    minWidth: 200,
    padding: "37px 0px",
    textAlign: "left",
    background: "#fff",
    marginRight: 12,
    marginBottom: 12,
    border: "1px solid rgba(0, 0, 0, 0.1)",
    borderRadius: 12,
    "&:first-child": {
      color: "#0066FF",
    },
    "&:last-child": {
      color: "#00BB77",
    },
    "& span": {
      fontSize: 28,
      marginRight: 10,
    },
    "& p": {
      textAlign: "center",

      opacity: 0.4,
      color: "#000",
      fontSize: 14,
    },
  },
  rating: {
    marginLeft: "50%",
    transform: "translateX(-50%)",
  },
  ratingStars: {
    marginLeft: "47%",
    transform: "translateX(-47%)",
  },
});

export const People = () => {
  const { people } = data;
  const { title, subTitle, link, review, evaluation } = people;

  const classes = useStyles();

  return (
    <div className={classes.people}>
      <div className={classes.container}>
        <h1>{title}</h1>
        <h2>
          {subTitle}
          <a href="*" target="_blank">
            {" "}
            {link}
          </a>
        </h2>
        <div className={classes.containerReview}>
          {review &&
            review.map((item) => (
              <div key={item.id} className={classes.review}>
                <RatingStars />
                <p>{item.text}</p>
                <div className={classes.social}>
                  <img src={item.src} alt={item.alt} />
                  <span>{item.name}</span>
                </div>
              </div>
            ))}
        </div>
        <div className={classes.containerEvaluation}>
          {evaluation &&
            evaluation.map((item) => (
              <div key={item.id} className={classes.evaluation}>
                <div className={classes.rating}>
                  <span>{item.number}</span>
                  <img src={item.src} alt={item.alt} />
                </div>
                <div className={classes.ratingStars}>
                  <RatingStars />
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
