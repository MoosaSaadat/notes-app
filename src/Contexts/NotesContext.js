import React, { createContext, useState } from "react";
import { useMultipleNotesState } from "../Hooks/useMultipleNotesState";

const NotesContext = createContext();

function NotesProvider (props) {
	const [ list, addNote, updateNote, deleteNote ] = useMultipleNotesState();

	return (
		<NotesContext.Provider value={{ list, addNote, updateNote, deleteNote }}>
			{props.children}
		</NotesContext.Provider>
	);
}

export { NotesContext, NotesProvider };
