import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  header: {
    padding: 20,
    background: "#ffff",
    fontFamily: "Roboto,HelveticaNeue,Arial,sans-serif",
    textAlign: "center",
    borderRadius: 5,
    "& h1, h2": {
      fontSize: 16,
      marginBottom: 5,
    },
    "& li": {
      fontSize: 20,
      lineHeight: 1,
    },
  },
});

export const Header = ({ currentCourse }) => {
  const classes = useStyles();

  return (
    <div className={classes.header}>
      <h1>Сurrent course on {currentCourse?.updated}</h1>
      <h2>1 Ukrainian hryvnia</h2>
      <p>
        {currentCourse && (
          <li>
            {currentCourse.results.USD.toFixed(3)} USD
            <br />
            {currentCourse.results.EUR.toFixed(3)} EUR
          </li>
        )}
      </p>
    </div>
  );
};
