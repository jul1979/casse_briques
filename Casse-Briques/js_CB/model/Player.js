/**
 * The Player class retains the player's score.
 */

class Player {
	/**
   * creates an instance of the class
   */
	constructor() {
		this._score = 0;
		this._lives = NB_Lives;
	}

	/**
 * gets the player score
 */
	get score() {
		return this._score;
	}

	/**
	 * gets the Player lives.
	 */
	get lives() {
		return this._lives;
	}

	/**
 * 
 * @param {integer} points:the points to add to the Player score 
 */
	addToScore(points) {
		this._score += points;
	}
	/**
 * removes one life from the Player roaster.
 */
	takeLife() {
		this._lives -= 1;
	}
	/**
	 * checks if a Player has any lives left.
	 */
	isAlive() {
		return this.lives > 0;
	}
}
