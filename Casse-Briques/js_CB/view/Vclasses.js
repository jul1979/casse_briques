class View {
	/**
 * dynamically adds a sprite to the scene.
 * @param {Sprite} sprite:the sprite to add. 
 */
	add(sprite) {
		$('#scene').append(`<span id="${sprite.id}" class="${sprite.type}"></span>`);
	}
	/**
 * 
 * @param {Sprite} sprite:the sprite to update. 
 */
	update(sprite) {
		if (sprite.type == 'Paddle') {
			$(`#${sprite.id}`).css('left', `${sprite.topLeft.x}px`);
		}
		if (sprite.type == 'Ball') {
			$(`#${sprite.id}`).css({ left: `${sprite.topLeft.x}px`, top: `${sprite.topLeft.y}px` });
		}
	}

	/**
	 * gives the distance between the scene and 
	 * the left edge of the window 
	 * 
	 */
	sceneLeft() {
		let dFromLeftEdge = $('#scene').offset().left + Paddle_Width / 2;
		return dFromLeftEdge;
	}

	/**
	 * adds bricks to the Scene
	 */
	addBricks(bricks) {
		bricks.forEach((element) => {
			$('#wall').append(`<span id="${element.id}" class="${element.type}"></span>`);
		});
	}
	/**
 * 
 * @param {[]} bricks:the array of bricks to remove from the page. 
 */
	destroyBricks(bricks) {
		bricks.forEach((element) => {
			$(`# ${element.id}`).remove();
		});
	}

	/**
 * 
 * @param {integer} score:the player score.
 *  
 */
	updateScore(score) {
		$('#score').text(`${score}`);
	}

	/**
	 * hides the message
	 */
	hideMessage() {
		$('#start').hide();
	}

	/**
	 * 
	 * @param {string} message:the message to show. 
	 */
	showMessage(message) {
		$('#start').text(message).show();
	}

	/**
	 * adds lives at the begining of the game.
	 */
	addLives() {
		for (let index = 1; index <= NB_Lives; index++) {
			$('#lives').append(` <span class="heart" id="${index}"><i class="fas fa-heart"></i></span> `);
		}
	}
	/**
 * updates visually the player regarding the number of lives 
 *  has left.
 */
	updatelives() {
		$('.heart').last().remove();
	}

	/**
	 * 
	 */

	showLevel(level) {
		$('#level').text(` level ${level}`);
	}
}
