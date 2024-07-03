## Description
Hangman is a word-guessing game where players aim to deduce a hidden word by guessing one letter at a time. After six incorrect attempts the player loses.

## Objective
The goal is to guess the entire word correctly before using up all allotted incorrect guesses.

## Game setup
	•	Word Selection: A random word is chosen from a predefined list of words.
	•	Progress Display: The word is displayed as a series of underscores, representing each letter of the word.
	•	Guess Tracking: The game keeps track of letters guessed correctly and incorrectly.
	
## Gameplay
- Initialize an array with words
- Choose randomly a word from the array
- Display a word as _ _ _ _ _ to the player, underscores correspond to the number of letters (e.g., for “javascript,” it appears as “_ _ _ _ _ _ _ _ _ _”)
- The player guesses a letter.
  - Ignore the case
  - Validate the input, make sure only letters are entered
- If the letter is in the word, all occurrences of that letter are revealed.
  - Split the word into an array
  - Iterate over each element in the array, check if the element matches the letter selected by the player.
  - Save the position of the letter in the array
  - Retrieve the original word
  - Check each character in the word, if it matches the indices, reveal the letter, if not replace with underscore
- If the letter is not in the word, it counts as an incorrect guess, and the remaining guesses are decremented.
- In case of an incorrect guess, draw a hangman in the terminal.
- The game displays the current progress of the word and the remaining guesses after each guess.
- The game also shows the letters that have already been guessed.
- The player wins if they guess all the letters in the word before running out of guesses.
- The player loses if they use up siz incorrect guesses before completing the word.
- At the end of the game, the correct word is revealed, inform the player if they won or lost.

--------------
| /           |
|             O
|             |
|            / \
|             |
|            / \              
|           
|
