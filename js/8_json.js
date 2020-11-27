// JSON
// JavaScript Object Notation

console.log('--- 1. Object to JSON ---');
// ! 1. Object to JSON
// @ stringify(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banana']);
console.log(json);

const rabbit = {
  name: 'tori',
  color: 'white',
  size: null,
  birthDate: new Date(),
  // symbol: Symbol('id'), // JavaScript에 있는 특별한 data기 때문에 JSON에 미포함
  jump: () => {
    console.log(`${this.name} can jump!`);
  }, // function은 Object에 있는 data가 아니기 때문에 JSON에 미포함
};

json = JSON.stringify(rabbit);
console.log(json);

json = JSON.stringify(rabbit, ['name', 'color']);
console.log(json);

json = JSON.stringify(rabbit, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return key === 'name' ? 'ellie' : value;
});
console.log(json);

console.log('--- 2. JSON to Object ---');
// ! 2. JSON to Object
// @ parse(json)
json = JSON.stringify(rabbit);
console.log(json);

const obj = JSON.parse(json);
console.log(obj);
rabbit.jump();
// obj.jump(); rabbit object가 JSON 문자열로 변환되는 과정에서 함수가 빠지고, 다시 object가 됐기 때문에 jump function 사용 불가능

console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate); // obj의 birthDate는 String이기 때문에 .getDate() 사용 불가

// # JSON 유용한 사이트
// JSON Diff checker: http://www.jsondiff.com/
// JSON Beautifier/editor: https://jsonbeautifier.org/
// JSON Parser: https://jsonparser.org/
// JSON Validator: https://tools.learningcontainer.com/
