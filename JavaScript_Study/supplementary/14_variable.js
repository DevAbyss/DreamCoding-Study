// ! 변수 | primitive 타입과 object의 차이점
// @ primitive type
// 담을 수 있는 가장 작은 단위의 데이터
// number, string, boolean, null, undefined
// 변수를 다른 변수에 할당할 때 값 자체가 복사
let age = 29; // number
let name = 'ellie'; // string

let num = 2;
let num2 = num;
console.log(num);
console.log(num2);

num2 = 3;
console.log(num2);

// @ object type
// number, string, boolean, null, undefined 제외한 모든 것 (array, list, function 등)
// 변수를 다른 변수에 할당할 때 변수의 reference가 복사됨
const obj = {
  name: 'ellie',
  age: 29,
};

console.log(obj);
console.log(obj.name);
console.log(obj.age);

let obj2 = obj;
console.log(obj2);
console.log(obj2.name);
console.log(obj2.age);

obj.name = 'james';
console.log('--- obj.name을 james로 바꾼 후 ---');
console.log('obj.name: ', obj.name);
console.log('obj2.name: ', obj2.name);

const obj3 = {
  name: 'tom',
  age: 21,
};
console.log('obj3.name: ', obj3.name);

// object를 가르키는 reference는 다른 reference로 변경이 불가능
// 하지만 reference가 가르키는 object의 value는 변경 가능
obj3.name = 'testName';
console.log('obj3.name: ', obj3.name);
