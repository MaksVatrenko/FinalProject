import React from 'react';
import { Grid } from '@mui/material';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Sidebar from '../Sidebar/Sidebar';
import Quiz from '../../pages/Quiz';
import { LayoutContainer } from './styled';

const Templates = () => (
	<div>
		<LayoutContainer>
			<Grid container>
				<Grid item xs={12}>
					<Header></Header>
				</Grid>
				<Grid item xs={4}>
					<Sidebar></Sidebar>
				</Grid>
				<Grid item xs={8}>
					<Quiz></Quiz>
				</Grid>
				<Grid item xs={12}>
					<Footer></Footer>
				</Grid>
			</Grid>
		</LayoutContainer>
	</div>
);

export default Templates;
