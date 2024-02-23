import axios from 'axios';

export default axios.create({
	baseURL: 'https://65d34b9e522627d501088c24.mockapi.io',
	headers: {
		'Content-Type': 'application/json',
	},
});
