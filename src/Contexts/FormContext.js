import React, { createContext, useContext, useState } from "react";
import { getFormDate, getKeyValue, getNotesValue } from "../helperFunctions";
import { NotesContext } from "./NotesContext";
import { useSingleNoteState } from "../Hooks/useSingleNoteState";

const FormContext = createContext();
function FormProvider (props) {
	const { list } = useContext(NotesContext);
	const currNote = {
		key: getKeyValue(list),
		title: "",
		date: getFormDate(),
		content: ""
	};
	const [ note, setNote, handleChange ] = useSingleNoteState(currNote);
	const [ open, setOpen ] = useState(false);
	const [ isNew, setIsNew ] = useState(true);
	function openEditor (id) {
		setNote(getNotesValue(id, list)[0]);
		setIsNew(false);
		setOpen(true);
	}
	function openForm () {
		setNote(currNote);
		setIsNew(true);
		setOpen(true);
	}
	return (
		<FormContext.Provider
			value={{
				note,
				handleChange,
				open,
				setOpen,
				isNew,
				openEditor,
				openForm
			}}>
			{props.children}
		</FormContext.Provider>
	);
}

export { FormContext, FormProvider };
