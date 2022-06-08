import { NavLink } from "react-router-dom";

import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  navigation: {
    position: "absolute",
    top: 10,
    left: 10,
    fontSize: 20,
    zIndex: 100,
    "& a": {
      color: "#000",
    },
    "& span": {
      border: '1px solid #e3e3e3',
      margin: '0 15px',
    }
  },
});

export const Navigation = () => {
  const classes = useStyles();

  return (
    <div className={classes.navigation}>
      <NavLink exact to="/millionaire" activeStyle={{ color: "#FF8B37" }}>
        Millionaire
      </NavLink>
      <span />
      <NavLink exact to="/headway" activeStyle={{ color: "#FF8B37" }}>
        Landing
      </NavLink>
      <span />
      <NavLink exact to="/calculator" activeStyle={{color: "#FF8b37"}} >
        Currency calculator
      </NavLink>
      <span />
      <NavLink exact to="/formikForm" activeStyle={{color: "#ffffff"}} >
        Formik form
      </NavLink>
    </div>
  );
};
