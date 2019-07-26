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

const Transition = React.forwardRef(function Transition (props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

function Form (props) {
	const { classes } = props;
	const { note, isNew, open, setOpen, handleChange } = useContext(FormContext);
	const { addNote, updateNote } = useContext(NotesContext);

	function handleClose () {
		setOpen(false);
	}
	function handleSubmit (e) {
		e.preventDefault();
		if (isNew) addNote(note);
		else updateNote(note);
		setOpen(false);
	}

	return (
		<Dialog
			fullScreen
			open={open}
			onClose={handleClose}
			TransitionComponent={Transition}>
			<form onSubmit={handleSubmit}>
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
							{isNew ? "Add New Notes" : "Edit Notes"}
						</Typography>
						<Button
							color="inherit"
							className={classes.saveButton}
							type="submit">
							save
						</Button>
					</Toolbar>
				</AppBar>
				<Grid container>
					<Grid item xs={12} sm={6} md={4} lg={3}>
						<TextField
							required
							autoFocus
							id="note-title"
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
					<Grid item xs={12}>
						<Divider />
						<TextField
							required
							multiline
							rows={20}
							id="note-body"
							label="Notes"
							classes={{ root: classes.contentBox }}
							onChange={handleChange}
							value={note.content}
							name="content"
							margin="normal"
							variant="outlined"
						/>
					</Grid>
				</Grid>
			</form>
		</Dialog>
	);
}

export default withStyles(styles)(Form);
