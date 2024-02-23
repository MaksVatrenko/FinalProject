import React, { useState } from 'react';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import BaseModal from '../BaseModal/BaseModal';
import { DescriptionTypography, CardWrapper } from './styled';
import ModalWindow from '../ModalWindow/ModalWindow';

const CardItem = ({ name, image, description }) => {
	const [OpenModal, setOpenModal] = useState(false);
	const [modalType, setModalType] = useState(null);

	const handleOpenModalDetails = () => {
		setOpenModal(true);
		setModalType('details');
	};

	const handleOpenModalQuiz = () => {
		setOpenModal(true);
		setModalType('quiz');
	};

	const handleCloseModal = () => {
		setOpenModal(false);
		setModalType(null); // Сбрасываем тип модального окна
	};

	return (
		<>
			<CardWrapper>
				<CardMedia
					sx={{ height: { xs: 200, sm: 300 } }}
					image={image}
					title="green iguana"
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="div">
						{name}
					</Typography>
					<DescriptionTypography variant="body2" color="text.secondary">
						{description}
					</DescriptionTypography>
				</CardContent>
				<CardActions>
					<Button size="small" onClick={handleOpenModalQuiz}>Start quiz</Button>
					<Button size="small" onClick={handleOpenModalDetails}>Show Details</Button>
				</CardActions>
			</CardWrapper>
			<ModalWindow isOpen={OpenModal} handleClose={handleCloseModal} >
				{modalType === 'details' && <BaseModal name={name} image={image} description={description} />}
				{modalType === 'quiz' && <BaseModal name={name} description={'Quiz started'} />}
			</ModalWindow>
		</>
	);
};

export default CardItem;
