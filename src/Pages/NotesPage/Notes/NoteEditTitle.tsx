import React, {useRef, useState} from "react";
import styles from "./Notes.module.css";
import {useOnClickOutside} from "../../../Shared/Hooks/UseOnClickOutside";

interface NoteEditTitleProps {
	initialTitle: string;
	onClickOutside: () => void;
	backgroundColor: string
}

/** Component represents input for title edit */
const NoteEditTitle = ({initialTitle, onClickOutside, backgroundColor}: NoteEditTitleProps) => {
	const [title, setTitle] = useState(initialTitle);
	const titleRef = useRef(null);

	useOnClickOutside(titleRef, onClickOutside);

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setTitle(e.target.value);
	};

	return (
		<input
			placeholder="Введите заголовок"
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
