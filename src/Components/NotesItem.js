import React, { useState } from "react";
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

function NotesItem (props) {
	const { classes, isListItem } = props;
	let itemContent =
		"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet, comes from a line in section 1.10.32.";
	if (isListItem) {
		itemContent = itemContent.slice(0, 200);
		itemContent = itemContent.concat("...");
	}
	const [ openModal, setOpenModal ] = useState(false);
	function toggleModal () {
		setOpenModal(!openModal);
	}
	return (
		<React.Fragment>
			<Card>
				<CardHeader
					title="Hello World"
					subheader="September 12, 2019"
					action={
						<React.Fragment>
							<IconButton aria-label="Edit">
								<EditIcon />
							</IconButton>
							<IconButton aria-label="Delete">
								<DeleteIcon />
							</IconButton>
						</React.Fragment>
					}
				/>
				<CardActionArea onClick={toggleModal}>
					<CardContent>
						<Typography varaint="body2">{itemContent}</Typography>
					</CardContent>
				</CardActionArea>
			</Card>
			<NotesModal openModal={openModal} toggleModal={toggleModal} />
		</React.Fragment>
	);
}

export default withStyles(styles)(NotesItem);
