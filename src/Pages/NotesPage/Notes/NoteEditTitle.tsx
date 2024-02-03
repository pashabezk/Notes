import React, {useRef, useState} from "react";
import {useIntl} from "react-intl";
import styles from "./Notes.module.css";
import {useOnClickOutside} from "../../../Shared/Hooks/UseOnClickOutside";
import notesStorage from "../../../Features/Notes/NotesStorage";

interface NoteEditTitleProps {
	noteId: string;
	initialTitle: string;
	onClickOutside: () => void;
	backgroundColor: string;
}

/** Component represents input for title edit */
const NoteEditTitle = ({
	noteId,
	initialTitle,
	onClickOutside = () => {},
	backgroundColor
}: NoteEditTitleProps) => {
	const {updateNote} = notesStorage;
	const [title, setTitle] = useState(initialTitle);
	const titleRef = useRef(null);
	const intl = useIntl();

	useOnClickOutside(titleRef, () => {
		updateNote(noteId, {title});
		onClickOutside();
	});

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setTitle(e.target.value);
	};

	return (
		<input
			placeholder={intl.formatMessage({id: "note_title_placeholder"})}
			value={title}
			className={styles.noteTitle + " " + styles.noteTitleInput}
			style={{backgroundColor: backgroundColor}}
			ref={titleRef}
			onChange={onChange}
			autoFocus={true}
		/>
	);
};

export default NoteEditTitle;
