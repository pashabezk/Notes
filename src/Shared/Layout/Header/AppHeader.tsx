import React from "react";
import {FileTextFilled} from "@ant-design/icons";
import styles from "./Header.module.css"
import LanguageSelector from "../../../Features/Languages/LanguageSelector/LanguageSelector";


/** Header component */
const AppHeader = () => {
	return (
		<header className={styles.mainHeader}>
			<div className={"center1000px " + styles.centeredMainHeader}>
				<div className={styles.logoContainer}>
					<FileTextFilled style={{fontSize: "32px"}}/>
					<h1>Notes</h1>
				</div>
				<LanguageSelector/>
			</div>
		</header>
	);
};

export default AppHeader;
