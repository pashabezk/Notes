import {LS_NOTES} from "../../../Shared/LocalStorageConstants";
import {Note, NotesFromStorage} from "../Types";
import {defaultNoteSaveData} from "./DefaultSaveNoteData";

/** Function to load notes from local storage */
const loadNotes = (): Note[] => {
	const notes: NotesFromStorage = JSON.parse(localStorage.getItem(LS_NOTES) || "null") || defaultNoteSaveData;

	// need to convert data string to data object
	notes.boards = notes.boards.map((board) => {
		board.notes = board.notes.map((note) => {
			note.creationDate = new Date(note.creationDate);
			return note;
		});
		return board;
	});

	return notes.boards[0].notes;
};

export default loadNotes;
