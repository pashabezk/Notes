import React from "react";
import {ExperimentOutlined} from "@ant-design/icons";
import styles from "./LanguageSelector.module.css";
import {LANGUAGES} from "../Constants";
import languageStorage from "../LanguageStorage";
import FlagImg from "./FlagImg";

interface SelectorLabelProps {
	language: LANGUAGES;
	languageStr: string;
	isExperimental?: boolean;
}

/** Component represent language in language selector */
const SelectorLabel = ({language, languageStr, isExperimental = false}: SelectorLabelProps) => {
	const {setLocale} = languageStorage;
	return (
		<p className={styles.selectorLabel} onClick={() => setLocale(language)}>
			<FlagImg lang={language}/>
			{languageStr}
			{isExperimental && <ExperimentOutlined/>}
		</p>
	);
};

export default SelectorLabel;
