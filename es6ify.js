/*
Convert the following pieces of ES5 style code to modern JavaScript

You can run the program with Node.js in any command shell:
% node es6ify.js

Uncomment the test to see the output.

*/

// console.log(`The program should output:
// 1 Hello, World!
// 2 Hi Teppo!    
// 3 100
// 4 46
// 5 65536        
// 6 Tom Cruise true 57
// 7 { name: 'result', value: 42 }
// 8 apple 3
// 9 [ 'one', 'two', 'three', 'four' ]
// 10 { id: 723647, name: 'Tom Cruise', age: 58, profession: 'actor' }
// Bonus [ 'f', 'o', 'o', 'b', 'a', 'r' ]
// `);


// 1 (arrow function)
// convert to arrow function
//
const hello = () => console.log('1 Hello, World!');


// test 1
hello();

// 2 (arrow function, string interpolation)
// convert to arrow function
// 
const sayHi = (name) => console.log('2 Hi ' + name + '!');


// test 2
sayHi('Teppo');

// 3 (arrow function)
// convert to arrow function
//
const multiplyByTen = (a) => a * 10;

// test 3
console.log(3, multiplyByTen(10));

// 4 (arrow function)
// convert to arrow function
//
const sum = (a, b) => a + b;


// test 4
console.log(4, sum(12, 34));

// 5 (arrow function)
// convert to arrow function
//
const power = (base, exponent) => {
    let result = 1;
    for (var count = 0; count < exponent; count++) {
        result *= base;
    }
    return result;
};

// test 5
console.log(5, power(2, 16));

// 6 (object destructuring)
// assign object properties into separate variables
//
const person = {
    firstName: 'Tom',
    lastName: 'Cruise',
    actor: true,
    age: 58
}

const { firstName = person.firstName, lastName = person.lastName, actor = person.actor, age = person.age } = person;

// test 6
console.log(6, firstName, lastName, actor, age);

// 7 (property initializer shorthand)
// set object properties from variables
//
let name = 'result';
let value = 42;

let data = { name, value };

// test 7
console.log(7, data);

// 8 (array destructuring assignment)
// define separate variables and assign values from an array
//
const arrayOfItems = ['apple', 3];

const item = arrayOfItems[0];
const amount = arrayOfItems[1];

// test 8
console.log(8, item, amount);

// 9 (spread operator)
// combine arrays into a new array
//
let array1 = ['one', 'two'];
let array2 = ['three', 'four']
let array3 = [...array1, ...array2];

// test 9
console.log(9, array3);

// 10 (spread operator)
// update the state of object with with partial content, leaving other attributes in tact
//
let entity = {
    id: 723647,
    name: 'Tom Cruise',
    age: 57
};

let update = {
    age: 58,
    profession: 'actor'
};

entity.age = update.age;
entity.profession = update.profession;

// test 10
console.log(10, entity);


// Bonus (spread operator)
// Nice to know: spread works on strings too!
// split string into array of characters
//
let str = 'foobar';
let arr = [];
for (var i = 0; i < str.length; i++) {
    arr[i] = str[i];
}

// test bonus
console.log("Bonus", arr);