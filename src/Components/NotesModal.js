import React, { useContext } from "react";
import {
	Dialog,
	DialogContent,
	DialogContentText,
	Typography,
	Button,
	Box
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import styles from "../Styles/NotesModal";
import { NotesContext } from "../Contexts/NotesContext";
import { FormContext } from "../Contexts/FormContext";
import { getCustomDate } from "../helperFunctions";

function NotesModal (props) {
	const { openModal, toggleModal, classes } = props;
	const { key, title, date, content } = props.note;
	const { dispatch } = useContext(NotesContext);
	const { openEditor } = useContext(FormContext);
	const formattedDate = getCustomDate(date);

	// console.log("Modal:", title);
	return (
		<Dialog
			open={openModal}
			onClose={toggleModal}
			aria-labelledby="alert-dialog-title"
			aria-describedby="alert-dialog-description">
			<Box display="flex" p={2}>
				<Box flex="auto">
					<Typography variant="h5">{title}</Typography>
					<Typography variant="body1" color="textSecondary">
						{formattedDate}
					</Typography>
				</Box>
				<Box flex="none" pl={3}>
					<Button
						classes={{ root: classes.editButton }}
						onClick={() => openEditor(key)}>
						<EditIcon />
					</Button>
					<Button
						classes={{ root: classes.deleteButton }}
						onClick={() => dispatch({ type: "DELETE", key: key })}>
						<DeleteIcon />
					</Button>
				</Box>
			</Box>
			<DialogContent dividers>
				<DialogContentText
					id="alert-dialog-description"
					className={classes.content}>
					{content}
				</DialogContentText>
			</DialogContent>
		</Dialog>
	);
}

export default withStyles(styles)(NotesModal);
