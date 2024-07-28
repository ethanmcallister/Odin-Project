// let message = "Hello!";

// console.log(message);
// alert(message);

// let hello = "Hello world!";
// let message;

// message = hello;

// const COLOR_RED = "#F00";
// const COLOR_GREEN = "#0F0";
// const COLOR_BLUE = "#00F";
// const COLOR_ORANGE = "#FF7F00";

// let color = COLOR_ORANGE;
// alert(color);


// // Task 1:
// let admin, name;

// name = "John";

// admin = name;

// alert(admin);

// // Task 2:
// let planet = "Earth";
// let currentVisitor;

// let answer = (4 + 6 + 9) / 77;
// let answerString = answer.toString();
// let answerLength = answerString.length;
// answer = answer.toFixed(2);

// console.log(answer);
// console.log(answerString);
// console.log(answerLength);

// const MAX = 57;
// let actual = MAX - 13;
// let percentage = actual / MAX;

// alert(1 / 0);  // Infinity

// alert( "not a number" / 2);

// const number = 123456789012345678901234567890n;  // n means big number
// console.log(number);
// console.log(typeof number);

// let name = "Ethan";
// let message = `Hello, my name is ${name}!`;
// alert(message);

// // newlines using template literals
// const newLine = 
// `One day you finally knew
// what you had to do, and began.`;
// console.log(newLine);

// const newLine2 = "One day you finally knew\nwhat you had to do, and began.";
// console.log(newLine2);

// const quotes = "She said, \"I think so!\"";
// console.log(quotes);

// // Extracting String characters
// let text = "HELLO WORLD";
// let char = text.charAt(0);
// let charCode = text.charCodeAt(0);
// let doubleU = text.at(6);
// console.log(doubleU);
// console.log(char); 
// console.log(charCode);

// const name = "W3Schools";
// let letter = name.at(2);
// console.log(letter);

// let char2 = text[7];
// console.log(char2);

// let groceryList = "Apple, Banana, Kiwi";
// let groceryListPart = groceryList.slice(-12, -6);
// console.log(groceryListPart);

// let text = "5";
// let padded = text.padStart(4, "x");
// console.log(padded);

// let text = "Hello, World!\n";
// let result = text.repeat(4);
// console.log(result);

// fizz Buzz
let answer = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: "));

for (let i = 1; i < answer + 1; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}
