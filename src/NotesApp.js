import React, { useEffect, useContext } from "react";
import { withStyles } from "@material-ui/core/styles";
import NotesList from "./Components/NotesList";
import Navbar from "./Components/Navbar";
import styles from "./Styles/NotesApp";
import Form from "./Components/Form";
import { NotesProvider } from "./Contexts/NotesContext";
import { FormProvider } from "./Contexts/FormContext";

function NotesApp (props) {
	// useEffect(
	// 	() => {
	// 		console.log("Inside UseEffect");
	// 		return window.localStorage.setItem("notes", JSON.stringify(notes));
	// 	},
	// 	[ notes ]
	// );

	const { classes } = props;
	return (
		<div className={classes.root}>
			<NotesProvider>
				<FormProvider>
					<Navbar />
					<NotesList />
					<Form />
				</FormProvider>
			</NotesProvider>
		</div>
	);
}

export default withStyles(styles)(NotesApp);
