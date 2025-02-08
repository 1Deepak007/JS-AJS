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
const subjects = ['Physics','Chemistry','Biology']
console.log(subjects)
console.log(...subjects)

let newSubjects = ['Mathematics', ...subjects];
console.log(...newSubjects)

function sum(...nums){
    let total = 0;
    for(let i=0; i<nums.length; i++){
        total += nums[i]
    }
    return total
}
console.log(sum(1,2,3,4,5))


//==================> If Statement <===================
