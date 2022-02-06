import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Navigation } from "components/Navigation";
import { StartPage, Quiz } from "components/millionaire";
import {
  Header,
  Become,
  Smarter,
  Summary,
  Determine,
  Read,
  People,
  Footer,
} from "components/headway";
import { PrimaryButton } from "components/headway/ui";

import useSound from "use-sound";
import play from "assets/sounds/play.mp3";

import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  millionaire: {
    height: "100vh",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundImage:
      "-webkit-linear-gradient(-61deg, #ffffff 50%, #FFF3EB 50%)",
    fontFamily: "Inter",
    overflowX: "hidden",
  },
  headway: {
    position: "relative",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    fontFamily: "Inter",
    background: "#FFF8F4",

  },
  container: {
    width: "100%",
    margin: "0 auto",
    flex: "1 1 auto",
  },
  header: {},
});

const Projects = () => {
  const [start, setStart] = useState(false);
  const [playGame] = useSound(play);

  useEffect(() => {
    start && playGame();
  }, [start]);

  const classes = useStyles();

  return (
    <Router>
      <Navigation />
      <Switch>
        <Route exact path="/millionaire">
          <div className={classes.millionaire}>
            {start ? (
              <Quiz start={start} setStart={setStart} />
            ) : (
              <StartPage setStart={setStart} />
            )}
          </div>
        </Route>
        <Route exact path="/headway">
          <div className={classes.headway}>
            <div className={classes.header}>
              <Header />
            </div>
            <div className={classes.container}>
              <Become />
              <Smarter />
              <Summary />
              <Determine />
              <Read />
              <People />
            </div>
            <Footer />
            <PrimaryButton />
          </div>
        </Route>
      </Switch>
    </Router>
  );
};

export default Projects;
