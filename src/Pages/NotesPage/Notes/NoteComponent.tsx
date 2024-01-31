import React, {useState} from "react";
import {ClockCircleOutlined} from "@ant-design/icons";
import styles from "./Notes.module.css";
import {Note} from "../../../Features/Notes/Types";
import {dateToDateTime} from "../../../Features/DateTimeUtils/DateTimeUtils";
import NoteEditTitle from "./NoteEditTitle";
import NoteEditText from "./NoteEditText";

interface NoteComponentProps {
	note: Note
}

/** Component represent one note */
const NoteComponent = ({note}: NoteComponentProps) => {
	const [isTitleEdit, setIsTitleEdit] = useState(false);
	const [isTextEdit, setIsTextEdit] = useState(false);

	return (
		<div
			className={styles.noteContainer}
			style={{
				backgroundColor: note.color,
				borderColor: note.borderColor
			}}
		>
			{
				isTitleEdit
					? (
						<NoteEditTitle
							initialTitle={note.title}
							onClickOutside={() => setIsTitleEdit(false)}
							backgroundColor={note.borderColor}
						/>
					) : (
						<h4
							className={styles.noteTitle}
							onClick={() => setIsTitleEdit(true)}
						>
							{note.title}
						</h4>
					)
			}
			{
				isTextEdit
					? (
						<NoteEditText
							initialText={note.text}
							onClickOutside={() => setIsTextEdit(false)}
							backgroundColor={note.borderColor}
						/>
					)
					: <p onClick={() => setIsTextEdit(true)} className={styles.noteText}>{note.text}</p>
			}
			<div className={styles.noteDateContainer}>
				<ClockCircleOutlined
					style={{
						color: "var(--secondary-text-color)",
						fontSize: "var(--font-size-smaller)"
					}}
				/>
				<p className={styles.noteDate}>{dateToDateTime(note.creationDate)}</p>
			</div>
		</div>
	);
};

export default NoteComponent;
