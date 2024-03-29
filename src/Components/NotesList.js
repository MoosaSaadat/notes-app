import React, { useContext, useEffect } from "react";
import NotesItem from "./NotesItem";
import { Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import styles from "../Styles/NotesList";
import { NotesContext } from "../Contexts/NotesContext";

function NotesList (props) {
	const { list } = useContext(NotesContext);
	const { classes } = props;

	useEffect(() => window.localStorage.setItem("notes", JSON.stringify(list)), [
		list
	]);

	const items = list.map((item) => (
		<Grid item key={item.key} xs={10} sm={5} md={4} lg={3}>
			<NotesItem note={item} />
		</Grid>
	));
	// console.log("List:", list);
	return (
		<div className={classes.root}>
			<Grid container spacing={3} justify="center" className={classes.grid}>
				{items}
			</Grid>
		</div>
	);
}

export default withStyles(styles)(NotesList);
