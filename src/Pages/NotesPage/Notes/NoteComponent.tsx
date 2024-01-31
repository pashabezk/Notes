import React from "react";
import {Note} from "../../../Features/Notes/Types";
import styles from "./Notes.module.css";

interface NoteProps {
	note: Note
}

const NoteComponent = ({note}: NoteProps) => {
	return (
		<div className={styles.noteContainer}>
			<p>{note.title}</p>
			<p>{note.text}</p>
			<p>{note.creationDate.toDateString()}</p>
		</div>
	);
};

export default NoteComponent;
