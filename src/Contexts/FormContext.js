import React, { createContext, useContext } from "react";
import { getFormDate, getKeyValue, getNotesValue } from "../helperFunctions";
import { NotesContext } from "./NotesContext";
import { useSingleNoteState } from "../Hooks/useSingleNoteState";
import { useToggleState } from "../Hooks/useToggleState";

const FormContext = createContext();
function FormProvider (props) {
	const { list } = useContext(NotesContext);
	const currNote = {
		key: getKeyValue(list),
		title: "",
		date: getFormDate(),
		notes: ""
	};
	const [ note, setNote, handleChange, reset ] = useSingleNoteState(currNote);
	const [ isNew, setIsNew ] = useToggleState(true);
	const [ open, setOpen ] = useToggleState(false);
	function openEditor (id) {
		setNote(getNotesValue(id, list)[0]);
		setIsNew(false);
		setOpen(true);
	}
	return (
		<FormContext.Provider
			value={{
				note,
				setNote,
				handleChange,
				reset,
				open,
				setOpen,
				isNew,
				setIsNew,
				openEditor
			}}>
			{props.children}
		</FormContext.Provider>
	);
}

export { FormContext, FormProvider };
