import React from "react";
import {Button, Dropdown, MenuProps} from "antd"
import styles from "./LanguageSelector.module.css"
import {FormattedMessage} from "react-intl";
import languageStorage from "../LanguageStorage";
import {LANGUAGES} from "../Constants";
import SelectorLabel from "./SelectorLabel";
import FlagImg from "./FlagImg";

const langItems: MenuProps["items"] = [
	{
		key: LANGUAGES.ENGLISH,
		label: (<SelectorLabel language={LANGUAGES.ENGLISH} languageStr="English"/>),
	},
	{
		key: LANGUAGES.RUSSIAN,
		label: (<SelectorLabel language={LANGUAGES.RUSSIAN} languageStr="Русский"/>),
	},
	{
		key: LANGUAGES.GERMAN,
		label: (<SelectorLabel language={LANGUAGES.GERMAN} languageStr="Deutsch" isExperimental/>),
	},
];

const LanguageSelector = () => {
	const {language} = languageStorage;
	return (
		<Dropdown
			menu={{
				items: langItems,
				selectable: true,
				defaultSelectedKeys: [language],
			}}
			placement="bottomRight"
			arrow
		>
			<Button ghost>
				<div className={styles.selectorLabel}>
					<FormattedMessage id="language_btn"/>
					<FlagImg lang={language}/>
				</div>
			</Button>
		</Dropdown>
	);
};

export default LanguageSelector;
