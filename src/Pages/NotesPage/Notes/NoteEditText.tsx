import React, {useRef, useState} from "react";
import {useIntl} from "react-intl";
import styles from "./Notes.module.css";
import {useOnClickOutside} from "../../../Shared/Hooks/UseOnClickOutside";
import notesStorage from "../../../Features/Notes/NotesStorage";

interface NoteEditTextProps {
	noteId: string;
	initialText: string;
	onClickOutside: () => void;
	backgroundColor: string;
	textHeight: number;
}

/** Component represents textarea for note text edit */
const NoteEditText = ({noteId, initialText, onClickOutside = () => {}, backgroundColor, textHeight}: NoteEditTextProps) => {
	const {updateNote} = notesStorage;
	const [text, setText] = useState(initialText);
	const [height, setHeight] = useState(textHeight);
	const ref = useRef<HTMLTextAreaElement>(null);
	const intl = useIntl();

	useOnClickOutside(ref, () => {
		updateNote(noteId, {text});
		onClickOutside();
	});

	const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setText(e.target.value);
		setHeight(ref.current?.scrollHeight || textHeight);
	};

	return (
		<textarea
			name="note_text"
			placeholder={intl.formatMessage({id: "note_text_placeholder"})}
			value={text}
			className={styles.noteText + " " + styles.noteTextArea}
			style={{
				backgroundColor: backgroundColor,
				height: height + "px",
			}}
			ref={ref}
			onChange={onChange}
			autoFocus={true}
		/>
	);
};

export default NoteEditText;
