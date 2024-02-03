import {makeAutoObservable} from "mobx";
import {DEFAULT_LANG, LANGUAGES} from "./Constants";

/** Class to store language locale state */
class LanguageStorage {
	/** Current locale */
	language: LANGUAGES = DEFAULT_LANG;

	constructor() {
		makeAutoObservable(this);
	}

	/**
	 * Method to set new locale
	 * @param loc locale to set
	 */
	setLocale = (loc: LANGUAGES) => {
		this.language = loc;
	}
}

const languageStorage = new LanguageStorage();
export default languageStorage;
