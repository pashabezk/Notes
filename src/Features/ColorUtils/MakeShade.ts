/**
 * Function returns a number between min and max values
 * @param number
 * @param min
 * @param max
 */
const minMax = (number: number, min: number, max: number) => Math.min(max, Math.max(min, number));

/**
 * Make new shade for hex color
 * @param hexColor original hex color (#ffffff or ffffff)
 * @param magnitude color intensification (positive make color lighter, negative make color darker)
 * @return new shade of original color in hex format or original color if was error while parsing color
 */
const makeShade = (hexColor: string, magnitude: number): string => {
	hexColor = hexColor.replace(`#`, ``);
	if (hexColor.length === 6) {
		const decimalColor = parseInt(hexColor, 16);
		let r = (decimalColor >> 16) + magnitude;
		let g = (decimalColor & 0x0000ff) + magnitude;
		let b = ((decimalColor >> 8) & 0x00ff) + magnitude;
		r = minMax(r, 0, 255);
		g = minMax(g, 0, 255);
		b = minMax(b, 0, 255);
		return `#${(g | (b << 8) | (r << 16)).toString(16)}`;
	} else {
		return hexColor;
	}
};

export default makeShade;
