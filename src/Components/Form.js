import React, { useContext } from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "../Styles/Form";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import Divider from "@material-ui/core/Divider";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import { TextField, Grid } from "@material-ui/core";
import { FormContext } from "../Contexts/FormContext";
import { NotesContext } from "../Contexts/NotesContext";
import { getFormDate, getKeyValue } from "../helperFunctions";

const Transition = React.forwardRef(function Transition (props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

function Form (props) {
	const { classes } = props;
	const { note, setNote, open, isNew, setIsNew, toggleOpen } = useContext(
		FormContext
	);
	const { addNote, saveUpdatedNote, notes } = useContext(NotesContext);
	console.log(notes);

	function handleClose () {
		toggleOpen();
		setNote({
			key: getKeyValue(notes),
			title: "",
			date: getFormDate(),
			notes: ""
		});
		setIsNew(true);
	}
	function handleChange (e) {
		setNote({ ...note, [e.target.name]: e.target.value });
	}
	function handleSubmit () {
		if (isNew) addNote(note);
		else saveUpdatedNote(note);
		handleClose();
	}

	return (
		<Dialog
			fullScreen
			open={open}
			onClose={handleClose}
			TransitionComponent={Transition}>
			<AppBar className={classes.appBar}>
				<Toolbar>
					<IconButton
						edge="start"
						color="inherit"
						onClick={handleClose}
						aria-label="Close">
						<CloseIcon />
					</IconButton>
					<Typography variant="h6" className={classes.title}>
						Add New Notes
					</Typography>
					<Button
						color="inherit"
						className={classes.saveButton}
						onClick={handleSubmit}>
						save
					</Button>
				</Toolbar>
			</AppBar>
			<Grid container>
				<Grid item xs={12} sm={6} md={4} lg={3}>
					<TextField
						required
						autoFocus
						id="notes-title"
						label="Title"
						className={classes.textField}
						onChange={handleChange}
						value={note.title}
						name="title"
						margin="normal"
					/>
				</Grid>
				<Grid item xs={12} sm={6} md={4} lg={3}>
					<TextField
						required
						id="date"
						label="Date"
						type="date"
						margin="normal"
						className={classes.textField}
						onChange={handleChange}
						value={note.date}
						name="date"
						InputLabelProps={{
							shrink: true
						}}
					/>
				</Grid>
			</Grid>
			<Divider />
			<TextField
				required
				multiline
				rows={20}
				id="notes-body"
				label="Notes"
				className={classes.textField}
				onChange={handleChange}
				value={note.notes}
				name="notes"
				margin="normal"
				variant="outlined"
			/>
		</Dialog>
	);
}

export default withStyles(styles)(Form);
