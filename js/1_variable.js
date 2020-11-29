// ! 1. Use strict
// Whole-script strict mode syntax
// why? JavaScript is very flexible
// added ECMAScript 5
// TypeScript를 사용할 때는 선언 x
// use this Vanilla JavaScript
'use strict';

// ! 2. Variable (Mutable), rw(read/write)
// let (added in ES6)
let globalName = 'global name';
{
  let name = 'ellie';
  console.log(name);
  name = 'hello';
  console.log(name);
  console.log(globalName);
}
console.log(name);
console.log(globalName);

// var (don't ever use this!)
// var hoisting (move declaration from bottom to top)
// cf) hoisting - 변수 선언을 어디에 했든 상관없이, 항상 선언을 제일 위로 끌어올리는 것
// has no block scope
{
  age = 4;
  var age;
}
console.log(age);

// ! 3. Constant (Immutable), r(read)
// 값을 한번 할당하면, 값이 절대로 바뀌지 않음
// use const whenever possible
// only use let if variable needs to change
// favor immutable data type always for a few reasons:
// - security
// - thread safety: 다수의 thread가 동시에 변수에 접근해서 값을 변경 x
// - reduce human mistakes
const daysInWeek = 7;
const maxNumber = 5;

console.log(daysInWeek);

// Note
// Immutable data types: primitive types, frozen objects (i.e. object.freeze())
// Mutable data types: all objects by default are mutable in JS
// favor immutable data type always for a few reasons:
// - security
// - thread safety
// - reduce human mistakes

// ! 4. Variable types
// primitive, single item(더 이상 작은 단위로 나눠질 수 없음): number, string, boolean, null, undefined, symbol
// object, box container (single item들을 여러 개 묶어서 한 단위로 관리)
// primitive type은 memory에 value가 저장
// object type은 memory에 reference가 저장
// function
// cf) first-class function
// - function도 다른 data type처럼 변수에 할당 가능
// - function의 parameter(인자)로도 전달
// - function의 return type으로도 fuction을 return 가능

// data types for number (C, Java)
// short (정수) - 2 bytes
// int (정수) - 4 bytes
// long (정수) - 8 bytes
// float (실수) - 4 bytes
// double (실수) - 16 bytes

// JavaScript는 number로 통일 (TypeScript에서도 동일)
const count = 17; // integer
const size = 17.1; // decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number - special numeric values: infinity, -infinity, NaN
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log('infinity: ', infinity);
console.log('negativeInfinity: ', negativeInfinity);
console.log('nAn: ', nAn);

// string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello ' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; // template literals (string) - `${variable}`
console.log(`value: ${helloBob}, type: ${typeof helloBob}`); // template literals (string) 사용
console.log('value: ' + helloBob + ', type: ' + typeof helloBob); // template literals (string) 미사용

// boolean
// false: 0, null, undefined, NaN, ''
// true: any other value
const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null - empty value
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined - 선언은 됐지만, 값 할당 x
let x;
console.log(`value: ${x}, type: ${typeof x}`);

// symbol, create unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2); // false

const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); // true
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);

// object, real-life object, data structure
const ellie = { name: 'ellie', age: 20 };
ellie.age = 21;
console.log('ellie age: ', ellie.age);

// 5. Dynamic typing: dynamically typed language
let text = 'hello';
console.log(text.charAt(0)); // 'h' 출력
console.log(`value: ${text}, type: ${typeof text}`);

text = 1;
console.log(`value: ${text}, type: ${typeof text}`);

text = '7' + 1;
console.log(`value: ${text}, type: ${typeof text}`);

text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);

// console.log(text.charAt(0));
// TypeError, 현재 text는 number type이기 때문
