import axios from '../service';

const quizApi = {
	fetch: () => axios.get('/test')
		.then(({ data, status }) => {
			if (status > 399) {
				throw new Error('Failed to fetch data');
			}

			return data;
		}).catch((error) => {
			console.error(error);
		}),
};

export default quizApi;
