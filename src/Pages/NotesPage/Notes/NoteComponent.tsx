import React, {useRef, useState} from "react";
import {BgColorsOutlined, ClockCircleOutlined, DeleteOutlined} from "@ant-design/icons";
import styles from "./Notes.module.css";
import {Note} from "../../../Features/Notes/Types";
import {dateToDateTime} from "../../../Features/DateTimeUtils/DateTimeUtils";
import NoteEditTitle from "./NoteEditTitle";
import NoteEditText from "./NoteEditText";
import notesStorage from "../../../Storages/NotesStorage";

interface NoteComponentProps {
	note: Note
}

const secondaryIconsStyle = {
	color: "var(--secondary-text-color)",
	fontSize: "var(--font-size-smaller)"
};

/** Component represent one note */
const NoteComponent = ({note}: NoteComponentProps) => {
	const [isTitleEdit, setIsTitleEdit] = useState(false);
	const [isTextEdit, setIsTextEdit] = useState(false);
	const [textHeight, setTextHeight] = useState(30); // for setting textarea height
	const textRef = useRef<HTMLPreElement>(null);
	const {deleteNote, updateNote} = notesStorage;

	const setTextToEditMode = () => {
		setTextHeight(textRef.current?.scrollHeight || 30);
		setIsTextEdit(true);
	};

	const onColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		updateNote(note.id, {color: e.target.value});
	}

	return (
		<div
			className={styles.noteContainer}
			style={{
				backgroundColor: note.color,
				borderColor: note.borderColor
			}}
		>
			{
				isTitleEdit ? (
					<NoteEditTitle
						noteId={note.id}
						initialTitle={note.title}
						onClickOutside={() => setIsTitleEdit(false)}
						backgroundColor={note.borderColor}
					/>
				) : (
					<h4
						className={styles.noteTitle}
						onClick={() => setIsTitleEdit(true)}
					>
						{note.title || "Добавьте заголовок"}
					</h4>
				)
			}
			{
				isTextEdit ? (
					<NoteEditText
						noteId={note.id}
						initialText={note.text}
						onClickOutside={() => setIsTextEdit(false)}
						backgroundColor={note.borderColor}
						textHeight={textHeight}
					/>
				) : (
					<pre
						ref={textRef}
						onClick={setTextToEditMode}
						className={"scrollbar " + styles.noteText}
					>
						{note.text || "Нажмите, чтобы добавить текст"}
					</pre>
				)
			}
			<div className={styles.noteBottomBar}>
				<ClockCircleOutlined style={secondaryIconsStyle}/>
				<p className={styles.noteDate}>{dateToDateTime(note.creationDate)}</p>
				<div className={styles.iconContainer} style={{position: "relative"}}>
					<input type="color" onChange={onColorChange} className={styles.hiddenColorPicker}/>
					<BgColorsOutlined style={secondaryIconsStyle}/>
				</div>
				<div className={styles.iconContainer}>
					<DeleteOutlined
						style={secondaryIconsStyle}
						onClick={() => deleteNote(note.id)}
					/>
				</div>
			</div>
		</div>
	);
};

export default NoteComponent;
