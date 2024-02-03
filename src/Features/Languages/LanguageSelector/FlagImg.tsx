import React from "react";
import styles from "./LanguageSelector.module.css";
import {LANGUAGES} from "../Constants";
import gbFlag from "../../../Assets/Flags/Gb.svg";
import ruFlag from "../../../Assets/Flags/Ru.svg";
import deFlag from "../../../Assets/Flags/De.svg";

/** Component with flag */
const FlagImg = ({lang}: {lang: LANGUAGES}) => {
	let flagSrc, flagAlt;
	switch (lang) {
		case(LANGUAGES.ENGLISH):
			flagSrc = gbFlag;
			flagAlt = "";
			break;
		case(LANGUAGES.RUSSIAN):
			flagSrc = ruFlag;
			flagAlt = "";
			break;
		case(LANGUAGES.GERMAN):
			flagSrc = deFlag;
			flagAlt = "";
			break;
	}
	return <img className={styles.flagImg} src={flagSrc} alt={flagAlt}/>;
};

export default FlagImg;
