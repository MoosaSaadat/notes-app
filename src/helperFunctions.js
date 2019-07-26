function getCustomDate (date) {
	let mydate = new Date(date);
	let month = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December"
	][mydate.getMonth()];
	let str = `${month} ${mydate.getDate()}, ${mydate.getFullYear()}`;
	return str;
}

function getFormDate () {
	let myDate = new Date();
	if (myDate.getMonth() < 10)
		return `${myDate.getFullYear()}-0${myDate.getMonth()}-${myDate.getDate()}`;
	return `${myDate.getFullYear()}-${myDate.getMonth()}-${myDate.getDate()}`;
}

function getKeyValue (list) {
	console.log(list);
	console.log(list.length, list[list.length - 1]);
	return list[list.length - 1].key + 1;
}

function getNotesValue (id, list) {
	return list.filter((item) => item.key === id);
}

export { getCustomDate, getFormDate, getKeyValue, getNotesValue };
