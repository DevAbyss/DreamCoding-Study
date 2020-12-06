'use strict';

// callback 함수: 전달한 함수를 나중에 부름
// 다른 함수의 인자로써 이용되는 함수
// 어떤 이벤트에 의해 호출되어지는 함수

// Synchronous callback
function printImmediately(print) {
  print();
}

// Asynchronous callback
function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
}

// JavaScript is synchronous.
// Execute the code block in order after hoisting.
// hoisting: "var, function declaration" 자동적으로 제일 위로 올라가는 것
console.log('1');
setTimeout(() => console.log('2'), 1000);
console.log('3');
printImmediately(() => console.log('sync callback'));
printWithDelay(() => console.log('async callback'), 2000);

// Callback Hell example
class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if (
        (id === 'ellie' && password === 'dream') ||
        (id === 'coder' && password === 'academy')
      ) {
        onSuccess(id);
      } else {
        // 'Error' class는 JavaScript에서 제공하는 Object
        onError(new Error('not found'));
      }
    }, 2000);
  }

  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === 'ellie') {
        onSuccess({ name: 'ellie', role: 'admin' });
      } else {
        onError(new Error('no access'));
      }
    }, 1000);
  }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');

userStorage.loginUser(
  id,
  password,
  (user) => {
    userStorage.getRoles(
      user,
      (userWithRole) => {
        alert(
          `Hello ${userWithRole.name}, you have a ${userWithRole.role} role`
        );
      },
      (error) => {
        console.log(error);
      }
    );
  },
  (error) => {
    console.log(error);
  }
);

// callback chain의 문제점 - 가독성 저하
