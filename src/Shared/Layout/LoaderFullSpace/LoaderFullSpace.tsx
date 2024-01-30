import React from "react";
import {Spin} from "antd";
import styles from "./LoaderFullSpace.module.css"
import {SpinSize} from "antd/es/spin";

/**
 * Component with spin that shows loading state
 * @param {string} [message="Загрузка"] message under spin
 * @param {SpinSize} [size="large"] spin size
 * @component
 */
const LoaderFullSpace = ({message = "Загрузка", size = "large"}: { message?: string, size?: SpinSize }) => {
	return (
		<div className={styles.loadingContainer}>
			<Spin tip={message} size={size} className={styles.loader}/>
		</div>
	);
};

export default LoaderFullSpace;
