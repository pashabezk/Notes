import React from "react";
import styles from "./Header.module.css"
import {FileTextFilled} from "@ant-design/icons";

/** Header component */
const AppHeader = () => {
	return (
		<header className={styles.mainHeader}>
			<div className={"center1000px " + styles.centeredMainHeader}>
				<div className={styles.logoContainer}>
					<FileTextFilled style={{fontSize: "32px"}}/>
					<h1>Notes</h1>
				</div>
			</div>
		</header>
	);
};

export default AppHeader;
