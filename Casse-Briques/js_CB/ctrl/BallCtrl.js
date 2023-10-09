/**
 * Ball controller.
 * Suggests methods to start / stop the ball and move it.
 */
class BallCtrl {
	/**
  
	 * @param {Game} game - the ball to control
	 * @param {View} view - the view
	 */
	constructor(game, view) {
		this._game = game;
		this._ball = game.ball;
		this._view = view;
		view.update(game.ball);
	}

	/** Starts the ball. */
	start() {
		this._moveListener = setInterval(() => this.move(), 10);
	}

	/**Moves the ball one step (defined by its movement) and refreshes the view.  */
	move() {
		if (!this.game.gameLost() && !this.game.gameWon()) {
			this.game.ballMove();
			this._view.update(game.ball);
			this._view.destroyBricks(this.game.ballMove());

			this._view.updateScore(this.game.player.score);

			if (this.game.ball.bottomRight.y >= 600) {
				this.game.player.takeLife();
				this._view.updatelives();
			}
		} else {
			this.view.showMessage('Game Over');
		}
	}

	/** Stop the ball. */
	stop() {
		clearInterval(this._moveListener);
	}

	/**
	 * gets the game
	 */
	get game() {
		return this._game;
	}

	/**
 * gets the view
*/
	get view() {
		return this._view;
	}
}
