import React, {useRef, useState} from "react";
import styles from "./Notes.module.css";
import {useOnClickOutside} from "../../../Shared/Hooks/UseOnClickOutside";

interface NoteEditTextProps {
	initialText: string;
	onClickOutside: () => void;
	backgroundColor: string;
}

/** Component represents textarea for note text edit */
const NoteEditText = ({initialText, onClickOutside, backgroundColor}: NoteEditTextProps) => {
	const [text, setText] = useState(initialText);
	const ref = useRef(null);

	useOnClickOutside(ref, onClickOutside);

	const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setText(e.target.value);
	};

	return (
		<textarea
			placeholder="Введите заголовок"
			value={text}
			className={"scrollbar " + styles.noteText + " " + styles.noteTextArea}
			style={{backgroundColor: backgroundColor}}
			ref={ref}
			onChange={onChange}
			autoFocus={true}
		/>
	);
};

export default NoteEditText;
