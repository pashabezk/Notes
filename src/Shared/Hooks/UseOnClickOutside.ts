import React, {useEffect} from "react";

/**
 * Function for checking if click is outside the element
 * @param elem ref to the element
 * @param handler function for handle outside click
 */
export const useOnClickOutside = <T extends HTMLElement = HTMLElement>(
	ref: React.RefObject<T>,
	handler: () => void,
) => {
	useEffect(() => {
		const handleClick = (e: MouseEvent | TouchEvent) => {
			const elem = ref.current;
			if (!elem) return;
			if (!elem.contains(e.target as Node)) {
				handler();
			}
		};

		document.addEventListener("mousedown", handleClick);
		document.addEventListener("touchstart", handleClick);

		return () => {
			document.removeEventListener("mousedown", handleClick);
			document.removeEventListener("touchstart", handleClick);
		};
	}, [ref, handler]);
};
