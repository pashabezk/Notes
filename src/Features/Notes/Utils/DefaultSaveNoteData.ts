import {NotesFromStorage} from "../Types";

export const LAST_MARKUP_VERSION = 1;

/**
 * This object uses as a template for save data markup.
 * Currently, there is only one board in the project, but for future compatibility has been added the ability to create multiple boards
 */
export const defaultNoteSaveData: NotesFromStorage = {
	boards: [{
		name: "My notes",
		description: "Default board",
		notes: [],
	}],
	version: LAST_MARKUP_VERSION,
};
