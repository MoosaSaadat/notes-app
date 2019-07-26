import React, { useState } from "react";
import dummyNotes from "../dummyNotes";
import { getKeyValue } from "../helperFunctions";

const initialNotes =
	window.localStorage.getItem("notes") !== null
		? JSON.parse(window.localStorage.getItem("notes"))
		: dummyNotes;

export function useMultipleNotesState (initVal = initialNotes) {
	const [ list, setList ] = useState(initVal);
	function addNote (newNote) {
		setList([ ...list, { ...newNote, key: getKeyValue(list) } ]);
	}
	function updateNote (updatedNote) {
		setList(
			list.map((item) => {
				if (item.key === updatedNote.key) return updatedNote;
				return item;
			})
		);
	}
	function deleteNote (id) {
		setList(list.filter((item) => item.key !== id));
	}
	return [ list, addNote, updateNote, deleteNote ];
}
