/**
* This class is the one that captures the elements common to all the elements of the game. A sprite
* has a position (that of its upper left corner) and a size.
*/

class Sprite {
	/**
 * 
 * @param {Position} topLeft:  upper left corner position. 
 * @param {Dimension} dimension:the dimension. 
 * @param {string} type:the type for the Sprite.
 * @param {string} id:the identifier for the Sprite.
 */
	constructor(topLeft, dimension, type, id) {
		this._topLeft = topLeft;

		this._dimension = dimension;

		this._type = type;

		this._id = id;
	}

	/**
 * gets the id attibute value
 */
	get id() {
		return this._id;
	}

	/**
 * gets the type attibute value
 */
	get type() {
		return this._type;
	}

	/**
 * gets the topLeft attribute value
 */
	get topLeft() {
		return this._topLeft;
	}

	/**
	 * gets the topRight attribute value
	 */

	get topRight() {
		return new Position(this.topLeft.x + this.dimension.width, this.topLeft.y);
	}

	/**
	 * gets the bottomLeft attribute value
	 */

	get bottomLeft() {
		return new Position(this.topLeft.x, this.topLeft.y + this.dimension.height);
	}

	/**
	 * gets the bottomRight attribute value
	 */

	get bottomRight() {
		return new Position(this.topLeft.x + this.dimension.width, this.topLeft.y + this.dimension.height);
	}

	/**
 * gets the dimension attribute value
 */
	get dimension() {
		return this._dimension;
	}

	/**
	 * checks object scene exit from the left border
	 */
	oustideLeft() {
		return this.topLeft.x < 0;
	}

	/**
	 * checks object scene exit from the left border
	 */
	oustideRight() {
		return this.topRight.x > Scene_Width;
	}

	/**
	 * checks object scene exit from the top border
	 */
	oustideTop() {
		return this.topLeft.y < 0;
	}

	/**
	 * checks object scene exit from the bottom border
	 */
	oustideBottom() {
		return this.bottomLeft.y > Scene_Height;
	}

	/**
 * checks if Sprite is in contact with  another Sprite.
 */

	hitBySibling(other) {
		let onTop = this.bottomLeft.y == other.topLeft.y;

		let atBottom = this.topLeft.y == other.bottomLeft.y;

		let onLeft = this.topRight.x < other.topLeft.x;

		let onRight = other.topRight.x < this.topLeft.x;

		return (onTop && !onLeft && !onRight) || (atBottom && !onLeft && !onRight);
	}
}
