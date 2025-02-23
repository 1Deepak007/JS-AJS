//"use strict";      // use strict mode for strict checking
console.log("Javascript");

// name = 'Deepak';        // no using variable like this, it's depriecated

//================> VARIABLES <================
let username = "Deepak";
const pi = 3.14;
var age = 20;

// console.log(username);
// console.log(pi);
// console.log(age);

console.log(eval(10 + 10)); //20
console.log(eval(10 + "10")); //1010

// let: It can be reassigned. It's block scoped.
// const: It can't be reassigned. It's block scoped. const is block-scoped, not function-scoped. This means that a variable declared with const is only accessible within the block (enclosed by {}) in which it is defined.
// var: It can be reassigned. It's function scoped.

function scopes() {
  const is_true = true;
  if (is_true) {
    var name = "Deepak";
    let location = "India";
    const coordinates = 1234.12345;
  }
  console.log(name);
  // console.log(location);    // ReferenceError: location is not defined. // Gives error because let is function scoped
  // console.log(coordinates); // ReferenceError: location is not defined. // Gives error as const is block scoped.
}

scopes();

//================> DATA TYPES <================

// 1. Primitive Data Types
let name = "Ishu"; // String
let age1 = 20; // Number
let is_present = true; // Boolean
let x = null; // Null
let value = undefined; // Undefined
let y = 1238727349878327498n; // BigInt    - Represents integers larger than what the Number type can safely handle.
let z = Symbol("id"); // Symbol    - Represents a unique and immutable value, often used as object property keys.Represents a unique and immutable value, often used as object property keys.

console.log(`value of name is ${name} and its type is ${typeof name}`);
console.log(`value of age is ${age1} and its type is ${typeof age1}`);
console.log(
  `value of is_present is ${is_present} and its type is ${typeof is_present}`
);
console.log(`value of x is ${x} and its type is ${typeof x}`);
console.log(`value of value is ${value} and its type is ${typeof value}`);
console.log(`value of y is ${y} and its type is ${typeof y}`);
console.log(`type of z is ${typeof z}`);
console.log(`value of z is`, z);

// 2. Non-Primitive (Reference) Data Types
// Object	Represents a collection of key-value pairs.	{ name: "Alice", age: 25 }
// Array	Represents an ordered list of values (a special type of object).	[1, 2, 3]
// Function	Represents a reusable block of code (functions are objects in JavaScript).	function() { ... }

//================> TYPE CONVERSION <================
// Type Conversions in JavaScript refer to the automatic or explicit process of converting data from one data type to another in JavaScript
// There are two types of type conversion in JavaScript −

//          1.Implicit type conversion : When type conversion is done by JavaScript automatically, it is called implicit type conversion. For example, when we use the '+' operator with the string and number operands, JavaScript converts the number to a string and concatenates it with the string.
let con1 = 10;
let con2 = "20";
let con3 = con1 + con2;
console.log(typeof con1);
console.log(typeof con2);
console.log(typeof con3);

//          2.Explicit type conversion :
// use the Numer() constructor to convert a string into a number. We can also use unary plus (+) operator to convert a string to number.
let con4 = Number(con2);
console.log(typeof con4);
let con5 = false;
console.log(Number(con5));

//================> TYPE COERCION <================
// Type Coercion in JavaScript refers to the automatic or explicit process of converting data from one data type to another in JavaScript.
let co1 = "20";
let co2 = 10;
let co3 = co1 + co2;
console.log(typeof co1);
console.log(typeof co2);
console.log(typeof co3);

//================> USE STRICT <================
// 'use strict' at the top of the JavaScript code; it uses the strict mode for the whole code
// we used the 'use strict' literal only inside the function. So, it removes the unusual errors from the function only.
function using_strict() {
  // "use strict";
  num1 = 10; // will give error when using strict mode
  let num2 = "20";
  let num3 = num1 + num2;
  console.log("use_strict function called");
  return num3;
}
console.log(using_strict());

// In strict mode  : we can't delete objects using the delete keyword
function deleteObject() {
  //   "use strict";
  let women = { name: "Aisha", age: 22 };
  try {
    delete women; // Error : 'delete' cannot be called on an identifier in strict mode.
    console.log("Women object deleted");

    delete women.prototype; //can't delete the object prototype in the strict mode.
    console.log("Women's prototype deleted.");
  } catch {
    console.log("Can't delete object women");
  }
}

deleteObject();

//===================> Operators
// Arithmetic Operators
console.log("ARITHEMATIC OPERATOR");
console.log(10 + 10); //20
console.log(10 - 20); //-10
console.log(10 * 2); //20
console.log(10 ** 2); //100
console.log(10 / 3); //3.3333333333333335
console.log(10 % 3); // 1
// console.log(10++)   //wl gt err :  the increment (++) and decrement (--) operators cannot be applied directly to numeric literals (like 10). These operators are designed to work with variables, not literal values.
// console.log(++10)      //wl gt err :  the increment (++) and decrement (--) operators cannot be applied directly to numeric literals (like 10). These operators are designed to work with variables, not literal values.
let n = 10;
console.log(n--); //10      as it will first print value then reduce it by 1
console.log(--n); //8       as value was reduced from 10->9 the again here 9->8

// Comparison Operators
console.log("COMPARISON OPERATOR");
console.log(10 > 9); // true
console.log(10 < 9); // false
console.log(10 == 10); // true
console.log(10 == "10"); // true
console.log(10 === "10"); // false
console.log(10 != 1); // true
console.log(10 >= 11); // false
console.log(10 <= 11); // true

//=============> Logical Operator
// Logical AND (&&) Operator
console.log("LOGICAL OPERATOR");
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

console.log(1 && 1);
console.log(1 && 0);
console.log(0 && 1);
console.log(0 && 0);

// Logical OR (||) Operator
console.log("LOGICAL OR");
console.log(true || false);
console.log(false || true);
console.log(true || true);
console.log(false || false);
console.log(1 || 1);
console.log(1 || 0);
console.log(0 || 1);
console.log(0 || 0);

// Logical Not (!)
console.log("LOGICAL NOT");
console.log(!true);
console.log(!1);
console.log(!false);
console.log(!0);

//======> BITWISE OPERATOR
// In JavaScript perform operations on the integer values at the binary level.

// 1. bitwise AND
console.log(true & false); // 0
console.log(1 & 0); // 0
console.log(1 & 1); // 1
console.log(true & 0); // 0

// 2. bitwise OR
console.log(true | false); // 1
console.log(1 | 0); // 1
console.log(1 | 1); // 1
console.log(true | 0); // 1

// 3. bitwise XOR
// Returns 1 if both bits are different, otherwise 0.
console.log(0 ^ 0); //0
console.log(1 ^ 0); //1
console.log(0 ^ 1); //1
console.log(1 ^ 1); //0

// 4. bitwise NOT
// Returns 1 if bit is 0, otherwise 0.
console.log(!0);
console.log(~0);
console.log(!1);
console.log(!false);
console.log(!true);

// 5. Left Shift
// Shifts the bits left by pushing zeros in from right and discarding leftmost bits.
console.log("LEFT SHIFT");
console.log(5 << 2);

// 6. Right Shift
// Shifts the bits right by pushing copies of sign bit in from left and discarding rightmost bits.
console.log("RIGHT SHIFT");
console.log(5 >> 2);

let x1 = 10; // x is assigned the value 10
console.log(x1); // 10
let x2 = 10;
x2 += 5; // Equivalent to x = x + 5
console.log(x2); // 15
let x3 = 10;
x3 -= 3; // Equivalent to x = x - 3
console.log(x3); // 7
let x4 = 10;
x4 *= 2; // Equivalent to x = x * 2
console.log(x4); // 20
let x5 = 10;
x5 /= 2; // Equivalent to x = x / 2
console.log(x5); // 5
let x6 = 10;
x6 %= 3; // Equivalent to x = x % 3
console.log(x6); // 1 (10 divided by 3 leaves a remainder of 1)
let x7 = 2;
x7 **= 3; // Equivalent to x = x ** 3
console.log(x7); // 8 (2 raised to the power of 3)
let x8 = 10;
x8 &&= 5; // Equivalent to x = x && 5
console.log(x8); // 5 (because x is truthy, it assigns 5)
let x9 = 0;
x9 ||= 5; // Equivalent to x = x || 5
console.log(x9); // 5 (because x is falsy, it assigns 5)
let x10 = 0;
x10 ||= 5; // Equivalent to x = x || 5
console.log(x10); // 5 (because x is falsy, it assigns 5)
let x11 = null;
x11 ??= 5; // Equivalent to x = x ?? 5
console.log(x11); // 5 (because x is null, it assigns 5)

//====================> Conditional Operators
let number1 = 10;
let number2 = 5;
let result =
  number1 > number2 ? `${number1} is greater` : `${number2} is greater`;
console.log(result);

const year = 2004;
const obj = {
  name: "John",
  age: year < 2005 ? "adult" : "minor",
  city: "New York",
};

console.log(obj.name + " is " + obj.age + " and lives in " + obj.city);

//====================> Nullish Coalescing
// Nullish Coalescing operator in JavaScript is represented by two question marks (??). It takes two operands and returns the first operand if it is not null or undefined. Otherwise, it returns the second operand

const ary = [10, 30, 20, 40, 50];
console.log(ary ?? None);
const ary1 = null;
console.log(ary1 ?? []);

//====================> Safe Assignment Operator (?=)
let user_name = null;
user_name ??= "Guest";
console.log(user_name);

//====================> Yield Operator
// The yield operator in JavaScript is used in generator functions to pause and resume the execution of the function. It allows you to produce a sequence of values (one at a time) on demand, making it a powerful tool for working with iterators and asynchronous programming.
// What is a Generator Function?
// A generator function is a special type of function that can be paused and resumed during execution. It is defined using the function* syntax. When called, it returns a generator object, which conforms to both the iterable protocol and the iterator protocol.
function* numberGenerator(num) {
  yield num + 1;
  yield num + 1;
  yield num + 2;
}

const generator = numberGenerator(10);
console.log(generator.next().value); //11
console.log(generator.next().value); //11
console.log(generator.next().value); //12
console.log(generator.next().value); //undefined (generator id done)

function* twoWayGenerator() {
  const name = yield "What is your name?"; // Pause and wait for input
  yield `Hello, ${name}!`; // Resume and use the input
}

const generator1 = twoWayGenerator();

console.log(generator1.next().value); // "What is your name?"
console.log(generator1.next("Alice").value); // "Hello, Alice!"

//=================> Spread operator
const subjects = ["Physics", "Chemistry", "Biology"];
console.log(subjects);
console.log(...subjects);

let newSubjects = ["Mathematics", ...subjects];
console.log(...newSubjects);

function sum(...nums) {
  let total = 0;
  for (let i = 0; i < nums.length; i++) {
    total += nums[i];
  }
  return total;
}
console.log(sum(1, 2, 3, 4, 5));

//==================> If Statement <===================
let agee = 15;
if (agee >= 18) {
  console.log("You are eligible to vote");
} else {
  console.log("You are not eligible to vote");
}

console.log(agee >= 18 ? "Eligible to vote" : "Not eligible to vote");

//==================> While Loop <===================
let numm = 1;
while (numm <= 5) {
  console.log(`count : ${numm}`);
  numm++;
}

//=================> Do While Loop <=================
let a = 1;
do {
  console.log(`Value of a : ${a}`);
  a++;
} while (a <= 3);

//=================>   For Loop   <====================
for (let i = 1; i <= 5; i++) {
  console.log(`Count : ${i}`);
}

//================> For Each Loop <===================
let nos = [1, 2, 3, 4, 5];
nos.forEach((num) => {
  console.log(`Square of ${num} : ${num * num}`);
});

//================> For in loop  <=====================
let cities = ["New York", "London", "Paris", "Tokyo", "Sydney"];
for (let i in cities) {
  console.log(`City : ${cities[i]}`);
}

let myobj = {
  name: "Krishna",
  age: 20,
  address: {
    city: "Lucknow",
    country: "India",
  },
};
for (let key in myobj) {
  console.log(`${key} : ${myobj[key]}`);
}

let str = "Hello";
for (let char of str) {
  console.log(char);
}

//=================> For of Loop <=======================
let numbers = [1, 2, 3, 4, 5];
for (let num of numbers) {
  console.log(`Square of ${num} : ${num * num}`);
}

//=======================> LOOP CONTROL STATEMENTS
// break
for (let i = 1; i <= 5; i++) {
  if (i == 3) {
    break;
  }
  console.log(`Count : ${i}`);
}

// continue
for (let i = 1; i <= 5; i++) {
  if (i == 3) {
    continue;
  }
  console.log(`Num : ${i}`);
}

// label :  'label' is not a keyword, but you can use any identifier followed by a colon (:) to give a label to the loop. After that, you can use the label to target the particular loop with the break and continue keyword.
outerloop: for (let i = 0; i < 3; i++) {
  console.log("Outerloop: " + i);
  innerloop: for (let j = 0; j < 3; j++) {
    if (j > 3) break; // Quit the innermost loop
    if (i == 2) break innerloop; // Do the same thing
    if (i == 4) break outerloop; // Quit the outer loop
    console.log("Innerloop: " + j);
  }
}
console.log("Exiting the loop!");

// Switch
let day = "Monday";
switch (day) {
  case "Monday":
    console.log("Today is Monday");
    break;
  case "Tuesday":
    console.log("Today is Tuesday");
    break;
  default:
    console.log("Today is not Monday or Tuesday");
    break;
}

//========================> Custom Iterator
function customIterator(array) {
  let index = 0;
  return {
    next() {
      if (index < array.length) {
        return { value: array[index++], done: false };
      } else {
        return { done: true };
      }
    },
  };
}

const myArray = [1, 2];
const iterator = customIterator(myArray);
console.log(iterator.next()); // {value: 1, done: false}
console.log(iterator.next()); // {value: 2, done: false}
console.log(iterator.next()); // {value: undefined, done: true}

//------------------------------------------------------------------------------
//==========================> FUNCTIONS <=======================================
//------------------------------------------------------------------------------

function greet() {
  console.log("Hello");
}
greet();

function add(a, b) {
  console.log(a + b);
}
add(4, 5);

function sum(...nums) {
  let total = 0;
  for (let i = 0; i < nums.length; i++) {
    total += nums[i];
  }
  return total;
}
console.log(sum(2, 2, 4, 4, 5));

let n1 = [2, 2, 2, 2, 2];
console.log(sum(...n1));

// Default parameters
function greet_user(name = "User") {
  console.log(`Hello ${name}`);
}
greet_user();
greet_user("Ishita");

//===================>  Function Hosting
// function hoisting in JavaScript is a default behavior in which function declarations are moved at the top of their local scope before execution of the code.
square_root(25);
function square_root(num) {
  console.log(Math.sqrt(num));
}

//==================>  Self Invoking
// self-invoking functions are JavaScript functions that execute immediately as they are defined

(function () {
  console.log("I am a self-invoking function");
})();

(function (name) {
  console.log(`Hello ${name}. I am self invoking function`);
})("Deepak");

//==================> Arrow Function
// arrow functions in JavaScript allow us to create a shorter and anonymous function. Arrow functions are written without "function" keyword.

const sq = (num) => num * num;
console.log(sq(5));

const sqrt = (num) => {
  return Math.sqrt(num);
};
console.log(sqrt(25));

//==================> Closure
// Closure is a special combination of a function bundled with the lexical environment within which that function was declared.

function outer() {
  console.log("The outer function is executed! ");
  function inner() {
    console.log("The inner function is executed! ");
  }
  inner();
}
outer();

function createCounter() {
  let count = 0;
  return function () {
    return count++;
  };
}
const counter = createCounter();
console.log(counter()); // 0
console.log(counter()); // 1

//==================> Recursion
function factorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
console.log(factorial(5));


//=================> Variable scope
var user = 'Ishita Kirti Gautam';   // global scope
function func() {
  let func1 = 10;
  {
     var func2 = 9; // function scope
     let func3 = 100; // Block scope
     const func4 = 220; // Block scope
  }
  // x is accessible here, but not y & z
  console.log(func1);
  console.log(func2);
  console.log(user);
  // console.log(func3);
  // console.log(func4);
}

func();



//------------------------------------------------------------------------
//===============================> REGEX <================================
//------------------------------------------------------------------------

// i :Perform case-insensitive matching.
// m :Specifies that if the string has newline or carriage return characters, the ^ and $ operators will now match against a newline boundary, instead of a string boundary
// g :Performs a global matchthat is, find all matches rather than stopping after the first match.
// [...] : Any one character between the brackets.
// [^...] : Any one character not between the brackets.
// [0-9] : It matches any decimal digit from 0 through 9.
// [a-z] : It matches any character from lowercase a through lowercase z.
// [A-Z] : It matches any character from uppercase A through uppercase Z.
// [a-Z] : It matches any character from lowercase a through uppercase Z.

let str1 = "Javascript is very good language, it is very usefull.";
let re = /very/gi;
let result_str = str1.match(re);
console.log(result_str);

let res = new RegExp("very", "gi");
let res1 = str1.match(res);
console.log(res1);


// test() : Checks if a string matches the regex pattern. Returns true or false.
let str2 = "Hello world. This is Javascript. Hello world.";
console.log(/hi world/.test(str2));
console.log(/hello world/.test(str2));
console.log(/Hello/.test(str2));


// exec() : Returns an array containing the matched substring, or null if no match is found.
console.log(/world/.exec(str2));


// match() : Returns an array containing the matched substring, or null if no match is found.
console.log(str2.match(/world/));


// search() : Returns the index of the first match, or -1 if no match is found.
console.log(str2.search(/world/));

// replace() : Returns a string with the matched substrings replaced by the replacement string.
console.log(str2.replace(/world/g, "planet"));

// replaceAll() : Returns a string with all matches of the pattern replaced by the replacement string.
console.log(str2.replaceAll(/world/g, "planet"));

// split() : Returns an array of substrings split by the separator.
console.log(str2.split(/ /));


// =================> Symbols : 
// Symbols are immutable and unique, unlike to other primitive data types like strings or numbers. They are especially helpful in situations where a unique identifier is required since they offer a way to create private object properties and avoid naming conflicts.

const sym1 = Symbol();
const sym2 = Symbol("key");
const sym3 = Symbol("key");
console.log(sym1);
console.log(sym2);
console.log(sym3);
console.log(sym1 === sym2);
console.log(sym2 === sym3);

// =================> Set
// Set object is a collection of unique values. Each value can only occur once in a Set. A Set can hold any value of any data type.
// Unique Values: A Set automatically removes duplicate values.
// Iterable: You can iterate over a Set using methods like for...of or forEach.
// No Indexing: Unlike arrays, a Set does not have index-based access.
// Mixed Data Types: A Set can store values of different data types (e.g., numbers, strings, objects).

let set1 = new Set();
set1.add("Newton");
set1.add("Newton");       // will be added only once 
set1.add("Issac");
set1.add("Gravity");
console.log(set1);


let num_set = new Set([11,22,33,44,55]);
for(let value of num_set){
  console.log(value);
}
console.log('check has 11 : ',num_set.has(11));

num_set.delete(11);
console.log(num_set);

num_set.clear();
console.log(num_set);


const cars = new Set(["R8","911","Venneno","La","Veron"]);
const companies = new Set(["Audi","Porshe","Lamborghini","Ferrari"]);

const union = new Set([...cars,...companies]);
console.log(union);
console.log(union.size);

for(const value of union){
  console.log(value);
}

const intersection = new Set([...cars].filter(x => companies.has(x)));
console.log('intersection : ',intersection);
union.clear();
console.log('union :', union)


const nums_set = ([11,22,33,44]);
// for loop
for (let i = 0; i < nums_set.length; i++){
  console.log(nums_set[i]);
}
console.log('---------------')

// for of loop
for (let value of nums_set){
  console.log(value);
}


(nums_set).forEach((value) => {
  console.log('value : ',value);
})

console.log('---------------')

// for each loop
nums_set.forEach((value) => {
  console.log(value);
});
console.log('---------------')


//=================> Map
// Map object is a collection of key-value pairs. Each key can have only one value. A Map can hold any value of any data type.
// map() function creates a new array by applying a transformation function to each element of the original array.

const number_list = [1,2,3,4,5]
function square(x){
  return x*x
}
const squares = number_list.map((num)=>square(num));
console.log(squares);

const cubes = number_list.map((num)=>num*num*num);
console.log(cubes);

//=================> Filter
// filter() function creates a new array by keeping only the elements that pass the test implemented by the provided function.
// The filter() function creates a new array with all elements that pass a test (predicate function).

const newAry = number_list.filter((num) => num % 2 === 0);  
console.log(newAry);

//=================> Reduce
// reduce() function applies a function against an accumulator and each value of the array (from left-to-right) to reduce it to a single value.
// reduce() function reduces an array to a single value by applying a reducer function to each element.

const sum_ary = number_list.reduce((accumulator, currentvalue) => accumulator+currentvalue, 0);
console.log(sum_ary);



//============================> OBJECTS <=================================
const employee = {
  name : 'Sonu', age : 22,salary : 50000, designation : 'Manager',
  displayInfo : function(){
    console.log(`..Name : ${this.name}, ..Age : ${this.age}, ..Salary : ${this.salary}`);
  }
}

console.log(employee);

employee.displayInfo();
console.log('Employee name : ',employee.name);

employee.name = 'John Doe';
console.log('Employee name : ',employee.name);

employee['name'] = 'Johnny Mane';
console.log('Employee name : ',employee.name);


employee[age] = 25;
employee.displayInfo();




// object constructor
// function Person(name, age, city){
//   this.name = name;
//   this.age = age;
//   this.city = city;
//   this.displayInfo = function(){
//     console.log(`Name : ${this.name}. Age : ${this.age}. City : ${this.city}.`);
//   }
// }

// const person1 = new Person('John', 25, 'New York');
// person1.displayInfo();

