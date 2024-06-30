const readlineSync = require("readline-sync"); // provides synchronous methods for reading input from the CLI, easier to get input in a blocking manner

// -> let the user choose their language

const name = readlineSync.question("What is your name? ");
console.log(`Hello, ${name}!`);

function validateNumber(number) {
	return typeof number !== "number" && !isNaN(number);
}

function getNumber(prompt) {
	let number;
	let isValid = false;

	while (!isValid) {
		number = readlineSync.question(prompt);
		isValid = validateNumber(number);

		if (!isValid) {
			console.log("This is not a valid number. Please enter a valid number.")
		} else {
			return number;
		}
	}
}

let firstNumber = getNumber("Please enter the first number. ")
let secondNumber = getNumber("Please enter the second number. ")

console.log(`You have entered the following numbers: ${firstNumber} and ${secondNumber}`)

const operation = readlineSync.question("Which operation would you like to perform? Please type one of the following: add, subtract, multiple, divide. ");
console.log(`Ok, I will ${operation} two numbers.`);
console.log(`The result is ${performOperation(operation, firstNumber, secondNumber)}`);

function performOperation(operation, number1, number2) {
	let num1 = parseInt(number1, 10);
	let num2 = parseInt(number2, 10);

	switch (operation) {
	case "add":
		return num1 + num2;
	case "subtract":
		return num1 - num2;
	case "multiply":
		return num1 * num2;
	case "divide":
		return num1 / num2;
	default:
		return "Invalid operation";
	}

}