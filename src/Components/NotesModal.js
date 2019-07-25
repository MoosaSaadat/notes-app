import React, { useState } from "react";
import {
	Dialog,
	DialogContent,
	DialogContentText,
	Typography,
	Button,
	Box
} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

function NotesModal (props) {
	const { openModal, toggleModal } = props;
	return (
		<Dialog
			open={openModal}
			onClose={toggleModal}
			aria-labelledby="alert-dialog-title"
			aria-describedby="alert-dialog-description">
			<Box display="flex" p={2}>
				<Box flex="auto">
					<Typography variant="h5">Hello World</Typography>
					<Typography variant="body1" color="textSecondary">
						September 12, 2019
					</Typography>
				</Box>
				<Box flex="none">
					<Button color="primary">
						<EditIcon />
					</Button>
					<Button>
						<DeleteIcon color="secondary" />
					</Button>
				</Box>
			</Box>
			<DialogContent dividers>
				<DialogContentText id="alert-dialog-description">
					Contrary to popular belief, Lorem Ipsum is not simply random text. It
					has roots in a piece of classical Latin literature from 45 BC, making
					it over 2000 years old. Richard McClintock, a Latin professor at
					Hampden-Sydney College in Virginia, looked up one of the more obscure
					Latin words, consectetur, from a Lorem Ipsum passage, and going
					through the cites of the word in classical literature, discovered the
					undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
					1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and
					Evil) by Cicero, written in 45 BC. This book is a treatise on the
					theory of ethics, very popular during the Renaissance. The first line
					of Lorem Ipsum, Lorem ipsum dolor sit amet, comes from a line in
					section 1.10.32.
				</DialogContentText>
			</DialogContent>
		</Dialog>
	);
}

export default NotesModal;
