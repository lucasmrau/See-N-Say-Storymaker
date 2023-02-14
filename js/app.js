// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Words arrays
var nouns = ['the dog', 'the cat', 'the tree', 'the car'];
var verbs = ['runs', 'jumps', 'eats', 'sleeps'];
var adjectives = ['with a happy', 'with a big', 'with a fast', 'with a funny'];
var secondNouns = ['ball', 'hat', 'book', 'house'];
var places = ['in the park', ' in the store', 'at the beach', 'in the library'];

// Array with the full story
var storyArray = [];

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

// Button that generates full story
var fullStoryButton = document.getElementById('fullStory');

// Button to clear the story's var
var clearStoryButton = document.getElementById('clearButton');

// Text to display current story's text
var textDisplay = document.getElementById('textDisplay');


/* Functions
-------------------------------------------------- */
function speakNow(string) {
	// Create a new speech object, attaching the string of text to speak
	var utterThis = new SpeechSynthesisUtterance(string);
	// Actually speak the text
	synth.speak(utterThis);
}

// Add word from respective category to array and the strings
function addRandomWord(category) {
	var words;
	switch (category) {
	  case 'nouns':
		words = nouns;
		var randomIndex = Math.floor(Math.random() * words.length);
	  	storyArray[0] = words[randomIndex];
		break;
	  case 'verbs':
		words = verbs;
		var randomIndex = Math.floor(Math.random() * words.length);
	  	storyArray[1] = words[randomIndex];
		break;
	  case 'adjectives':
		words = adjectives;
		var randomIndex = Math.floor(Math.random() * words.length);
	  	storyArray[2] = words[randomIndex];
		break;
	  case 'secondNouns':
		words = secondNouns;
		var randomIndex = Math.floor(Math.random() * words.length);
	  	storyArray[3] = words[randomIndex];
		break;
	  case 'places':
		words = places;
		var randomIndex = Math.floor(Math.random() * words.length);
	  	storyArray[4] = words[randomIndex];
		break;
	  default:
		words = [];
		break;
	}
	if (words.length > 0) {
		textToSpeak = '';
	  for (let i = 0; i < storyArray.length; i++) {
		textToSpeak += storyArray[i] + ' ';
		textDisplay.innerHTML = textToSpeak;
	  } 
	}
  }
  

/* Event Listeners
-------------------------------------------------- */
// Onclick handler for the button that speaks the text contained in the above var textToSpeak
speakButton.onclick = function() {
	speakNow(textToSpeak);
}

// Add click event listeners to each button
nounButton.addEventListener('click', function() {
	addRandomWord('nouns');
	textDisplay.innerHTML = textToSpeak;
});
  
verbButton.addEventListener('click', function() {
	addRandomWord('verbs');
	textDisplay.innerHTML = textToSpeak;
});
  
adjectiveButton.addEventListener('click', function() {
	addRandomWord('adjectives');
	textDisplay.innerHTML = textToSpeak;
});
  
secondNounButton.addEventListener('click', function() {
	addRandomWord('secondNouns');
	textDisplay.innerHTML = textToSpeak;
});
  
placeButton.addEventListener('click', function() {
	addRandomWord('places');
	textDisplay.innerHTML = textToSpeak;
});

fullStoryButton.addEventListener('click', function() {
	addRandomWord('nouns');
	addRandomWord('verbs');
	addRandomWord('adjectives');
	addRandomWord('secondNouns');
	addRandomWord('places');
	textDisplay.innerHTML = textToSpeak;
});

clearStoryButton.addEventListener('click', function() {
	textToSpeak = '';
	textDisplay.innerHTML = textToSpeak;
	
	for (let i = 0; i < storyArray.length; i++) {
		storyArray[i] = '';
	  } 
});
