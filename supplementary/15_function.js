// ! 함수 | 함수 정의, 호출, 그리고 콜백함수
// @ 함수 정의와 호출
const num1 = 1;
const num2 = 2;
const result = num1 + num2;
console.log(result);

// 반복적으로 수행되는 것은 함수로 만듦
// 재사용이 가능하기 때문
// 인자는 우리가 정의하여 함수에 전달하는 값
function add(num1, num2) {
  return num1 + num2;
}

const sum1 = add(2, 3);
console.log(sum1);

function print() {
  console.log('print');
}

print();

// @ 함수를 다른 변수에 할당
const doSomething = add;
const sum2 = doSomething(3, 5);
console.log(sum2);

// @ 함수를 다른 함수에 인자로 전달
function divide(num1, num2) {
  return num1 / num2;
}

function surprise(operator) {
  const result = operator(6, 10); // divide(5, 6)
  console.log(result);
}

surprise(divide);
