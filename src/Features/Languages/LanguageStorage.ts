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
	 * @param lang language locale to set
	 */
	setLanguage = (lang: LANGUAGES) => {
		this.language = lang;
	}
}

const languageStorage = new LanguageStorage();
export default languageStorage;
