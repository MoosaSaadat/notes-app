import React from "react";
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
import { TextField } from "@material-ui/core";

const Transition = React.forwardRef(function Transition (props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

function Form (props) {
	const { classes } = props;
	const [ open, setOpen ] = React.useState(false);

	function handleClickOpen () {
		setOpen(true);
	}

	function handleClose () {
		setOpen(false);
	}

	return (
		<div>
			<Button variant="outlined" color="primary" onClick={handleClickOpen}>
				Open full-screen dialog
			</Button>
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
							onClick={handleClose}>
							save
						</Button>
					</Toolbar>
				</AppBar>
				<TextField
					required
					autoFocus
					id="standard-required"
					label="Title"
					className={classes.textField}
					margin="normal"
				/>
				<Divider />
				<TextField
					required
					multiline
					rows={20}
					id="outlined-email-input"
					label="Notes"
					className={classes.textField}
					name="notes"
					margin="normal"
					variant="outlined"
				/>
			</Dialog>
		</div>
	);
}

export default withStyles(styles)(Form);
