import {LS_NOTES} from "../../../Shared/LocalStorageConstants";
import {Note, NotesFromStorage} from "../Types";
import {defaultNoteSaveData} from "./DefaultSaveNoteData";

/** Function to save notes to local storage */
const saveNotes = (notes: Note[]) => {
	const saveData: NotesFromStorage = structuredClone(defaultNoteSaveData);
	saveData.boards[0].notes = notes;
	localStorage.setItem(LS_NOTES, JSON.stringify(saveData));
};

export default saveNotes;
