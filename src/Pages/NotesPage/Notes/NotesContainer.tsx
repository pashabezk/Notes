import React from "react";
import {observer} from "mobx-react-lite";
import notesStorage from "../../../Storages/NotesStorage";
import NoteComponent from "./NoteComponent";

const NotesContainer = observer(() => {
	const {notes} = notesStorage;
	return (
		<div>
			{notes.map((note) => <NoteComponent key={note.id} note={note}/>)}
		</div>
	);
});

export default NotesContainer;
