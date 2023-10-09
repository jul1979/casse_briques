/**
 * affiche la description des elements de 
 * data dans le console
 */
function description() {
	for (const obj of data) {
		console.log(obj.description);
	}
}

description();

/**
 * remplit la liste déroulante de la 
 * page d'accueil des différents quiz proposés
 */
function fillhomepage() {
	let ddlCustomers = $('#description');

	data.forEach((element) => {
		var option = $('<option />');
		option.html(element.description);
		option.val(element.id);

		ddlCustomers.append(option);
	});
}

/**
 * fonctions appellées quand la page est chargée
 */
$(document).ready(function() {
	fillhomepage();
});
/**
 * permet de mélanger les éléments d'un tableau
 * @param {*} array le tableau à mélanger
 */
function shuffle(array) {
	for (let i = array.length - 1; i > 0; i--) {
		let j = Math.floor(Math.random() * (i + 1));

		[ array[i], array[j] ] = [ array[j], array[i] ];
	}
}
/**
 * permet de déplacer un mot de la 
 * liste des mots proposés vers la liste 
 * des mots séléctionnés et vice versa.
 */
function hide_word() {
	let list_word = $('.member');
	list_word.click(function(event) {
		if (event.currentTarget.parentNode.id === 'picked_words') {
			$(this).appendTo('#list_mots');
		} else {
			$(this).appendTo('#picked_words');
		}
	});
}

/**
 * reconstruit une phrase à partir des mots
 * sélectionnés dans la liste
 */
function rebuildPhrase() {
	const parts = document.querySelectorAll('#picked_words .member ');
	var wordsArr = Array.prototype.slice.call(parts);
	let assembled = [];
	for (const el of wordsArr) {
		console.log(el.text);
		assembled.push(el.textContent);
	}
	return assembled;
}

/**
 * échange les boutons  de "vérification"
 * et de "question suivante"
 */
function swapButtons() {
	$('#submit').toggle();
	$('#next').toggle();
}
/**
 * gère le passage d'une question à l'autre
 */
$(document).ready(function() {
	$('#next').click(function() {
		num_question += 1;
		$('.candidate').remove();
		$('.member').remove();
		$('.good').remove();
		$('.bad').remove();
		initQuiz();
		split_phrase();
		hide_word();
		swapButtons();
		$('#submit').removeAttr('disabled');
		$('#member').removeAttr('disabled');
	});
});
