import React from 'react';
import Modal from '@mui/material/Modal';
import { ModalWrapper } from './styled';

const ModalWindow = ({ children, isOpen, handleClose }) => (
	<Modal
		open={isOpen}
		onClose={handleClose}
		aria-labelledby="modal-modal-title"
		aria-describedby="modal-modal-description"
	>
		<ModalWrapper>
			{children}
		</ModalWrapper>
	</Modal>
);

export default ModalWindow;
