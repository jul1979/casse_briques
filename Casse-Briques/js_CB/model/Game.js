/**
 * this class serves as an entry point for all classes
 * of the model
 */
class Game {
	/**
* instantiates a game.
*/

	constructor() {
		this._player = new Player();
		this._level = 1;

		this._paddle = new Paddle(
			new Position(480, Scene_Height - Paddle_Height),
			new Dimension(Paddle_Width, Paddle_Height),
			'PaddleX'
		);

		let x = Game.getRandomInt(96, 768);

		let mx = Game.getRandomInt(0.5, -0.6);

		let my = Game.getRandomInt(-1, -1);

		this._ball = new Ball(
			new Position(x, 500),
			new Dimension(Ball_Width, Ball_Height),
			new Movement(mx, my),
			'BallX'
		);

		this._wall = [];

		this.createWall();
	}
	/**
 * gets the player attribute
 */
	get player() {
		return this._player;
	}

	/**
 * creates an array of bricks
 */
	createWall() {
		let bricks = [];
		let start_gap = C_Distance;

		let j = 0;
		for (let i = 0; i < NB_lines * 15; i++) {
			if (i != 0 && i % 15 === 0) {
				j = 0;

				start_gap += Brick_Height;
			}
			bricks.push(
				new Brick(
					new Position(j * Brick_width, start_gap),
					new Dimension(Brick_width, Brick_Height),
					`brick${i}`
				)
			);
			j++;
		}
		this._wall.push(...bricks);
	}

	/**
 * gets the array containing the bricks.
*/
	get wall() {
		return this._wall;
	}

	/**
 * generates an integer between two bounds
 * @param {integer} max:the upper bound of the inteval
 * @param {integer} min:the lower bound of the inteval 
 */
	static getRandomInt(max, min) {
		return Math.floor(Math.random() * max + min);
	}

	/**
 * gets the paddle attribute
 */
	get paddle() {
		return this._paddle;
	}

	/**
 * gets the ball attribute
 */

	get ball() {
		return this._ball;
	}

	/**
 * sets the Paddle left value attribute  
 */
	paddleMove(centerX) {
		this.paddle.moveTo(centerX);
	}
	/**
 * moves the ball position based
 *  of its movement.
 */
	ballMove() {
		this.ball.move();

		if (this.ball.hitBySibling(this.paddle) || this.wall_hitByBall().length > 0) {
			this.ball.movement.reverseY();
		}

		return this.wall_hitByBall();
	}

	/**
 * checks if  wall hit by ball 
*/
	wall_hitByBall() {
		let hits = [];

		for (let i = 0; i < this.wall.length; i++) {
			if (this.ball.hitBySibling(this.wall[i])) {
				hits.push(this.wall[i]);
				this.player.addToScore(5);
				this._wall.splice(i, 1);
				if (i == 0) {
					break;
				} else {
					i = i - 1;
				}
			}
		}

		return hits;
	}

	/**
 * informs if the game has been lost:the ball has touched the    
 * ground
*/
	gameLost() {
		return this.player.isAlive() == false;
	}

	/**
	 * informs if the game has been won by destroying all the bricks of the wall.
	 */
	gameWon() {
		return this.wall.length == 0;
	}

	/**
 * gets the current level
 */
	get level() {
		return this._level;
	}

	/**
 * sets the level to a new one 
 */
	set level(value) {
		if (value < 0) {
			throw new Error('level negative: ' + value);
		}

		this._level = value;
	}
}
