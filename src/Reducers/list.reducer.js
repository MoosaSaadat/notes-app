import { getKeyValue } from "../helperFunctions";

const listReducer = (state, action) => {
	switch (action.type) {
		case "ADD":
			return [ ...state, { ...action.item, key: getKeyValue(state) } ];
		case "UPDATE":
			return state.map((item) => {
				if (item.key === action.item.key) return action.item;
				return item;
			});
		case "DELETE":
			return state.filter((item) => item.key !== action.key);
		default:
			return state;
	}
};

export default listReducer;
