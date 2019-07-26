import React, { useState } from "react";

const emptyNote = {
	key: "",
	title: "",
	date: "",
	content: ""
};

export function useSingleNoteState (initialVal = emptyNote) {
	const [ note, setNote ] = useState(initialVal);
	function handleChange (e) {
		setNote({
			...note,
			[e.target.name]: e.target.value
		});
	}
	function reset (e) {
		setNote(emptyNote);
	}
	return [ note, setNote, handleChange, reset ];
}
