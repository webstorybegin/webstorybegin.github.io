import { useState } from "react";
import { data } from "assets/data/data";
import { Books } from "components/headway";

import cn from "classnames";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  determine: {
    padding: "4px 0",
    textAlign: "center",
  },
  container: {
    position: "relative",
    background: "#7a00da1a",
    padding: "24px 8px 8px 8px",
    border: "1px solid #7a00da1a",
    borderRadius: 12,
    textAlign: "center",
    "& h1": {
      margin: "0 auto 10px",
      fontSize: 40,
      fontWeight: 700,
      lineHeight: '130%',
    },
    "& h2": {
      margin: "0 auto 30px",
      fontSize: 20,
      lineHeight: "150%",
    },
    "@media (max-width: 715px)": {
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
    overflow: "auto",
    "&::-webkit-scrollbar": {
      width: 0,
    },
    "@media (max-width: 930px)": {
      justifyContent: "start",
      paddingRight: 16,
    },
  },
  category: {
    position: "relative",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    background: "#fff",
    border: "1px solid rgba(0, 0, 0, 0.1)",
    borderRadius: 8,
    color: "#000",
    padding: "10px 8px",
    transition: ".2s ease 0s",
  },
  toggledCategory: {
    background: "#E6E9F5",
    border: "1px solid #0066FF",
  },
});

export const Determine = () => {
  const { determine } = data;
  const { title, subTitle, categories, books } = determine;

  const [selectedCategory, setSelectedCategory] = useState("");

  const handleClick = (value) => {
    setSelectedCategory(value);
  };

  const classes = useStyles();

  return (
    <div className={classes.determine}>
      <div className={classes.container}>
        <h1>{title}</h1>
        <h2>{subTitle}</h2>
        <div className={classes.categories}>
          {categories &&
            categories.map((item) => (
              <div
                key={item.id}
                onClick={() => handleClick(item.text)}
                className={cn(
                  classes.category,
                  item.text === selectedCategory && classes.toggledCategory
                )}
              >
                <img
                  style={{ marginRight: 10 }}
                  src={item.src}
                  alt={item.alt}
                />
                <span>{item.text}</span>
              </div>
            ))}
        </div>
        <Books selectedCategory={selectedCategory} />
      </div>
    </div>
  );
};
