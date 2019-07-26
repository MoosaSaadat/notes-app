import React, { useContext } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Icon from "@material-ui/core/Icon";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import EventNoteIcon from "@material-ui/icons/EventNote";
import NoteAddIcon from "@material-ui/icons/NoteAdd";
import { withStyles } from "@material-ui/core/styles";
import styles from "../Styles/Navbar";
import { FormContext } from "../Contexts/FormContext";

function Navbar (props) {
	const { classes } = props;
	const { toggleOpen } = useContext(FormContext);
	return (
		<div className={classes.root}>
			<AppBar position="static">
				<Toolbar>
					<Icon
						className={classes.menuButton}
						color="inherit"
						aria-label="Logo Icon">
						<EventNoteIcon />
					</Icon>
					<Typography className={classes.title} variant="h6" noWrap>
						My Notes
					</Typography>
					<Button
						className={classes.addButton}
						variant="contained"
						color="default"
						onClick={toggleOpen}>
						<NoteAddIcon className={classes.leftIcon} />
						Add New
					</Button>
				</Toolbar>
			</AppBar>
		</div>
	);
}

export default withStyles(styles)(Navbar);
