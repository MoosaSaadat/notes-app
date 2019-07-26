export default (theme) => ({
	editButton: {
		"&:hover": {
			color: theme.palette.primary.main
		}
	},
	deleteButton: {
		"&:hover": {
			color: theme.palette.secondary.main
		}
	},
	itemContent: {
		whiteSpace: "pre-wrap",
		position: "relative",
		lineHeight: "1.5rem",
		maxHeight: "7.5rem",
		overflow: "hidden",
		textAlign: "justify",
		marginRight: "-1rem",
		paddingRight: "1rem",
		"&:before": {
			content: "'...'",
			fontSize: "1.5rem",
			position: "absolute",
			right: "1rem",
			bottom: "0.2rem",
			background: "white",
			padding: "0 1.5rem 0 .5rem"
			// boxShadow: "-15px 0px 5px 15px white"
		},
		"&:after": {
			background: "white",
			content: "'...'",
			fontSize: "1.5rem",
			position: "absolute",
			padding: "0 1.5rem 0 .5rem",
			right: "1rem",
			boxShadow: "none",
			color: "white"
		}
	},
	container: {
		[theme.breakpoints.up("sm")]: {
			height: "7.5rem"
		}
	}
});
