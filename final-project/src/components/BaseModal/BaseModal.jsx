import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import React from 'react';
import { DescriptionTypography } from '../Card/styled';

const BaseModal = ({ name, image, description }) => (
	<>
		{image
			&& <CardMedia
				sx={{ height: { xs: 200, sm: 300 }, width: '100%', objectFit: 'cover' }}
				image={image}
			/>
		}
		<CardContent>
			<Typography gutterBottom variant="h5" component="div">
				{name}
			</Typography>
			<DescriptionTypography variant="body2" color="text.secondary">
				{description}
			</DescriptionTypography>
		</CardContent>
	</>
);

export default BaseModal;
