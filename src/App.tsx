import React, {useEffect} from "react";
import {observer} from "mobx-react-lite";
import {IntlProvider} from "react-intl";
import AppHeader from "./Shared/Layout/Header/AppHeader";
import AppFooter from "./Shared/Layout/Footer/AppFooter";
import NotesPage from "./Pages/NotesPage/NotesPage";
import {messages} from "./Features/Languages/Messages";
import {DEFAULT_LANG, LANGUAGES} from "./Features/Languages/Constants";
import languageStorage from "./Features/Languages/LanguageStorage";

const App = observer(() => {
	const {language, setLanguage} = languageStorage;

	useEffect(() => {
		// get language from local storage
		const localStorageLang = localStorage.getItem("language");
		if (localStorageLang) {
			setLanguage(localStorageLang as LANGUAGES);
		} else {
			// else try to auto detect user locale
			for (let lang of navigator.languages as LANGUAGES[]) {
				if (Object.values(LANGUAGES).includes(lang)) {
					setLanguage(lang);
					localStorage.setItem("language", lang);
					break;
				}
			}
		}
	}, []);

	return (
		<IntlProvider
			locale={language}
			defaultLocale={DEFAULT_LANG}
			messages={messages[language]}
		>
			<div className="app-wrapper">
				<AppHeader/>
				<main>
					<NotesPage/>
				</main>
				<AppFooter/>
			</div>
		</IntlProvider>
	);
});

export default App;
