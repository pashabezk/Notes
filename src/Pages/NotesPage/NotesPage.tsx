import React from "react";
import {Button} from "antd";
import {FileAddOutlined} from "@ant-design/icons";
import styles from "./NotesPage.module.css"
import NotesContainer from "./Notes/NotesContainer";
import notesStorage from "../../Storages/NotesStorage";

const NotesPage = () => {
	const {createNote} = notesStorage;
	return (
		<div className={styles.notesPageWrapper}>
			<h1>Notes</h1>
			<Button type="primary" icon={<FileAddOutlined/>} onClick={() => createNote()}>Добавить</Button>
			<NotesContainer/>
		</div>
	);
};

export default NotesPage;
