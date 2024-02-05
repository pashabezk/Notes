import React from "react";
import styles from "./Notes.module.css";
import {Note} from "../../../Features/Notes/Types";
import {IntlShape} from "react-intl";

interface ConfirmDeleteBodyProps {
	note: Note;

	/** Intl object to set formatted message */
	intl: IntlShape;
}

/** Component represents body for confirm delete modal */
const ConfirmDeleteBody = ({note, intl}: ConfirmDeleteBodyProps) => {
	let shortText = "";
	const words = note.text.split(" ");
	for (const word of words) {
		if (shortText.length < 200) {
			shortText += " " + word;
		} else {
			break;
		}
	}
	if (shortText.length < note.text.length) {
		shortText += "…";
	}

	return (
		<>
			<div
				className={styles.confirmDeleteNoteBody}
				style={{borderColor: note.borderColor}}
			>
				<h4>{note.title}</h4>
				<p>{shortText}</p>
			</div>
			<i>{intl.formatMessage({id: "confirm_delete_subtitle"})}</i>
		</>
	);
};

export default ConfirmDeleteBody;
