import { useState } from "react";

export function useToggleState (initVal = false) {
	const [ val, setVal ] = useState(initVal);
	function toggle () {
		setVal(!val);
	}
	return [ val, toggle ];
}
