'use strict';
// ! Function
// - fundamental building block in the program
// - subprogram can be used multiple times
// - perform a task or calculates a value

console.log('--- 1. Function declaration ---');
// ! 1. Function declaration
// function name (param1, param2) { body... return; }
// ★ one function === one thing
// naming: doSomething, command, verb
// e.g. createCardAndPoint -> createCard, createPoint
// function is object in JS
function printHello() {
  console.log('Hello');
}
printHello();

function log(message) {
  console.log(message);
}
log('Hello@');
log(1234);

console.log('--- 2. Parameters ---');
// ! 2. Parameters
// premitive parameters: passed by value
// object parameters: passed by reference
function changeName(obj) {
  obj.name = 'coder';
}
const ellie = { name: 'ellie' };
changeName(ellie);
console.log(ellie);

console.log('--- 3. Default parameters (added in ES6) ---');
// ! 3. Default parameters (added in ES6)
function showMessage(message, from = 'unknown') {
  console.log(`${message} by ${from}`);
}
showMessage('Hi!');

console.log('--- 4. Rest parameters (added in ES6) ---');
// ! 4. Rest parameters (added in ES6)
// array 형태
function printAll(...args) {
  for (let i = 0; i < args.length; i++) {
    console.log(`(for) args${i}: ${args[i]}`);
  }

  // for...of
  for (const arg of args) {
    console.log(`(for...of) arg: ${arg}`);
  }

  // forEach (함수형)
  args.forEach((arg) => console.log(`(forEach) arg: ${arg}`));
}
printAll('dream', 'coding', 'ellie');

console.log('--- 5. Local scope ---');
// ! 5. Local scope
// note) 밖에서는 안이 보이지 않고, 안에서만 밖을 볼 수 있다.
let globalMessage = 'global'; // global variable
function printMessage() {
  let message = 'hello'; // local variable, 함수 밖에서는 사용 불가
  console.log(`local variable: ${message}`);
  console.log(`globalMessage: ${globalMessage}`);

  function printAnother() {
    console.log(message);
    let childMessage = 'hello';
  }

  // console.log(childMessage) // error
  // 'return undefined'가 생략된 상태
}
printMessage();

console.log('--- 6. Return a value ---');
// ! 6. Return a value
function sum(a, b) {
  return a + b;
}
const result = sum(1, 2); // 3
console.log(`sum: ${sum(1, 2)}`);

console.log('--- 7. Early return, early exit ---');
// ! 7. Early return, early exit
// @ bad logic
function upgradeUser(user) {
  if (user.point > 10) {
    // long upgrade logic
  }
}

// @ good logic
function upgradeUser(user) {
  if (user.point <= 10) {
    return;
  }
  // long upgrade logic
}

// Note
// First-class function
// functions are treated like any other variable
// can be assigned as a value to variable
// can be passed as an argument to other functions.
// can be returned by another function

console.log('------------------------------');
console.log('--- 1. Function Expression ---');
// ! 1. Function expression
// a function declaration can be called earlier than it is defined. (hoisted)
// a function expression is created when the execution reaches it.

// anonymous function
const print = function () {
  console.log('print');
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(`sumAgain: ${sumAgain(1, 3)}`);

console.log('--- 2. Callback function using function expression ---');
// ! 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo) {
  if (answer === 'love you') {
    printYes();
  } else {
    printNo();
  }
}

// anonymous function
const printYes = function () {
  console.log('yes!');
};

// named function
// better debugging in debugger's stack traces
// recursion
const printNo = function print() {
  console.log('no!');
};

randomQuiz('love you', printYes, printNo);
randomQuiz('wrong', printYes, printNo);

// Arrow function
// always anonymous
const simplePrint = () => console.log('simplePrint!');
simplePrint();

const add = (a, b) => a + b;
console.log(`add: ${add(1, 2)}`);

const simpleMultiply = (a, b) => {
  // do something more
  return a * b;
};

// IIFE: Immediately Invoked Function Expression
(function hello() {
  console.log('IIFE');
})();

// # Fun quiz time
// # function calculate (command, a, b)
// # command: add, substract, divide, multiply, remainder
const calculate = (command, a, b) => {
  // 정해진 data를 처리할 경우 if문보다 switch문이 좋다.
  switch (command) {
    case 'add':
      return a + b;
    case 'substract':
      return a - b;
    case 'divide':
      return a / b;
    case 'multiply':
      return a * b;
    case 'remainder':
      return a % b;
    default:
      throw Error('unknown command');
  }
};

console.log(`add: ${calculate('add', 1, 2)}`);
console.log(`substract: ${calculate('substract', 3, 1)}`);
console.log(`divide: ${calculate('divide', 1, 2)}`);
console.log(`multiply: ${calculate('multiply', 2, 5)}`);
console.log(`remainder: ${calculate('remainder', 5, 2)}`);
console.log(`Error: ${calculate('Error', 5, 2)}`);
