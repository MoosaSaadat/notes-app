import React, { createContext, useReducer } from "react";
import listReducer from "../Reducers/list.reducer";
import dummyNotes from "../dummyNotes";

const NotesContext = createContext();

function NotesProvider (props) {
	const initialNotes =
		window.localStorage.getItem("notes") !== null
			? JSON.parse(window.localStorage.getItem("notes"))
			: dummyNotes;
	const [ list, dispatch ] = useReducer(listReducer, initialNotes);

	return (
		<NotesContext.Provider value={{ list, dispatch }}>
			{props.children}
		</NotesContext.Provider>
	);
}

export { NotesContext, NotesProvider };
