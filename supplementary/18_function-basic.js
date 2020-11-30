// Don't give up

// ! 1. 합수 선언
function doSomething(add) {
  console.log(add);
  const result = add(2, 3);
  console.log(result);
}

// 값을 return하는 함수
function add(a, b) {
  const sum = a + b;
  return sum;
}

// ! 2. 함수 호출
const result = add(2, 3);
console.log(result);

const addFun = add;
console.log(add);
const result2 = addFun(1, 2);
console.log(result2);

// ! 3. 함수를 인자로 전달
doSomething(add);
