// ! 1. String concatenation
console.log('my' + ' cat');
console.log('1' + 2);
console.log(`string literals: 1 + 2 = ${1 + 2}`);

// ! 2. Numeric operators
console.log(`Add: ${1 + 2}`); // add
console.log(`Substract: ${1 - 2}`); // substract
console.log(`Divide: ${1 / 2}`); // divide
console.log(`Multiply: ${1 * 2}`); // multiply
console.log(`Remainder: ${5 % 2}`); // remainder
console.log(`Exponentiation: ${2 ** 3}`); // exponentiation

// ! 3. Increment and Decrement operators
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1;
// preIncrement = counter
console.log(`preIncrement:  ${preIncrement}, counter: ${counter}`);

const postIncrement = counter++;
// postIncrement = counter;
// counter = counter + 1
console.log(`preIncrement:  ${postIncrement}, counter: ${counter}`);

const preDecrement = --counter;
// counter = counter - 1;
// preDecrement = counter
console.log(`preDecrement:  ${preDecrement}, counter: ${counter}`);

const postDecrement = counter--;
// postDecrement = counter;
// counter = counter - 1
console.log(`postDecrement:  ${postDecrement}, counter: ${counter}`);

// ! 4. Assignment operators (=)
let x = 3;
let y = 6;
x += y; // x = x + y
x -= y; // x = x - y
x *= y; // x = x * y
x /= y; // x = x / y

// ! 5. Comparison operators (<=, >=)
console.log(10 < 10); // less than
console.log(10 <= 10); // less than or equal
console.log(10 > 10); // greater than
console.log(10 >= 10); // greater than or equal

// ! 6. Logical operator
// or: ||
// and: &&
// not: !
const value1 = false;
const value2 = 4 < 2; // false

function check() {
  for (let i = 0; i < 10; i++) {
    // wasting time
    console.log('소름!');
  }

  return true;
}

// # or: ||, finds the first truthy value
// @ true 값을 찾으면 동작 정지
// @ expression, function을 뒤에 둔다.
console.log(`or: ${value1 || value2 || check()}`);

// # and: &&, finds the first falsy value
// @ false 값을 찾으면 동작 정지
// @ expression, function을 뒤에 둔다.
console.log(`and: ${value1 && value2 && check()}`);

// often used to compress long if-statement
// nullableObject && nullableObject.something
// if (nullableObject != null) {
//   nullableObject.something;
// }

// # not: !
console.log(!value1);

// ! 7. Equality
const stringFive = '5';
const numberFive = 5;

// # loose equality, with type conversion (==, !=)
console.log(`==: ${stringFive == numberFive}`);
console.log(`!=: ${stringFive != numberFive}`);

// # strict equality, no type conversion (===, !==)
console.log(`===: ${stringFive === numberFive}`);
console.log(`!==: ${stringFive !== numberFive}`);

// # object equality by reference
const ellie1 = { name: 'ellie' };
const ellie2 = { name: 'ellie' };
const ellie3 = ellie1;

console.log(ellie1 == ellie2); // false
console.log(ellie1 === ellie2); // false
console.log(ellie1 === ellie3); // true

// @ equality - puzzler
console.log('--- equality - puzzle ---');
console.log(0 == false); // true
console.log(0 === false); // false
console.log('' == false); // true
console.log('' === false); // false
console.log(null == undefined); // true
console.log(null === undefined); // false

// ! 8. Conditional operators (if)
// if, else if, else
console.log('--- if문 ---');
const name = 'ellie';
if (name === 'ellie') {
  console.log('Welcome, Ellie');
} else if (name === 'coder') {
  console.log('You are amazing coder');
} else {
  console.log('unknown');
}

// ! 9. Ternary operator (?)
// condition ? value1 : value2;
// true면 value1, false면 valse2 return
console.log('--- 삼항 연산자 ---');
console.log(name === 'ellie' ? 'yes' : 'no');

// ! 10. Switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS
console.log('--- switch문 ---');
const browser = 'Chrome';
switch (browser) {
  case 'IE':
    console.log('go away!');
    break;
  case 'Chrome':
  case 'Firefox':
    console.log('love you!');
    break;
  default:
    console.log('same all!');
    break;
}

// ! 11. Loops
// # while loop, while the condition is truthy,
// # body code is executed
// 조건문이 맞을 때만 block을 실행하고 싶다면, while
console.log('--- 반복문 ---');
let i = 3;
while (i > 0) {
  console.log(`while: ${i}`);
  i--;
}

// # do while loop, body code is executed first,
// # then check the condition
// block을 먼저 실행하고 싶다면, do while
do {
  console.log(`do while: ${i}`);
  i--;
} while (i > 0);

// # for loop
// # for (begin; condition; step)
for (i = 3; i > 0; i--) {
  console.log(`for: ${i}`);
}

for (let i = 3; i > 0; i = i - 2) {
  // inline variable declaration
  // 지금 변수 i는 지역 변수
  console.log(`inline variable for: ${i}`);
}

// nested loops
for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    console.log(`i: ${i}, j: ${j}`);
  }
}

console.log('--- 문제 ---');
// break, continue
// @ 1. Iterate from 0 to 10 and print only even number (use continue)
console.log('1번 문제');
for (let i = 0; i < 11; i++) {
  if (i > 0 && i % 2 === 0) {
    continue;
  }
  console.log(`i: ${i}`);
}

// @ 2. Iterate from 0 to 10 and print numbers until reaching 8 (use break)
console.log('2번 문제');
for (let i = 0; i < 11; i++) {
  if (i > 8) {
    break;
  }
  console.log(`i: ${i}`);
}
