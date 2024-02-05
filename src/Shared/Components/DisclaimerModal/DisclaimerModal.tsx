import React, {useEffect, useState} from "react";
import {Button, Checkbox, CheckboxProps, Modal} from "antd";
import {FormattedMessage, useIntl} from "react-intl";
import styles from "./DisclaimerModal.module.css"
import {LS_DISCLAIMER_SHOW} from "../../LocalStorageConstants";

const DisclaimerModal = () => {
	const {formatMessage} = useIntl();
	const [isOpen, setIsOpen] = useState(false);
	const [isTickSelected, setIsTickSelected] = useState(false);

	useEffect(() => {
		// open modal, if user haven't read it
		if (localStorage.getItem(LS_DISCLAIMER_SHOW) !== "false") {
			setIsOpen(true);
		}
	}, []);

	const onCheckboxChange: CheckboxProps["onChange"] = (e) => {
		setIsTickSelected(e.target.checked);
	};

	const closeModal = () => {
		if (isTickSelected) {
			localStorage.setItem(LS_DISCLAIMER_SHOW, "false");
		}
		setIsOpen(false);
	};

	return (
		<Modal
			open={isOpen}
			title={formatMessage({id: "disclaimer_title"})}
			closable={false}
			maskClosable={false}
			footer={[
				<Checkbox
					key="checkbox"
					onChange={onCheckboxChange}
					checked={isTickSelected}
				>
					<FormattedMessage id="disclaimer_checkbox_label"/>
				</Checkbox>,
				<Button
					key="submit"
					type="primary"
					onClick={closeModal}
				>
					<FormattedMessage id="disclaimer_confirm"/>
				</Button>
			]}
		>
			<div className={styles.disclaimerBody}>
				<p><FormattedMessage id="disclaimer_1"/></p>
				<p><FormattedMessage id="disclaimer_2"/></p>
				<p><FormattedMessage id="disclaimer_3"/></p>
				<p><i><FormattedMessage id="disclaimer_4"/></i></p>
			</div>
		</Modal>
	);
};

export default DisclaimerModal;
