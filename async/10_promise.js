'use strict';

// Promise is a JavaScript object for asynchronous operation
// state: pending -> fulfilled or rejected
// Producer vs Consumer

// ! 1. Producer
// Promise 만들기
// when new Promise is created, the executor runs automatically
const promise = new Promise((resolve, reject) => {
  // doing some heavy work (network, read files)
  console.log('doing something...');
  setTimeout(() => {
    resolve('ellie');
    // reject(new Error('no network'));
  }, 2000);
});

// ! 2. Consumers: then, catch, finally
// Promise 사용하기
promise
  // then은 똑같은 Promise를 return
  .then((value) => {
    console.log(value);
  })
  // return된 Promise의 catch를 호출 가능
  .catch((error) => {
    console.log(error);
  })
  .finally(() => console.log('finally'));

// ! 3. Promise chaining
// Promise 연결하기
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});

fetchNumber
  .then((num) => num * 2)
  .then((num) => num * 3)
  .then((num) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000);
    });
  })
  .then((num) => console.log(num));

// ! 4. Error Handling
const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve('암탉'), 1000);
  });

const getEgg = (hen) =>
  new Promise((resolve, reject) => {
    // setTimeout(() => resolve(`${hen} => 달걀`), 1000);
    setTimeout(() => reject(new Error(`error! ${hen} => 달걀`)), 1000);
  });

const cook = (egg) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => 계란 프라이`), 1000);
  });

// getHen()
//   .then((hen) => getEgg(hen))
//   .then((egg) => cook(egg))
//   .then((meal) => console.log(meal));

// then에서 받아오는 value를 바로 getEgg 함수에 암묵적으로 전달해서 호출
// 그 아래 함수도 마찬가지
getHen() //
  .then(getEgg)
  // .catch((error) => {
  //   return '빵';
  // })
  .then(cook)
  .then(console.log)
  .catch(console.log);
