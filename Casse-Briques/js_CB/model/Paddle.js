/**
 * it represents the paddle
 */
class Paddle extends Sprite {
	/**
 * 
 * @param {Position} topLeft:  upper left corner position. 
 * @param {Dimension} dimension:the dimension. 
 * @param {string} id:the id for the Sprite.
 */

	constructor(topLeft, dimension, id) {
		super(topLeft, dimension, 'Paddle', id);
	}

	/**
 * sets the value of the left attribute 
 * @param {integer} val:the value to set the left attribute to 
 */
	moveTo(val) {
		if (val <= 0) {
			this.topLeft.x = 0;
		} else if (val >= Scene_Width - this.dimension.width) {
			this.topLeft.x = Scene_Width - this.dimension.width;
		} else if (val > $('#scene').offset().left || val.x < Scene_Width - this.dimension.width) {
			this.topLeft.x = val;
		}
	}
}
