/**
 * This class concentrates a width and a height.
 */
class Dimension {
	/**
	 * creates an instance of the class
	 */
	constructor(width, height) {
		this._width = width;

		this._height = height;
	}
	/**
 *  gets the height attribute value
 */

	get height() {
		return this._height;
	}
	/**
 * gets the width attribute value
 */

	get width() {
		return this._width;
	}
}
