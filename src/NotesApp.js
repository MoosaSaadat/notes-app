import React from "react";
import { withStyles } from "@material-ui/core/styles";
import NotesList from "./Components/NotesList";
import Navbar from "./Components/Navbar";
import styles from "./Styles/NotesApp";
import Form from "./Components/Form";

function NotesApp (props) {
	const { classes } = props;
	return (
		<div className={classes.root}>
			<Navbar />
			<NotesList />
			<Form />
		</div>
	);
}

export default withStyles(styles)(NotesApp);
