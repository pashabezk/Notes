import React from "react";
import AppHeader from "./Shared/Layout/Header/AppHeader";
import AppFooter from "./Shared/Layout/Footer/AppFooter";
import NotesPage from "./Pages/NotesPage/NotesPage";

const App = () => {
	return (
		<div className="app-wrapper">
			<AppHeader/>
			<main>
				<NotesPage/>
			</main>
			<AppFooter/>
		</div>
	);
}

export default App;
