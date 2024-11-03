// Use `.map()` to iterate over the following array:

const nums = [13, 87, 2, 89, 12, 4, 90, 63];

// Create a new array where each value is multiplied by 2 and log the new array.

// Your code here

const nums2 = nums.map((currentElement) => {
  return currentElement * 2;
});

console.log(nums2)

// Given the following array, use destructuring to pull out the first and second values and place them into variables. Log both variables.

// const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];

// // Your code here

// const [firstPizzaTopping, secondPizzaTopping] = pizzaToppings;


// console.log(firstPizzaTopping)
// console.log(secondPizzaTopping)

// Given the following object, use destructuring to create variables `make` and `model` that will hold the respective values.

// const car = {
//   make: 'Audi',
//   model: 'q5',
// };
// // Your code here

// const { make, model } = car
// console.log(make)
// console.log(model)

// Duplicate the following array using the spread operator and assign it to `controversialPizzaToppings`. Then, log the variable.

const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];

//! commenting out exercise 2 in order to use 'pizzaToppings' here
// Your code here

controversialPizzaToppings = [... pizzaToppings]
console.log(controversialPizzaToppings)

// Duplicate the following object and spread its values into a new variable `myCar`.

const car = {
  make: 'Audi',
  model: 'q5',
};
//! commenting out other car exercise to use  below
// Change the `model` property of `myCar` to 'q7'. Log both objects.

// Your code here
const myCar = { ...car}
console.log('New: ', myCar)
myCar.model = 'Q7'
console.log('My New Car: ', myCar)

// Create an object named userProfile. 
// Define a variable named propertyName and assign a string to it (like a username, age, or email). 
// Use propertyName as a dynamic key in userProfile, assigning a relevant value.

// Your code here

// const userProfile = {}

const propertyName = 'email'

const userProfile = {
  [propertyName]: 'deijah@hotmal.com'
};

console.log(userProfile)

// Create a function that takes two parameters, `noun` and `adjective`, both with the following respective default values:

// 1. `cat`

// 2. `white`

// The function should log a sentence 'The cat is white.' by default. The function should substitute the appropriate parameters when supplied arguments.

// Your code here
