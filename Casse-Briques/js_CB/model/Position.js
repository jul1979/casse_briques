/**
 * this class represents a position on the scene
 */
class Position {
	/**
	 * 
	 * @param {integer} x distance from left edge of the stage
	 * @param {integer} y distance from top edge of the stage
	 */
	constructor(x, y) {
		this._x = x;
		this._y = y;
	}
	/**
 * getter method for  the abscissa attribute
 */
	get x() {
		return this._x;
	}
	/**
 * getter method for the ordinate attribute
 */
	get y() {
		return this._y;
	}
	/**
 * setter method for the  abscissa attribute
 */
	set x(value) {
		this._x = value;
	}
	/**
 *  setter method for the ordinate attribute
 */

	set y(value) {
		this._y = value;
	}
}
