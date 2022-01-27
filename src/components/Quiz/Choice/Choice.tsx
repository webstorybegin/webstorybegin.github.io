import { FC, useState, useEffect } from "react";
import { makeStyles } from "@material-ui/styles";

import cn from "classnames";

const useStyles = makeStyles({
  question: {
    fontSize: 32,
    fontWeight: 600,
    color: "#1C1C21",
    "& h1": {
      marginBottom: 450,
      "@media (max-width: 768px)": {
        marginBottom: 100,
      }
    },
    "@media (max-width: 950px)": {
      fontSize: 18,
      textAlign: 'center',
    }
  },
  answers: {
    display: "grid",
    alignItems: 'center',
    gridTemplateColumns: "350px 350px",
    gridGap: 35,
    "@media (max-width: 1170px)": {
      gridTemplateColumns: "repeat(auto-fill, minmax(350px,  1fr))",
    },
    "@media (max-width: 425px)": {
      gridTemplateColumns: "repeat(auto-fill, minmax(250px,  1fr))",
    }
  },
  answerLine: {
    position: "relative",
    "&:before": {
      position: "absolute",
      content: '""',
      height: 1,
      width: "114%",
      background: "#D0D0D8",
      top: "50%",
      left: '-7%',
    },
  },
  answer: {
    position: "relative",
    display: 'flex',
    cursor: "pointer",
    background: "#fff",
    border: "1px solid #D0D0D8",
    padding: "25px 50px",
    color: "#1C1C21",
    fontSize: 20,
    fontWeight: 400,
    "& span": {
      color: "#FF8B37",
      marginRight: 8,
    },
    "& p": {
      fontSize: 16,
      lineHeight: 1.2,
    },
    "&:hover": {
      border: "1px solid #FF8B37",
    },
    "&:active": {
      background: "#FFF3EB",
    },
  },
  correct: {
    animation: "$correct 3s ease-in-out 0s",
  },
  "@keyframes correct": {
    "0%, 22%, 42%": {
      border: "1px solid #D0D0D8",
      background: "#fff",
    },
    "20%, 40%, 60%": {
      border: "1px solid #47D867",
      background: "#E6FAEA",
    },
    "62%, 100%": {
      background: "#E6FAEA",
    },
  },
  wrong: {
    animation: "$wrong 3s ease-in-out 0s",
  },
  "@keyframes wrong": {
    "0%, 22%, 42%": {
      border: "1px solid #D0D0D8",
      background: "#fff",
    },
    "20%, 40%, 60%": {
      border: "1px solid #47D867",
      background: "#E6FAEA",
    },
    "62%, 100%": {
      border: "1px solid #EC6259",
      background: "#FDEEED",
    },
  },
  hide: {
    display: 'none'
  },
});

interface IChoice {
  readonly question: string,
  readonly questionNumber: number,
  readonly setQuestionNumber: { (next: any) }
  readonly burgerMenu: boolean,
  readonly setStop: (setStop: boolean) => void,
}

export const Choice: FC<IChoice> = ({
  question,
  questionNumber,
  setQuestionNumber,
  burgerMenu,
  setStop
}) => {
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [selectAnswer, setSelectAnswer] = useState(null);
  const [className, setClassName] = useState("answer");

  useEffect(() => {
    setCurrentQuestion(question[questionNumber - 1]);
  }, [question, questionNumber]);

  const delay = (duration, func) => {
    setTimeout(() => {
      func();
    }, duration);
  };

  const handleClick = (item) => {
    setSelectAnswer(item);
    delay(2000, () =>
      setClassName(item.correct ? classes.correct : classes.wrong)
    );
    delay(4000, () => {
      if (item.correct) {
        setQuestionNumber((next) => next + 1);
        setSelectAnswer(null);
      } else {
        setStop(true)
      }
    });
  };

  const classes = useStyles();

  return (
    <div>
      <div className={classes.question}>
        <h1>{currentQuestion?.text}</h1>
        <div className={
          burgerMenu ? classes.hide : classes.answers
        }>
          {currentQuestion &&
            currentQuestion?.answers.map((item, i) => (
              <div key={i} className={classes.answerLine}>
                <div
                  className={cn(
                    classes.answer,
                    selectAnswer === item ? className : classes.answer
                  )}
                  onClick={() => !selectAnswer && handleClick(item)}
                >
                  <span>{item.option}</span>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
