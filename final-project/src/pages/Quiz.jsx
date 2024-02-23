import React, { useCallback, useEffect, useState } from 'react';
import CardItem from '../components/Card/Card';
// import { quiz } from '../constants';
import quizApi from '../api/quiz/quiz';
import { CardsWrapper } from './styled';

const Quiz = () => {
	const [quiz, setQuiz] = useState([]);

	const fetchQuiz = useCallback(async () => {
		const quizResponse = await quizApi.fetch();

		setQuiz(quizResponse);
	}, []);

	useEffect(() => {
		fetchQuiz();
	}, [fetchQuiz]);

	return (
		<CardsWrapper>
			{quiz.map((test, index) => (
				<CardItem
					key={index}
					name={test.name}
					image={test.image}
					description={test.description}
				/>
			))}
		</CardsWrapper>
	);
};

export default Quiz;
