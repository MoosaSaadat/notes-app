import React from "react";
import {
	Card,
	CardContent,
	Typography,
	CardHeader,
	IconButton
} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

function NotesItem (props) {
	return (
		<Card style={{ marginTop: "40px" }}>
			<CardHeader
				title="Hello World"
				subheader="September 12, 2019"
				action={
					<React.Fragment>
						<IconButton aria-label="Edit">
							<EditIcon />
						</IconButton>
						<IconButton aria-label="Delete">
							<DeleteIcon />
						</IconButton>
					</React.Fragment>
				}
			/>
			<CardContent>
				<Typography varaint="body2">
					Contrary to popular belief, Lorem Ipsum is not simply random text. It
					has roots in a piece of classical Latin literature from 45 BC, making
					it over 2000 years old. Richard McClintock, a Latin professor at
					Hampden-Sydney College in Virginia, looked up one of the more obscure
					Latin words, consectetur, from a Lorem Ipsum passage, and going
					through the cites of the word in classical literature, discovered the
					undoubtable source.
				</Typography>
			</CardContent>
		</Card>
	);
}

export default NotesItem;
