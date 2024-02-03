import React from "react";
import {observer} from "mobx-react-lite";
import {FormattedMessage} from "react-intl";
import styles from "./Notes.module.css"
import notesStorage from "../../../Features/Notes/NotesStorage";
import NoteComponent from "./NoteComponent";

const NotesContainer = observer(() => {
	const {notes} = notesStorage;
	return (
		<div className={styles.notesWrapper}>
			{
				notes.length === 0
					? <p><FormattedMessage id="no_created_notes"/></p>
					: notes.map((note) => <NoteComponent key={note.id} note={note}/>)
			}
		</div>
	);
});

export default NotesContainer;
