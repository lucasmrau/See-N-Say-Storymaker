// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Words arrays
var nouns = ['the dog', 'the cat', 'the tree', 'the car'];
var verbs = ['runs', 'jumps', 'eats', 'sleeps'];
var adjectives = ['with a happy', 'with a big', 'with a fast', 'with a funny'];
var secondNouns = ['ball', 'hat', 'book', 'house'];
var places = ['in the park', ' in the store', 'at the beach', 'in the library'];

// Array buttons event listeners
var nounButton = document.getElementById('nounButton');
var verbButton = document.getElementById('verbButton');
var adjectiveButton = document.getElementById('adjectiveButton');
var secondNounButton = document.getElementById('secondNounButton');
var placeButton = document.getElementById('placeButton');

// Create a new speechSynthesis object
var synth = window.speechSynthesis;
// Learn more about SpeechSynthesis.speak() at https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/speak
var textToSpeak = 'This is the text string that you will generate with your script';
var speakButton = document.querySelector('#speakButton');


/* Functions
-------------------------------------------------- */
function speakNow(string) {
	// Create a new speech object, attaching the string of text to speak
	var utterThis = new SpeechSynthesisUtterance(string);
	// Actually speak the text
	synth.speak(utterThis);
}

function addRandomWord(category) {
	var words;
	switch (category) {
	  case 'nouns':
		words = nouns;
		break;
	  case 'verbs':
		words = verbs;
		break;
	  case 'adjectives':
		words = adjectives;
		break;
	  case 'secondNouns':
		words = secondNouns;
		break;
	  case 'places':
		words = places;
		break;
	  default:
		words = [];
		break;
	}
	if (words.length > 0) {
	  var randomIndex = Math.floor(Math.random() * words.length);
	  textToSpeak += words[randomIndex] + ' ';
	}
  }
  

/* Event Listeners
-------------------------------------------------- */
// Onclick handler for the button that speaks the text contained in the above var textToSpeak
speakButton.onclick = function() {
	speakNow(textToSpeak);
	textToSpeak = "";
}

// Add click event listeners to each button
nounButton.addEventListener('click', function() {
	addRandomWord('nouns');
});
  
verbButton.addEventListener('click', function() {
	addRandomWord('verbs');
});
  
adjectiveButton.addEventListener('click', function() {
	addRandomWord('adjectives');
});
  
secondNounButton.addEventListener('click', function() {
	addRandomWord('secondNouns');
});
  
placeButton.addEventListener('click', function() {
	addRandomWord('places');
});