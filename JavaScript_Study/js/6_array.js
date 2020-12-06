'use strict';

// ! Array

console.log('--- 1. Declaration ---');
// ! 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

console.log(arr1);
console.log(arr2);

console.log('--- 2. Index position ---');
// ! 2. Index position
const fruits = ['사과', '바나나'];
console.log(fruits);
console.log(fruits.length);

// object에서는 string type의 key를 통해 접근했다면, array는 Index로 접근
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[fruits.length - 1]); // array의 마지막 값을 찾을 때 사용

console.log('--- 3. Looping over an array ---');
// ! 3. Looping over an array
// print all fruits
// # for
for (let i = 0; i < fruits.length; i++) {
  console.log(`for: ${fruits[i]}`);
}

// # for of
for (let fruit of fruits) {
  console.log(`for of: ${fruit}`);
}

// # forEach(callbackfn)
fruits.forEach((fruit) =>
  // anonymous function는 arrow function 가능
  console.log(`forEach: ${fruit}`)
);

console.log('--- 4. Addition, Deletion, Copy ---');
// ! 4. Addition, Deletion, Copy
// @ push: add an item to the end
fruits.push('딸기', '복숭아');
console.log(fruits);

// @ pop: remove an item from the and
fruits.pop();
fruits.pop();
console.log(fruits);

// @ unshift: add an item to the beginning
fruits.unshift('딸기', '레몬');
console.log(fruits);

// @ shift: remove an item from the beginning
fruits.shift();
fruits.shift();
console.log(fruits);

// note) shift, unshift are slower than pop, push
// why? 전체 data가 움직여야하기 때문!!

// @ splice: remove an item by index position
fruits.push('딸기', '복숭아', '레몬');
console.log(fruits);

fruits.splice(1); // 지정한 index부터 모든 data 삭제
console.log(fruits);

fruits.push('바나나', '딸기', '복숭아', '레몬');
console.log(fruits);

fruits.splice(1, 1); // 바나나 삭제
console.log(fruits);

// 1 index(딸기) 삭제 후 1 index부터 '아오이 사과', '수박' 추가
fruits.splice(1, 1, '아오이 사과', '수박');
console.log(fruits);

// @ concat: combine two arrays
const fruits2 = ['키위', '코코넛'];
const NewFruits = fruits.concat(fruits2);
console.log(NewFruits);

console.log('--- 5. Searching ---');
// ! 5. Searching
// @ IndexOf: find the index
console.log(fruits);
console.log(fruits.indexOf('사과'));
console.log(fruits.indexOf('수박'));
console.log(fruits.indexOf('코코넛'));

// @ includes
console.log(fruits.includes('수박'));
console.log(fruits.includes('코코넛'));

// @ lastIndexOf
fruits.push('사과');
console.log(fruits);
console.log(fruits.indexOf('사과')); // 0, 5 index에 '사과'가 있지만, 처음 나오는 0 index만 출력
console.log(fruits.lastIndexOf('사과')); // 0, 5 index에 '사과'가 있지만, 마지막에 나오는 0 index만 출력
