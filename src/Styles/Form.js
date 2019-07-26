export default (theme) => ({
	appBar: {
		position: "relative"
	},
	title: {
		marginLeft: theme.spacing(2),
		flex: 1,
		display: "none",
		[theme.breakpoints.up("sm")]: {
			display: "block"
		}
	},
	saveButton: {
		marginLeft: "auto"
	},
	textField: {
		marginLeft: theme.spacing(1),
		marginRight: theme.spacing(1)
	},
	contentBox: {
		marginLeft: theme.spacing(1),
		marginRight: theme.spacing(1),
		width: `calc(100% - ${theme.spacing(2)}px)`
	}
});
