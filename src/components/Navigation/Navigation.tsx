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
      marginRight: 5,
      "&:last-child": {
        marginLeft: 5,
      },
    },
  },
});

export const Navigation = () => {
  const classes = useStyles();

  return (
    <div className={classes.navigation}>
      <NavLink exact to="/millionaire" activeStyle={{ color: "#FF8B37" }}>
        Millionaire
      </NavLink>
      /
      <NavLink exact to="/headway" activeStyle={{ color: "#FF8B37" }}>
        Landing
      </NavLink>
      /
      <NavLink exact to="/calculator" activeStyle={{color: "#FF8b37"}} >
        Calculator
      </NavLink>
    </div>
  );
};
