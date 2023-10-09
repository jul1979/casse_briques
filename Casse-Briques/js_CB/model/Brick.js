class Brick extends Sprite {
	/**
 * 
 * @param {Position} topLeft:  upper left corner position. 
 * @param {Dimension} dimension:the dimension. 
 * @param {string} type:the type for the Sprite.
 * @param {string} id:the id for the Sprite.
 */

	constructor(topLeft, dimension, id) {
		super(topLeft, dimension, 'Brick', id);
	}
}
