import { FC } from 'react';
import { makeStyles } from "@material-ui/styles";
import cn from "classnames";

const useStyles = makeStyles({
  root: {
    position: "absolute",
    display: "none",
    marginLeft: 20,
    width: 27,
    height: 20,
    top: 20,
    right: 20,
    zIndex: 100,
    cursor: "pointer",
    "& span": {
      display: "block",
      width: "100%",
      height: 2,
      background: "#000",
      transition: ".5s linear 0s",
    },
    "&:before, &:after": {
      position: "absolute",
      content: '""',
      width: "100%",
      height: "2px",
      background: "#000",
      
    },
    "&:before": {
      top: 9,
    },
    "&:after": {
      bottom: 0,
    },
    "@media (max-width: 950px)": {
      display: "block",
    },
  },
});

interface IBurger {
  readonly burgerMenu: boolean,
  readonly setBurgerMenu: (setBurgerMenu: boolean) => void
}

export const Burger: FC<IBurger> = ({ burgerMenu, setBurgerMenu }) => {
  const classes = useStyles();

  return (
    <div
      className={classes.root}
      onClick={() => setBurgerMenu(!burgerMenu)}
    >
      <span />
    </div>
  );
};
