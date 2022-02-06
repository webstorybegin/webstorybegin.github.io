import { FC } from "react";
import { data } from "assets/data/data";

import cn from "classnames";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  books: {
    display: "flex",
    flexDirection: "column",
    gridGap: 12,
    background: "transparent",
    height: 384,
    "& img": {
      position: "relative",
      transition: ".1s ease 0s",
      width: 80,
      height: 120,
      filter: "grayscale(100%)",
    },
    "& > div": {
      display: "grid",
      justifyContent: "center",
      gridGap: 12,
      overflowX: "auto",
      "@media (max-width: 500px)": {
        justifyContent: "start",
      },
    },
  },
  lineTop: {
    gridTemplateColumns: "repeat(6, max-content)",
  },
  lineCenter: {
    gridTemplateColumns: "repeat(7, max-content)",
  },
  lineBottom: {
    gridTemplateColumns: "repeat(6, max-content)",
  },
  selectedBook: {
    "& img": {
      filter: "none",
    },
  },
});

interface IBooks {
  readonly selectedCategory: string;
}

export const Books: FC<IBooks> = ({ selectedCategory }) => {
  const { determine } = data;
  const { books } = determine;
  const classes = useStyles();

  return (
    <div className={classes.books}>
      <div className={classes.lineTop}>
        {books &&
          books
            .map((item) => (
              <div
                key={item.id}
                className={cn(
                  (selectedCategory === item.category ||
                    selectedCategory.length === 0) &&
                    classes.selectedBook,
                  selectedCategory === "All categories" && classes.selectedBook
                )}
              >
                <img src={item.src} alt={item.alt} />
              </div>
            ))
            .slice(0, 5)}
      </div>
      <div className={classes.lineCenter}>
        {books &&
          books
            .map((item) => (
              <div
                key={item.id}
                className={cn(
                  (selectedCategory === item.category ||
                    selectedCategory.length === 0) &&
                    classes.selectedBook,
                  selectedCategory === "All categories" && classes.selectedBook
                )}
              >
                <img src={item.src} alt={item.alt} />
              </div>
            ))
            .slice(5, 11)}
      </div>
      <div className={classes.lineBottom}>
        {books &&
          books
            .map((item) => (
              <div
                key={item.id}
                className={cn(
                  (selectedCategory === item.category ||
                    selectedCategory.length === 0) &&
                    classes.selectedBook,
                  selectedCategory === "All categories" && classes.selectedBook
                )}
              >
                <img src={item.src} alt={item.alt} />
              </div>
            ))
            .slice(11, 16)}
      </div>
    </div>
  );
};
