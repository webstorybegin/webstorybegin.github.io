import { FC } from "react";
import { data } from "assets/data/data";

import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  switch: {
    position: "relative",
    "& input": {
      position: "absolute",
      opacity: 0,
      "&:checked + span:before": {
        left: 60,
      },
    },
    "& span": {
      pointerEvents: "visiblePainted",
      position: "relative",
      cursor: "pointer",
      display: "inline-flex",
      width: 112,
      height: 56,
      borderRadius: 40,
      background: "#fff",
      "&:before": {
        position: "absolute",
        content: '""',
        top: 6,
        left: 6,
        width: 44,
        height: 44,
        borderRadius: "50%",
        transition: ".2s ease 0s",
        background: "#0066FF",
      },
    },
    "& p": {
      position: "absolute",
      fontSize: 16,
    },
  },
});

interface ISwitch {
  readonly toggled?: boolean;
  readonly setToggled?: any;
}

export const Switch: FC<ISwitch> = ({ toggled, setToggled }) => {
  const { read } = data;
  const { text } = read;

  const classes = useStyles();

  return (
    <label className={classes.switch}>
      <input onClick={() => setToggled(!toggled)} type="checkbox" />
      <span />
      <p
        style={
          !toggled
            ? { left: -55, bottom: 25, opacity: 0.4 }
            : {
                left: -55,
                bottom: 25,
                color: "#000",
              }
        }
      >
        {text[0].title}
      </p>
      <svg
        style={{
          position: "absolute",
          left: 17,
          bottom: 23,
          pointerEvents: "none",
        }}
        onClick={() => setToggled(!toggled)}
        width="21"
        height="16"
        viewBox="0 0 21 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.50006 11.2819V14.7181C6.50006 15.1638 6.45365 15.3255 6.36649 15.4884C6.27934 15.6514 6.15145 15.7793 5.98848 15.8664C5.82552 15.9536 5.66388 16 5.21812 16H3.50006C1.84321 16 0.500061 14.6569 0.500061 13C0.500061 11.6938 1.33487 10.5825 2.50006 10.1707V8C2.50006 3.58172 6.08178 0 10.5001 0C14.9183 0 18.5001 3.58172 18.5001 8V10.1707C19.6653 10.5825 20.5001 11.6938 20.5001 13C20.5001 14.6569 19.1569 16 17.5001 16H15.782C15.3362 16 15.1746 15.9536 15.0116 15.8664C14.8487 15.7793 14.7208 15.6514 14.6336 15.4884C14.5465 15.3255 14.5001 15.1638 14.5001 14.7181V11.2819C14.5001 10.8362 14.5465 10.6745 14.6336 10.5116C14.7208 10.3486 14.8487 10.2207 15.0116 10.1336C15.1746 10.0464 15.3362 10 15.782 10H16.5001V8C16.5001 4.68629 13.8138 2 10.5001 2C7.18635 2 4.50006 4.68629 4.50006 8V10H5.21812C5.66388 10 5.82552 10.0464 5.98848 10.1336C6.15145 10.2207 6.27934 10.3486 6.36649 10.5116C6.45365 10.6745 6.50006 10.8362 6.50006 11.2819Z"
          fill={toggled ? "white" : "black"}
        />
      </svg>
      <svg
        style={{
          position: "absolute",
          right: 20,
          bottom: 23,
          pointerEvents: "none",
        }}
        width="17"
        height="14"
        viewBox="0 0 17 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0.499939 5C0.499939 4.44772 0.947654 4 1.49994 4H11.4999C12.0522 4 12.4999 4.44772 12.4999 5C12.4999 5.55229 12.0522 6 11.4999 6H1.49994C0.947654 6 0.499939 5.55229 0.499939 5ZM0.499939 1C0.499939 0.447715 0.947654 0 1.49994 0H15.4999C16.0522 0 16.4999 0.447715 16.4999 1C16.4999 1.55228 16.0522 2 15.4999 2H1.49994C0.947654 2 0.499939 1.55228 0.499939 1ZM0.499939 9C0.499939 8.44772 0.947654 8 1.49994 8H15.4999C16.0522 8 16.4999 8.44772 16.4999 9C16.4999 9.55229 16.0522 10 15.4999 10H1.49994C0.947654 10 0.499939 9.55229 0.499939 9ZM0.499939 13C0.499939 12.4477 0.947654 12 1.49994 12H8.49994C9.05222 12 9.49994 12.4477 9.49994 13C9.49994 13.5523 9.05222 14 8.49994 14H1.49994C0.947654 14 0.499939 13.5523 0.499939 13Z"
          fill={toggled ? "black" : "white"}
        />
      </svg>
      <p
        style={
          toggled
            ? { right: -55, bottom: 25, opacity: 0.4 }
            : {
                right: -55,
                bottom: 25,
                color: "#000",
              }
        }
      >
        {text[1].title}
      </p>
    </label>
  );
};
