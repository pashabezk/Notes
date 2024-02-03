import React from "react";
import {observer} from "mobx-react-lite";
import {IntlProvider} from "react-intl";
import AppHeader from "./Shared/Layout/Header/AppHeader";
import AppFooter from "./Shared/Layout/Footer/AppFooter";
import NotesPage from "./Pages/NotesPage/NotesPage";
import {messages} from "./Features/Languages/Messages";
import {DEFAULT_LANG} from "./Features/Languages/Constants";
import languageStorage from "./Features/Languages/LanguageStorage";

const App = observer(() => {
	const {language} = languageStorage;
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
