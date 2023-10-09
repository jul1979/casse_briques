/**
 * Controller for the paddle movement.
 * It make it follow the mouse.
 */
class PaddleCtrl {
	/**
* Display the paddle and start controlling it with the mouse.
 * @param {Game} game : the game
 * @param {View} view : the view
 */

	constructor(game, view) {
		view.update(game.paddle);
		$(document).mousemove((evt) => this.moveMouse(game, view, evt));
	}

	/**
   * Called when the mouse is moved.
   * It moves the paddle (horizontally) where the mouse is.
   * @param {Game} game : the game
   * @param {View} view : the view
   * @param {MouseEvent} evt : the mouse event
   */
	moveMouse(game, view, evt) {
		let mouseDFromSceneLeftEdge;
		mouseDFromSceneLeftEdge = evt.clientX - view.sceneLeft();
		game.paddle.moveTo(mouseDFromSceneLeftEdge);

		view.update(game.paddle);
	}
}
