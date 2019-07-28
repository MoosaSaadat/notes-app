import React, { useContext, memo } from "react";
import {
	Card,
	CardContent,
	Typography,
	CardHeader,
	IconButton,
	CardActionArea
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import styles from "../Styles/NotesItem";
import NotesModal from "./NotesModal";
import { NotesContext } from "../Contexts/NotesContext";
import { FormContext } from "../Contexts/FormContext";
import { getCustomDate } from "../helperFunctions";
import { useToggleState } from "../Hooks/useToggleState";

function NotesItem (props) {
	const { key, title, date, content } = props.note;
	const { dispatch } = useContext(NotesContext);
	const { openEditor } = useContext(FormContext);
	const formattedDate = getCustomDate(date);

	const [ openModal, toggleModal ] = useToggleState(false);

	const { classes } = props;
	// console.log("Item:", title);
	return (
		<React.Fragment>
			<Card>
				<CardHeader
					title={title}
					subheader={formattedDate}
					action={
						<React.Fragment>
							<IconButton
								aria-label="Edit"
								classes={{ root: classes.editButton }}
								onClick={() => openEditor(key)}>
								<EditIcon />
							</IconButton>
							<IconButton
								aria-label="Delete"
								classes={{ root: classes.deleteButton }}
								onClick={() => dispatch({ type: "DELETE", key: key })}>
								<DeleteIcon />
							</IconButton>
						</React.Fragment>
					}
				/>
				<CardActionArea onClick={toggleModal}>
					<CardContent className={classes.container}>
						<Typography varaint="body2" className={classes.itemContent}>
							{content}
						</Typography>
					</CardContent>
				</CardActionArea>
			</Card>
			<NotesModal
				note={props.note}
				openModal={openModal}
				toggleModal={toggleModal}
			/>
		</React.Fragment>
	);
}

export default memo(withStyles(styles)(NotesItem));
