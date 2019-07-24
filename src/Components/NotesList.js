import React from "react";
import NotesItem from "./NotesItem";
import { Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import styles from "../Styles/NotesList";

function NotesList (props) {
	const { classes } = props;
	return (
		<div className={classes.root}>
			<Grid container spacing={3} justify="center" className={classes.grid}>
				<Grid item xs={10} sm={5} md={4} lg={3}>
					<NotesItem isListItem />
				</Grid>
				<Grid item xs={10} sm={5} md={4} lg={3}>
					<NotesItem isListItem />
				</Grid>
				<Grid item xs={10} sm={5} md={4} lg={3}>
					<NotesItem isListItem />
				</Grid>
				<Grid item xs={10} sm={5} md={4} lg={3}>
					<NotesItem isListItem />
				</Grid>
			</Grid>
		</div>
	);
}

export default withStyles(styles)(NotesList);
