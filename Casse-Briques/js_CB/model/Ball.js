/**
 * This class represents the Ball
 */
class Ball extends Sprite {
	/**
 * 
 * @param {Position} topLeft:  upper left corner position. 
 * @param {Dimension} dimension:the dimension. 
 * @param {string} id:the id for the Sprite.
 * @param {Movement} movement:the amount of movement with each movement
 */

	constructor(topLeft, dimension, movement, id) {
		super(topLeft, dimension, 'Ball', id);

		this._movement = movement;
	}

	/**
 * getter for the amount of  movement
 */
	get movement() {
		return this._movement;
	}

	/**
 * moves the ball position based
   of its movement.
 */

	move() {
		if (this.topLeft.x <= 0 || this.topRight.x >= Scene_Width) {
			this.movement.reverseX();
		}

		if (this.topLeft.y <= 0 || this.bottomLeft.y >= Scene_Height) {
			this.movement.reverseY();
		}

		this._topLeft._x += this._movement.deltaX;
		this._topLeft._y += this._movement.deltaY;
	}
}
