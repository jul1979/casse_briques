/**
 * This  class manages the game parts.
 */
class GameCtrl {
	/**
 * 
 * @param {Game} game:the game 
 * @param {View} view :the view
 */
	constructor(game, view) {
		this._game = game;
		this._view = view;
		this._paddleCtrl = new PaddleCtrl(game, view);
		this._ballCtrl = new BallCtrl(game, view);
		this._view.add(game.paddle);
		this._view.add(game.ball);
		this._view.addBricks(game.wall);
		this._view.updateScore(0);
		this._view.addLives();
		this._view.showLevel(game.level);
	}

	/**
 * starts the game
 */
	play() {
		this.ballStartWait();
	}

	ballStartWait() {
		this._view.showMessage('Click to start');
		$(document).mouseup(() => this.ballStart());
	}

	ballStart() {
		$(document).off('mouseup');
		this._view.hideMessage();
		this._ballCtrl.start();
	}
	/**
		 * stops the ball
		 */
	stop() {
		this._ballCtrl.stop();
	}
}
