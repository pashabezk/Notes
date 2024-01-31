/** Describes note data */
export interface Note {
	id: string;
	title: string;
	text: string;
	color: string;
	creationDate: Date;
}

/** Describes note draft data */
export type NoteDraft = Partial<Omit<Note, "id">>;
