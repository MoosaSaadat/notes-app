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
		height: "7.5rem",
		overflow: "hidden",
		textAlign: "justify",
		marginRight: "-1rem",
		paddingRight: "1rem",
		"&:before": {
			content: "'...'",
			position: "absolute",
			right: "1rem",
			bottom: "0.2rem",
			background: "white",
			fontSize: "1.5rem",
			padding: "0 1.5rem 0 .5rem",
			boxShadow: "0px 2px 5px 0px white"
		},
		"&:after": {
			content: "'...'",
			position: "absolute",
			right: "1rem",
			padding: "0 1.5rem 0 .5rem",
			marginTop: "1.5rem",
			background: "white",
			height: "6rem",
			fontSize: "1.5rem",
			color: "white"
		}
	},
	container: {
		height: "7.5rem"
	}
});
