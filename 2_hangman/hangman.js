const readlineSync = require('readline-sync');
console.clear();

const Words = ["javascript", "book", "pizza", "juice", "music"];

let hangman = `
--------------
| /           |
|             O
|             |
|            / \\
|             |
|            / \\              
|           
|
`

// Represents the word to be guessed and handles operations related to the word.

class Word {
	constructor(word) {
		this.word = word;
		this.hiddenWord = word.split('').map(() => '_').join(' ');
	}

	
}
 
// Manages player-related data, such as guessed letters and remaining guesses.

class Player {

}

// Manages the overall game state and logic.

class Game {
	constructor() {
		this.hangman = '';
	}

	selectWord(words) {
		return words[(Math.floor(Math.random() * words.length))];
	}
}


let word = new Word(selectWord(Words));
console.log(word.word);
console.log(word.hiddenWord);