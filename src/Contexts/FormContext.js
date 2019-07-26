import React, { createContext, useState, useContext } from "react";
import { getFormDate, getKeyValue, getNotesValue } from "../helperFunctions";
import { NotesContext } from "./NotesContext";

const FormContext = createContext();
function FormProvider (props) {
	const { notes } = useContext(NotesContext);
	console.log(notes);
	const [ note, setNote ] = useState({
		key: getKeyValue(notes),
		title: "",
		date: getFormDate(),
		notes: ""
	});
	const [ isNew, setIsNew ] = useState(true);
	const [ open, setOpen ] = useState(false);
	function toggleOpen () {
		setOpen(!open);
	}
	function openEditor (id) {
		setNote(getNotesValue(id, notes)[0]);
		setIsNew(false);
		toggleOpen();
	}
	return (
		<FormContext.Provider
			value={{ note, setNote, open, toggleOpen, isNew, setIsNew, openEditor }}>
			{props.children}
		</FormContext.Provider>
	);
}

export { FormContext, FormProvider };
