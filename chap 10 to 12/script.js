// Chapter 10 

// 1. Sum of Two Numbers
function sum(a, b) {
    return a + b;
}
console.log(sum(3, 5)); // Output: 8

// 2. Convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    return celsius * 9 / 5 + 32;
}
console.log(celsiusToFahrenheit(0)); // Output: 32

// 3. Check for Prime Number
function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}
console.log(isPrime(7)); // Output: true

// 4. Reverse a String
function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log(reverseString("hello")); // Output: "olleh"

// 5. Factorial of a Number
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}
console.log(factorial(5)); // Output: 120

// 6. Greet User (No Parameters)
function greetUser() {
    console.log("Hello, welcome!");
}
greetUser(); // Output: "Hello, welcome!"

// 7. Greet by Name (With Parameter)
function greetByName(name) {
    console.log(`Hello, ${name}!`);
}
greetByName("Fatima"); // Output: "Hello, Fatima!"

// 8. Sum of Two Numbers (With Parameters)
function sumWithParams(num1, num2) {
    return num1 + num2;
}
console.log(sumWithParams(10, 20)); // Output: 30

// 9. Random Number Generator (No Parameters)
function getRandomNumber() {
    return Math.floor(Math.random() * 101); // Between 0 and 100
}
console.log(getRandomNumber()); // Output: Random number between 0-100

// 10. Check Age for Voting (With Parameter)
function isEligibleToVote(age) {
    return age >= 18;
}
console.log(isEligibleToVote(20)); // Output: true
console.log(isEligibleToVote(15)); // Output: false

// Chapter 11

// 1. Square of a Number
const square = (num) => num * num;
console.log(square(4)); // Output: 16

// 2. Array of Even Numbers
const getEvenNumbers = (arr) => arr.filter(num => num % 2 === 0);
console.log(getEvenNumbers([1, 2, 3, 4, 5, 6])); // Output: [2, 4, 6]

// 3. Concatenate Strings
const concatenateStrings = (str1, str2) => str1 + str2;
console.log(concatenateStrings("Hello, ", "World!")); // Output: "Hello, World!"

// 4. Find Maximum Number in an Array
const findMax = (arr) => Math.max(...arr);
console.log(findMax([5, 10, 15, 2])); // Output: 15

// 5. Sum of All Numbers in an Array
const sumArray = (arr) => arr.reduce((acc, curr) => acc + curr, 0);
console.log(sumArray([1, 2, 3, 4])); // Output: 10

// 6. Print "Hello World" (No Parameters)
const printHelloWorld = () => console.log("Hello World");
printHelloWorld(); // Output: "Hello World"

// 7. Calculate Square of a Number (With Parameter)
const calculateSquare = (num) => num * num;
console.log(calculateSquare(5)); // Output: 25

// 8. Check if Number is Positive (With Parameter)
const isPositive = (num) => num > 0;
console.log(isPositive(5)); // Output: true
console.log(isPositive(-2)); // Output: false

// 9. Generate a Random Number (No Parameters)
const generateRandomNumber = () => Math.floor(Math.random() * 50) + 1;
console.log(generateRandomNumber()); // Output: Random number between 1-50

// 10. Convert Minutes to Seconds (With Parameter)
const minutesToSeconds = (minutes) => minutes * 60;
console.log(minutesToSeconds(5)); // Output: 300

// Chapter 12

// 1. Print "Hello" (No Parameters)
(function() {
    console.log("Hello");
  })(); // Output: "Hello"
  
  // 2. Sum of Two Numbers (With Parameters)
  const sumTwoNumbers = function(a, b) {
    return a + b;
  };
  console.log(sumTwoNumbers(4, 5)); // Output: 9
  
  // 3. Array Sorting (With Parameters)
  const numbers = [5, 3, 8, 1];
  numbers.sort(function(a, b) {
    return a - b;
  });
  console.log(numbers); // Output: [1, 3, 5, 8]
  
  // 4. Greeting Message (With Parameter)
  (function(name) {
    console.log(`Hello, ${name}!`);
  })("Fatima"); // Output: "Hello, Fatima!"
  
  // 5. Check if Number is Even or Odd (With Parameter)
  const checkEvenOdd = function(num) {
    console.log(num % 2 === 0 ? "Even" : "Odd");
  };
  checkEvenOdd(7); // Output: "Odd"
  checkEvenOdd(10); // Output: "Even"
  
  // 6. Filter Odd Numbers from an Array (With Parameters)
  const nums = [1, 2, 3, 4, 5, 6];
  const oddNumbers = nums.filter(function(num) {
    return num % 2 !== 0;
  });
  console.log(oddNumbers); // Output: [1, 3, 5]
  
  // 7. Factorial Calculation (With Parameter)
  const factorial = function(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
  };
  console.log(factorial(5)); // Output: 120
  
  // 8. Anonymous Function in Timeout (No Parameters)
  setTimeout(function() {
    console.log("Time's up!");
  }, 2000); // Output after 2 seconds: "Time's up!"
  
  // 9. Sum of All Elements in an Array (With Parameter)
  const arr = [1, 2, 3, 4, 5];
  const sum = arr.reduce(function(acc, curr) {
    return acc + curr;
  }, 0);
  console.log(sum); // Output: 15
  
  // 10. Check Voting Eligibility (With Parameter)
  (function(age) {
    console.log(age >= 18 ? "Eligible to vote" : "Not eligible to vote");
  })(20); // Output: "Eligible to vote"
  (function(age) {
    console.log(age >= 18 ? "Eligible to vote" : "Not eligible to vote");
  })(16); // Output: "Not eligible to vote"
  