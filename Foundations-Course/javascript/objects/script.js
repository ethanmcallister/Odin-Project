let animal = { species: "dog" };
let dog = animal;

animal = { species: "cat" };

console.log(animal);
console.log(dog);

console.log(animal.species);

function sumOfTripledEvens(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        // setp 1: if the element is an even number
        if (array[i] % 2 === 0) {
            const tripleEvenNumber = array[i] * 3;

            // add the new number to the total
            sum += tripleEvenNumber;
        }
    }
    return sum;
} 

let myArray = [1, 4, 3, 2, 5, 7, 4, 3, 2, 7, 8, 9, 6];
console.log(sumOfTripledEvens(myArray)); 

// map inline function
let nums = [1, 2, 3, 4, 5];
let incrementedNums = nums.map((num) => num + 1);
let multipliedNums = nums.map((num) => num * 2);
console.log(incrementedNums);
console.log(multipliedNums);


// inline filter method (filtering out evens)
let filteredOutEvenNums = nums.filter((num) => {
    return num % 2 === 0;
});
console.log(filteredOutEvenNums);

// sum of tripled evens using the three new methods
let myEvensArray = myArray.filter((num) => {
    return num % 2 === 0;
});
console.log(myEvensArray);
let myArrayTripledSum = myEvensArray.reduce((sum, num) => {
    return sum += num * 3;
}, 0);  // sum is accumulator, num is current value being iterated on, 0 at end is the initial value of the accumulator (sum).
console.log(myArrayTripledSum);
