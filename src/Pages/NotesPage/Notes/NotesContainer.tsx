import React from "react";
import {observer} from "mobx-react-lite";
import styles from "./Notes.module.css"
import notesStorage from "../../../Storages/NotesStorage";
import NoteComponent from "./NoteComponent";

const NotesContainer = observer(() => {
	const {notes} = notesStorage;
	return (
		<div className={styles.notesWrapper}>
			{
				notes.length === 0
					? <p>Вы не создали ещё ни одной заметки</p>
					: notes.map((note) => <NoteComponent key={note.id} note={note}/>)
			}
		</div>
	);
});

export default NotesContainer;
