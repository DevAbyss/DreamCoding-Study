// ! 연산자 | boolean의 모든 것 && 연산자
// @ boolean의 모든 것
// https://developer.mozilla.org/en-US/docs/Web/javascript/reference/global_objects/boolean
// false: 0, -0, null, false, NaN, undefined, 빈 문자열("") - Data의 값이 없거나 비어있는 것
// true: 1, -1, 'Hi', [], "false" - false 예를 제외한 모든 다른 값
if (true) {
  console.log('true!');
} else {
  console.log('false!');
}

// @ 연산자를 쓰는 이유
let obj = {
  name: 'ellie',
}; // obj가 선언되고 값이 할당돼 있지 않다면, 값이 undefined

if (obj) {
  console.log(obj.name);
}

// 위의 if문 변환
obj && console.log(obj.name);
