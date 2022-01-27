import { useState } from 'react';
import { StartPage } from 'components/StartPage/StartPage';

import { makeStyles } from '@material-ui/styles';
import { Quiz } from 'components/Quiz/Quiz';


const useStyles = makeStyles({
  root: {
    height: '100vh',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: '-webkit-linear-gradient(-61deg, #ffffff 50%, #FFF3EB 50%)',
    fontFamily: 'Inter',
  },
});

const Game = () => {
  const [start, setStart] = useState(false);

  const classes = useStyles();

  return (
    <div className={classes.root}>
      {start ? <Quiz start={start} setStart={setStart} /> : <StartPage setStart={setStart} />}
    </div>
  );
};

export default Game;
