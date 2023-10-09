let idval;
let pickedQuiz;
let num_question = 1;
let correct_count = 0;

/**
 * initialise des paramètres du jeu
 * en début de chaque quiz
 */
function initQuiz(index = num_question - 1) {
	idval = quizIdValue();
	pickedQuiz = indexofId();
	let phrase = data[pickedQuiz].questions[index].question;
	$('#question').text(phrase);
}

/**
 * retourne l'id du quiz
 */
function quizIdValue() {
	var result = new URL(window.location.href).searchParams.get('quizId');

	return result;
}
/**
 * fonctions appelées quand la page est chargée
 */
$(document).ready(function() {
	initQuiz();
	console.log('le quiz choisi est : ' + quizIdValue());
	fillh2();
	let ind = indexofId();
	split_phrase();
	hide_word();

	document.getElementById('submit').addEventListener('click', validate);

	goToHomePage();
});

function fillh2() {
	let _text = '';

	for (const it of data) {
		if (it.id === idval) {
			_text = it.description;
			break;
		}
	}

	$('#quizname').text(_text);
}
/**
 * donne l'index du quiz 
 * choisi dans le tableau data
 */
function indexofId() {
	for (let index = 0; index < data.length; index++) {
		if (data[index].id === idval) {
			_text = data[index].description;
			return index;
		}
	}
}
/**
 * retourne la  réponse de la question donné en paramètre
 * @param {*} questNum le numéro du thème choisi
 * @param {*} nb le numéro de la question au sein de ce thème
 */
function getAnswerFromData(questNum, nb) {
	let str = data[questNum].questions[nb].answer;

	return str;
}
/**
 * retourne un tableau de  mots à partir d'une phrase.
 * @param {*} str  la phrase à  morceller en mots
 */
function splitIntoArray(str) {
	const words = str.split(/[" "]/);
	return words;
}
/**
 * permet de découper une phrase en mots 
 * avec comme séparateur l'espace blanc.
 * de mélanger les mots ainsi obtenus
 */
function split_phrase() {
	let str = getAnswerFromData(pickedQuiz, num_question - 1);
	const words = splitIntoArray(str);

	$('#numero').html(num_question);

	shuffle(words);
	for (const iterator of words) {
		$('#list_mots').append(`<button class="member"> ${iterator}  </button>`);
	}
}
/**
 * valide la reconstitution de la phrase par le
 * joueur 
 *
 */
function validate() {
	let questNbr = num_question - 1;
	const correct = 'Bravo!Bonne Réponse';
	const wrong = ' Dommage!mauvaise réponse';
	let sentence = getAnswerFromData(pickedQuiz, num_question - 1);
	const original = splitIntoArray(sentence);
	console.log(original);
	const answerArr = rebuildPhrase();
	let result = answerArr.map(removeWhiteSpace);
	let equal = compareArrays(result, original);

	console.log(result);

	if (equal) {
		$('#displayMessage').append(`<p class="good"> ${correct}  </p>`);
		correct_count += 1;
		console.log(`vous avez ${correct_count} bonnes réponses `);
	} else {
		$('#displayMessage').append(`<p class="bad"> ${wrong}  </p> `);

		$('#displayMessage').append(`<p class="bad"> ${sentence}  </p>`);
	}

	freezeButton();
}

/**
 * enlève les espaces blancs d'une chaînde de caractère
 * @param {*} wrd  la chaîne de caractère dont on veut enlèver
 * les espaces blancs
 */

function removeWhiteSpace(wrd) {
	return wrd.replace(/\s+/g, '');
}
/**
 * permet de vérifier que deux tableaux contiennent les mêmes 
 * éléments et dans le même ordre 
 * @param {*} arr1 le premier tableau.
 * @param {*} arr2 le deuxième tableau.
 */

function compareArrays(arr1, arr2) {
	if (arr1.length !== arr2.length) return false;

	for (var i = 0; i < arr1.length; i++) {
		if (arr1[i] !== arr2[i]) return false;
	}

	return true;
}
/**
 * désactive les boutons d'envoie et de sélection des mots
 */
function freezeButton() {
	let total = getNumberOfQuestions();

	if (total === num_question) {
		$('.fin').toggle();
		$('#next').toggle();
		$('#score').text(`Fin du quiz: ${correct_count} bonne(s) réponse(s) sur ${total} au  total.`);
	}

	$('#submit').attr('disabled', 'disabled');
	$('.member').attr('disabled', 'disabled');
	swapButtons();
}
/**
 * donne le nombre total de questions relatifs 
 * au questionnaire courant.
 */
function getNumberOfQuestions() {
	let questNbr = num_question - 1;
	const total_questions = data[pickedQuiz].questions.length;
	return total_questions;
}

/**
 * permet de changer de page soit
 * en revenant à la page d'acceuil
 * ou en recommeçant le quiz choisi 
 * au terme de celui-ci
 */
function goToHomePage() {
	$('#back').click(function() {
		window.location.href = 'home.html';
	});

	$('#again').click(function() {
		window.location.replace(`/html/jeu.html?quizId=${idval}`);
	});
}
