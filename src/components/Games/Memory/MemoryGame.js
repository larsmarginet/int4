import React, {useEffect, useState} from "react";
import { v4 } from "uuid";
import cardImages from "./components/Cards";
import Card from "./components/Card";
import deepcopy from "deepcopy";
import style from "./MemoryGame.module.css"

const shuffleArray = (array) => {
	return array.sort(() => .5 - Math.random());
}

const generateCards = (count) => {
	if (count % 2 !== 0)
		throw new Error(`Count must be even: 2, 4, 6, etc. but it is ${count}`);

	const cards = shuffleArray(cardImages)
		.slice(0, count / 2)
		.map(imageURL => ({
			id: v4(),
			imageURL: "./assets/cards/" + imageURL,
			isFlipped: false,
			canFlip: true
		}))
		.flatMap(e => [e, {...deepcopy(e), id: v4()}]);

	return shuffleArray(cards);
}

const MemoryGame = ({fieldWidth=6, fieldHeight=3}) => {
	const totalCards = fieldWidth * fieldHeight;

	const [cards, setCards] = useState(generateCards(totalCards));
	const [canFlip, setCanFlip] = useState(false);
	const [firstCard, setFirstCard] = useState(null);
	const [secondCard, setSecondCard] = useState(null);

	const setCardIsFlipped = (cardID, isFlipped) => {
		setCards(prev => prev.map(c => {
			if (c.id !== cardID)
				return c;
			return {...c, isFlipped};
		}));
	}
	const setCardCanFlip = (cardID, canFlip) => {
		setCards(prev => prev.map(c => {
			if (c.id !== cardID)
				return c;
			return {...c, canFlip};
		}));
	}

	// showcase
	useEffect(() => {
		setTimeout(() => {
			let index = 0;
			for (const card of cards) {
				setTimeout(() => setCardIsFlipped(card.id, true), index++ * 100);
			}
			setTimeout(() => setCanFlip(true), cards.length * 100);
		}, 1000); // eslint-disable-next-line
	}, []);


	const resetFirstAndSecondCards = () => {
		setFirstCard(null);
		setSecondCard(null);
	}

	const onSuccessGuess = () => {
		setCardCanFlip(firstCard.id, false);
		setCardCanFlip(secondCard.id, false);
		setCardIsFlipped(firstCard.id, false);
		setCardIsFlipped(secondCard.id, false);
		resetFirstAndSecondCards();
	}
	const onFailureGuess = () => {
		const firstCardID = firstCard.id;
		const secondCardID = secondCard.id;

		setTimeout(() => {
			setCardIsFlipped(firstCardID, true);
		}, 1000);
		setTimeout(() => {
			setCardIsFlipped(secondCardID, true);
		}, 1200);

		resetFirstAndSecondCards();
	}

	
	useEffect(() => {
		if (!firstCard || !secondCard)
			return;
		(firstCard.imageURL === secondCard.imageURL) ? onSuccessGuess() : onFailureGuess(); // eslint-disable-next-line
	}, [firstCard, secondCard]);


	const onCardClick = (card) => {
		if (!canFlip)
			return;
		if (!card.canFlip)
			return;
		// eslint-disable-next-line
		if ((firstCard && (card.id === firstCard.id) || (secondCard && (card.id === secondCard.id)))) 
			return;

		setCardIsFlipped(card.id, false);

		(firstCard) ? setSecondCard(card) : setFirstCard(card);
	}

	return <div className={`${style.game} ${style.containerMd}`}>
		<div className={style.cardsContainer}>
			{cards.map(card => <Card onClick={() => onCardClick(card)} key={card.id} {...card}/>)}
		</div>
	</div>;
}

export default MemoryGame;