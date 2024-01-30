import React from "react";
import styles from "./Header.module.css"

/** Header component */
const AppHeader = () => {
	return (
		<header className={styles.mainHeader}>
			<div className={"center1000px " + styles.centeredMainHeader}>
				<div className={styles.logoContainer}>
					{/*<img src={logo} alt="logo"/>*/}
					<h1>Notes</h1>
				</div>
			</div>
		</header>
	);
};

export default AppHeader;
