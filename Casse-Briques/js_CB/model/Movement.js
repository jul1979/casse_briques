/**
 * this class represents a change of a position location
 */
class Movement {
	/**
 * constructs a movement
 * @param {integer} deltaX added to a position to make it move horizontally

 * @param {integer} deltaY added to a position to make it move vertically
 */
	constructor(deltaX, deltaY) {
		this._deltaX = deltaX;
		this._deltaY = deltaY;
	}
	/**
 * getter function for the horizontal displacement
 */
	get deltaX() {
		return this._deltaX;
	}
	/**
 * getter function for the vertical displacement
 */
	get deltaY() {
		return this._deltaY;
	}
	/**
 * setter function for the horizontal displacement
 */
	set deltaX(value) {
		this._deltaX = value;
	}
	/**
 * setter function for the vertical displacement
 */
	set deltaY(value) {
		this._deltaY = value;
	}

	/**
 *  reverses the movement in the horizontal  direction.
 */
	reverseX() {
		this._deltaX = this.deltaX * -1;
	}

	/**
	 * reverses the movement in the vertical direction.
	 */
	reverseY() {
		this._deltaY = this.deltaY * -1;
	}
}
