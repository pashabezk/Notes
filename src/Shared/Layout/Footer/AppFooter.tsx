import React from "react";
import styles from "./Footer.module.css"

/** Footer component */
const AppFooter = () => {
	return (
		<footer>
			<div className={styles.mainFooterCentered}>
				<div className={"center1000px " + styles.mainFooter}>
					<p>
						Created by{" "}
						<a href="https://pashabezk.github.io/MainPage" target="_blank" rel="noreferrer">pashabezk</a>
					</p>
				</div>
			</div>
		</footer>
	);
};

export default AppFooter;
