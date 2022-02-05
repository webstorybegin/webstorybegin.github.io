import { data } from "assets/data/data";

import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  determine: {
    padding: "8px 0",
    textAlign: "center",
  },
  container: {
    background: "#7a00da1a",
    padding: "24px 16px 8px 16px",
    border: "1px solid #7a00da1a",
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
      lineHeight: 1.2,
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
  categories: {
    display: "grid",
    justifyContent: "center",
    gridTemplateColumns: "repeat(6, max-content)",
    gridGap: 8,
    marginBottom: 24,
    "@media (max-width: 910px)": {
      gridTemplateColumns: "repeat(auto-fill, 186px)",
    },
  },
  card: {
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#fff",
    borderRadius: 8,
    color: "#000",
    padding: "10px 8px",
  },
  books: {
    display: "grid",
    justifyContent: "center",
    gridTemplateColumns: "repeat(6, max-content)",
    gridGap: 12,
    "@media (max-width: 525px)": {
      gridTemplateColumns: "repeat(auto-fill, 72px)",
    },
  },
});

export const Determine = () => {
  const { determine } = data;
  const { title, subTitle, catigories, books } = determine;

  const classes = useStyles();

  return (
    <div className={classes.determine}>
      <div className={classes.container}>
        <h1>{title}</h1>
        <h2>{subTitle}</h2>
        <div className={classes.categories}>
          {catigories &&
            catigories.map((item) => (
              <div key={item.id} className={classes.card}>
                <img
                  style={{ marginRight: 10 }}
                  src={item.src}
                  alt={item.alt}
                />
                {item.text}
              </div>
            ))}
        </div>
        <div className={classes.books}>
          {books &&
            books.map((item) => (
              <img key={item.id} src={item.src} alt={item.alt} />
            ))}
        </div>
      </div>
    </div>
  );
};
