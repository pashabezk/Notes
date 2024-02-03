import {makeAutoObservable} from "mobx";
import {v4 as uuid} from "uuid";
import {Note, NoteDraft} from "./Types";
import {DEFAULT_NOTE_COLOR} from "./Constants";
import makeShade from "../ColorUtils/MakeShade";
import languageStorage from "../Languages/LanguageStorage";
import {messages} from "../Languages/Messages";

class NotesStorage {
	notes: Note[] = [];

	constructor() {
		makeAutoObservable(this);
	}

	/** Method to get note by id */
	getNote = (noteId: string): Note | undefined => {
		return this.notes.find((note) => note.id === noteId);
	}

	/** Method to add note to storage */
	addNote = (newNote: Note) => {
		this.notes.push(newNote);
	}

	/** Method to create new note and add it to storage */
	createNote = (noteDraft: NoteDraft = {}) => {
		const {language} = languageStorage;
		const newNote: Note = {
			title: messages[language].new_note_title,
			text: "",
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

	/**
	 * Method to update note
	 * @param noteId id of note that should be updated
	 * @param noteDraft set values that should be updated
	 */
	updateNote = (noteId: string, noteDraft: NoteDraft = {}) => {
		const note = this.getNote(noteId) as Note;
		if (!note) {
			return;
		}
		const newNote: Note = {
			...note,
			...noteDraft
		};
		if (noteDraft.color && !noteDraft.borderColor) {
			newNote.borderColor = makeShade(newNote.color, -30);
		}
		this.notes = this.notes.map((n) => n.id === noteId ? newNote : n);
	};
}

const notesStorage = new NotesStorage();
export default notesStorage;
