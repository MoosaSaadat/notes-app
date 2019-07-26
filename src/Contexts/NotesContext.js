import React, { createContext, useState } from "react";
import dummyNotes from "../dummyNotes";
import { getKeyValue } from "../helperFunctions";

const NotesContext = createContext();

function NotesProvider (props) {
	const initialNotes =
		window.localStorage.getItem("notes") !== null
			? JSON.parse(window.localStorage.getItem("notes"))
			: dummyNotes;
	const [ notes, setNotes ] = useState(initialNotes);

	function saveUpdatedNote (newNote) {
		setNotes(
			notes.map((item) => {
				if (item.key === newNote.key) return newNote;
				return item;
			})
		);
	}
	function deleteNote (id) {
		setNotes(notes.filter((item) => item.key !== id));
	}
	function addNote (newNote) {
		console.log("Adding", newNote);
		setNotes([ ...notes, { ...newNote, key: getKeyValue(notes) } ]);
	}

	return (
		<NotesContext.Provider
			value={{ notes, saveUpdatedNote, deleteNote, addNote }}>
			{props.children}
		</NotesContext.Provider>
	);
}

export { NotesContext, NotesProvider };
