/**
 * Function to add zero if number less than 9
 * @param n number
 */
const addZero = (n: number): string => {
	return n < 10 ? ("0" + n) : n.toString();
}

/**
 * Return date in DD.MM.YYYY format
 * @param date default: new Date()
 */
export const dateToDMY = (date: Date = new Date()): string => {
	return addZero(date.getDate()) + "." + addZero(date.getMonth() + 1) + "." + date.getFullYear();
}

/**
 * Return time in HH:MM format
 * @param datetime default: new Date()
 */
export const dateToHM = (datetime: Date = new Date()): string => {
	return addZero(datetime.getHours()) + ":" + addZero(datetime.getMinutes());
}

/**
 * Return date in HH:MM DD.MM.YYYY format
 * @param datetime default: new Date()
 * @param timeFirst true: HH:MM DD.MM.YYYY, false: DD.MM.YYYY HH:MM
 */
export const dateToDateTime = (
	datetime: Date = new Date(),
	timeFirst: boolean = true
): string => {
	return timeFirst
		? (dateToHM(datetime) + " " + dateToDMY(datetime))
		: (dateToDMY(datetime) + " " + dateToHM(datetime));
}
