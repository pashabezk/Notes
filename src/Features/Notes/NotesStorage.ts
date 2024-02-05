import {makeAutoObservable} from "mobx";
import {v4 as uuid} from "uuid";
import {Note, NoteDraft} from "./Types";
import {DEFAULT_NOTE_COLOR} from "./Constants";
import makeShade from "../ColorUtils/MakeShade";
import languageStorage from "../Languages/LanguageStorage";
import {messages} from "../Languages/Messages";
import loadNotes from "./Utils/LoadNotes";
import saveNotes from "./Utils/SaveNotes";

class NotesStorage {
	notes: Note[] = [];

	constructor() {
		this.notes = loadNotes();
		makeAutoObservable(this);
	}

	/** Method to get note by id */
	getNote = (noteId: string): Note | undefined => {
		return this.notes.find((note) => note.id === noteId);
	}

	/** Method to add note to storage */
	addNote = (newNote: Note) => {
		this.notes.unshift(newNote);
	}

	/** Method to create new note and add it to storage */
	createNote = (noteDraft: NoteDraft = {}) => {
		const {language} = languageStorage;
		const newNote: Note = {
			title: messages[language].new_note_title,
			text: "",
			color: DEFAULT_NOTE_COLOR,
			borderColor: "",
			creationDateTime: new Date(),
			lastModified: new Date(),
			...noteDraft,
			id: uuid()
		};
		if (newNote.borderColor === "") {
			newNote.borderColor = makeShade(newNote.color, -30);
		}
		this.addNote(newNote);
		this.save();
	}

	/** Method to delete note from storage */
	deleteNote = (id: string) => {
		this.notes = this.notes.filter((note) => note.id !== id);
		this.save();
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
			...noteDraft,
			lastModified: new Date(),
		};
		if (noteDraft.color && !noteDraft.borderColor) {
			newNote.borderColor = makeShade(newNote.color, -30);
		}
		this.notes = this.notes.map((n) => n.id === noteId ? newNote : n);
		this.save();
	};

	/** Method to save notes to external storage */
	save = () => {
		saveNotes(this.notes);
	}
}

const notesStorage = new NotesStorage();
export default notesStorage;
