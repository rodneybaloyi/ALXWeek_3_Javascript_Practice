// 1. Your name as a string
let name = "Rodney Baloyi";
console.log("Name:", name);
console.log(typeof name); // string

// 2. Your age as a number
let age = 28;
console.log("Age:", age);
console.log(typeof age); // number

// 3. Whether you are a student (true/false)
let isStudent = true;
console.log("Is Student:", isStudent);
console.log(typeof isStudent); // boolean

// 4. Your address as an object with city and country
let address = {
  city: "Cape Town",
  country: "South Africa"
};
console.log("Address:", address);
console.log(typeof address); // object

// 5. Your hobbies as a list (array)
let hobbies = ["soccer", "gym", "reading books"];
console.log("Hobbies:", hobbies);
console.log(typeof hobbies); // object (because arrays are objects in JavaScript)

// 6. A variable that is not given a value (undefined)
let undefinedVariable;
console.log("Undefined Variable:", undefinedVariable);
console.log(typeof undefinedVariable); // undefined

// 7. A variable that is set to null
let nullVariable = null;
console.log("Null Variable:", nullVariable);
console.log(typeof nullVariable); // object (this is a known bug in JavaScript)


//Practical number 2

// Ask the user for their name
let userName = prompt("What is your name?");

// Ask the user for their age
let userAge = prompt("How old are you?");

// Convert userAge from string to number (important for math)
userAge = Number(userAge);

// Get the current year
let currentYear = new Date().getFullYear();

// Calculate the year of birth
let yearOfBirth = currentYear - userAge;

// Show the result to the user
alert("Hello " + userName + "! You were born in the year " + yearOfBirth + ".");
