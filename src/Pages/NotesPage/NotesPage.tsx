import React from "react";
import {Button} from "antd";
import {FileAddOutlined} from "@ant-design/icons";
import {FormattedMessage} from "react-intl";
import styles from "./NotesPage.module.css"
import NotesContainer from "./Notes/NotesContainer";
import notesStorage from "../../Features/Notes/NotesStorage";

const NotesPage = () => {
	const {createNote} = notesStorage;
	return (
		<div className={styles.notesPageWrapper}>
			<div className={styles.notesPageHeader}>
				<h1>
					<FormattedMessage id="notes_page_header"/>
				</h1>
				<Button type="primary" icon={<FileAddOutlined/>} onClick={() => createNote()}>
					<span><FormattedMessage id="add_note_btn"/></span>
				</Button>
			</div>
			<NotesContainer/>
		</div>
	);
};

export default NotesPage;
