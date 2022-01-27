import { FC } from 'react';
import { useState, useEffect } from 'react';
import { Choice } from 'components/Quiz/Choice/Choice';
import { Timer } from 'components/ui/Timer/Timer';
import { EndPage } from 'components/EndPage/EndPage';
import { Burger } from 'components/ui/Burger/Burger';

import { data } from 'assets/data/data';

import { makeStyles } from '@material-ui/styles';

import cn from 'classnames'

const useStyles = makeStyles({
	root: {
		width: '100%',
		display: 'flex',
		height: '100%',
		background: '#F5F5F7',
	},
	quiz: {
		position: 'relative',
		width: '75%',
		padding: '130px 140px 122px 80px',
		'@media (max-width: 950px)': {
			width: '100%',
			padding: '60px 20px 20px 20px',
		},
	},
	winning: {
		background: '#fff',
		width: '25%',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		transition: '.3s linear 0s',
		'@media (max-width: 950px)': {
			display: 'none',
		},
	},
	amountList: {
		width: '100%',
	},
	amountListLine: {
		position: 'relative',
		'&:before': {
			position: 'absolute',
			content: '""',
			height: 1,
			width: '100%',
			background: '#D0D0D8',
			top: '50%',
		},
	},
	amountListItem: {
		position: 'relative',
		display: 'flex',
		justifyContent: 'center',
		fontSize: 20,
		marginBottom: '8px',
		padding: '9px 50px',
		margin: '0 68px',
		border: '1px solid #D0D0D8',
		background: '#fff',
		'@media (max-width: 1170px)': {
			'& span': {
				fontSize: 16,
			},
		},
	},
	activeLine: {
		'&:before': {
			background: '#FF8B37',
		},
	},
	active: {
		border: '1px solid #FF8B37',
		color: '#FF8B37',
	},
	activeMenu: {
		width: '100%',
		display: 'flex',
		alignItems: 'center',
	},
	hide: {
		display: 'none',
	},
});

interface IQuiz {
	readonly start: boolean;
	readonly setStart: any;
}

export const Quiz: FC<IQuiz> = ({ start, setStart }) => {
	const [questionNumber, setQuestionNumber] = useState(1);
	const [earned, setEarned] = useState('$0');
	const [stop, setStop] = useState(false);
	const [burgerMenu, setBurgerMenu] = useState(false);

  console.log('burger', burgerMenu)

	const { questions } = data;
	const { question, money } = questions;

	useEffect(() => {
		questionNumber > 1 && setEarned(money.find((item) => item.id === questionNumber - 1).amount);
	}, [questionNumber]);

	const classes = useStyles();

	return (
		<div className={classes.root}>
			{stop || earned === '$1,000,000' ? (
				<EndPage setStart={setStart} earned={earned} start={start} />
			) : (
				<>
					<Burger burgerMenu={burgerMenu} setBurgerMenu={setBurgerMenu} />
					<div className={burgerMenu ? classes.hide : classes.quiz}>
						<Timer setStop={setStop} questionNumber={questionNumber} />
						<Choice
							setStop={setStop}
							question={question}
							questionNumber={questionNumber}
							setQuestionNumber={setQuestionNumber}
							burgerMenu={burgerMenu}
						/>
					</div>
					<div className={burgerMenu ? classes.activeMenu : classes.winning}>
						<ul className={classes.amountList}>
							{money &&
								money.map((amount) => (
									<div
										key={amount.id}
										className={cn(
											classes.amountListLine,
											questionNumber === amount.id ? classes.activeLine : null
										)}
									>
										<li
											className={cn(
												classes.amountListItem,
												questionNumber === amount.id ? classes.active : null
											)}
										>
											<span>{amount.amount}</span>
										</li>
									</div>
								))}
						</ul>
					</div>
				</>
			)}
		</div>
	);
};
