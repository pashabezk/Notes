import {makeAutoObservable} from "mobx";
import {DEFAULT_LANG, LANGUAGES} from "./Constants";
import {LS_LANGUAGE} from "../../Shared/LocalStorageConstants";

/** Class to store language locale state */
class LanguageStorage {
	/** Current locale */
	language: LANGUAGES = DEFAULT_LANG;

	constructor() {
		makeAutoObservable(this);
	}

	/**
	 * Method to set new locale and save it to localStorage
	 * @param lang language locale to set
	 */
	setLanguage = (lang: LANGUAGES) => {
		this.language = lang;
		localStorage.setItem(LS_LANGUAGE, lang); // save to local storage
		document.documentElement.lang = lang; // set html property lang
	}
}

const languageStorage = new LanguageStorage();
export default languageStorage;
