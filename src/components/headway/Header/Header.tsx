import { data } from "assets/data/data";

import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  header: {
    width: "100%",
    padding: "40px 10px 8px 10px",
    display: "flex",
    alignItems: "center",
  },
  logo: {
    "& img": {
      width: 132,
      height: 24,
    },
  },
  buttonsWrapper: {
    marginLeft: "auto",
    display: "flex",
  },
  buttons: {
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 48,
    height: 48,
    background: "rgba(0, 0, 0, 0.05)",
    borderRadius: 8,
    marginRight: 8,
  },
});

export const Header = () => {
  const { header } = data;
  const { logo, buttons } = header;

  const classes = useStyles();

  return (
    <div className={classes.header}>
      <div className={classes.logo}>
        <a href="*" target="_blank">
          <img src={logo.src} alt={logo.alt} />
        </a>
      </div>
      <div className={classes.buttonsWrapper}>
        {buttons &&
          buttons.map((item) => (
            <div key={item.id} className={classes.buttons}>
              <img src={item.src} alt={item.alt} />
            </div>
          ))}
      </div>
    </div>
  );
};
