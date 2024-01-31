import {makeAutoObservable} from "mobx";
import {v4 as uuid} from "uuid";
import {Note, NoteDraft} from "../Features/Notes/Types";
import {DEFAULT_NOTE_COLOR} from "../Features/Notes/Constants";

class NotesStorage {
	notes: Note[] = [{
		id: "first",
		color: "",
		title: "",
		text: "",
		creationDate: new Date(),
	}];

	constructor() {
		makeAutoObservable(this);
	}

	/** Method to add note to storage */
	addNote = (newNote: Note) => {
		this.notes.push(newNote);
	}

	/** Method to create new note and add it to storage */
	createNote = (noteDraft: NoteDraft = {}) => {
		const newNote: Note = {
			text: "",
			title: "",
			color: DEFAULT_NOTE_COLOR,
			creationDate: new Date(),
			...noteDraft,
			id: uuid()
		};
		this.addNote(newNote);
	}

	/** Method to delete note from storage */
	deleteNote = (id: string) => {
		this.notes = this.notes.filter((note) => note.id !== id);
	}
}

const notesStorage = new NotesStorage();
export default notesStorage;
