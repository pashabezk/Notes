/** Describes note data */
export interface Note {
	id: string;
	title: string;
	text: string;
	color: string;
	borderColor: string;
	creationDate: Date;
}

/** Describes note draft data */
export type NoteDraft = Partial<Omit<Note, "id">>;

/** Board is something similar to note folder */
export interface Board {
	name: string;
	description: string;
	notes: Note[];
}

/** Describes data saved to local storage */
export interface NotesFromStorage {
	/** Dashboards stores notes */
	boards: Board[];

	/** File markup version */
	version: number;
}

