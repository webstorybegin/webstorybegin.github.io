import { data } from "assets/data/data";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  footer: {
    textAlign: "center",
    marginBottom: 100,
  },
  logo: {
    "& img": {
      width: 132,
      height: 24,
    },
  },
  container: {
    margin: "0 auto",
    background: "#fff",
    padding: 12,
    border: "1px solid rgba(0, 0, 0, 0.1)",
    borderRadius: 12,
    "& h1": {
      margin: "0 auto 10px",
      fontSize: 27,
      fontWeight: 700,
      lineHeight: 1.2,
    },
    "& h2": {
      margin: "0 auto 30px",
      fontSize: 20,
      lineHeight: 1.2,
    },
    "& img": {
      marginBottom: 20,
    },
    "& p": {
      fontSize: 16,
      marginBottom: 10,
    },
    "@media (max-width: 710px)": {
      "& h1": {
        fontSize: 20,
      },
      "& h2": {
        fontSize: 14,
      },
    },
  },
  icons: {
    display: "inline-flex",
    alignItems: "center",
    "& a, & img": {
      marginBottom: 0,
      marginRight: 13,
      "&:last-child": {
        margin: 0,
      },
    },
  },
});

export const Footer = () => {
  const { footer } = data;
  const { logo, title, subTitle, social } = footer;

  const classes = useStyles();

  return (
    <div className={classes.footer}>
      <div className={classes.container}>
        <div className={classes.logo}>
          <a href="*" target="_blank">
            <img src={logo.src} alt={logo.alt} />
          </a>
        </div>
        <h1>{title}</h1>
        <p>{subTitle}</p>
        <div className={classes.icons}>
          {social &&
            social.map((item) => (
              <a key={item.id} href={item.link} target="_blank">
                <img src={item.src} alt={item.alt} />
              </a>
            ))}
        </div>
      </div>
    </div>
  );
};
