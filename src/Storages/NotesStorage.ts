import {makeAutoObservable} from "mobx";
import {v4 as uuid} from "uuid";
import {Note, NoteDraft} from "../Features/Notes/Types";
import {DEFAULT_NOTE_COLOR} from "../Features/Notes/Constants";
import makeShade from "../Features/ColorUtils/MakeShade";

class NotesStorage {
	notes: Note[] = [];

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
			title: "Hello",
			text: "Lorem ipsum",
			color: DEFAULT_NOTE_COLOR,
			borderColor: "",
			creationDate: new Date(),
			...noteDraft,
			id: uuid()
		};
		if (newNote.borderColor === "") {
			newNote.borderColor = makeShade(newNote.color, -30);
		}
		this.addNote(newNote);
	}

	/** Method to delete note from storage */
	deleteNote = (id: string) => {
		this.notes = this.notes.filter((note) => note.id !== id);
	}
}

const notesStorage = new NotesStorage();
export default notesStorage;
