// Q1. make a string out of an array
// 배열로 문자열 만들기
{
  const fruits = ['apple', 'banana', 'orange'];

  // separator는 있어도 되고 없어도 됨
  // 없으면 기본적으로 comma가 들어감
  const result = fruits.join(', ');
  console.log('Q1: ', result);
}

// Q2. make an array out of a string
// 문자열로 배열 만들기
{
  const fruits = '🍎, 🥝, 🍌, 🍒';

  // separator가 무조건 있어야함
  const result = fruits.split(', ');
  console.log('Q2: ', result);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
// 이 배열을 다음과 같이 만드십시오 : [5, 4, 3, 2, 1]
// 원본 array도 바뀜
{
  const array = [1, 2, 3, 4, 5];

  const result = array.reverse();
  console.log('Q3: ', result);
  console.log('array: ', array);
}

// Q4. make new array without the first two elements
// 처음 두 element 없이 새 배열 만들기
{
  const array = [1, 2, 3, 4, 5];

  const result = array.slice(2, 5);
  console.log('Q4: ', result);
  console.log('array: ', array);

  // splice는 배열 자체를 수정
  // slice는 배열에서 원하는 부분만 return해서 받아옴
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90
// 90 점의 학생 찾기
{
  const result = students.find((student) => student.score === 90);
  console.log('Q5: ', result);
}

// Q6. make an array of enrolled students
// 등록 된 학생들의 배열
{
  const result = students.filter((student) => student.enrolled === true);
  console.log('Q6: ', result);
}

// Q7. make an array containing only the students' scores
// 학생의 점수만 포함하는 배열 만들기
// result should be: [45, 80, 90, 66, 88]
{
  const result = students.map((student) => student.score);
  console.log('Q7: ', result);
}

// Q8. check if there is a student with the score lower than 50
// 50 점 미만의 학생이 있는지 확인
{
  // # 배열 중에 어떤 것이라도 하나 만족되는 것이 있는지 없는지 확인할 때는 some 사용
  const result = students.some((student) => student.score < 50);
  console.log('Q8: ', result);

  // # 모든 배열의 조건을 만족해야할 때는 every 사용
  const result2 = !students.every((student) => student.score >= 50);
  console.log('Q8: ', result2);
}

// Q9. compute students' average score
// 학생들의 평균 점수 계산
{
  const sum = students.reduce((prev, curr) => prev + curr.score, 0);
  const average = sum / students.length;
  console.log('Q9: ', average);
}

// Q10. make a string containing all the scores
// 모든 점수를 포함하는 문자열 만들기
// result should be: '45, 80, 90, 66, 88'
{
  const result = students.map((student) => student.score).join(', ');
  console.log('Q10: ', result);
}

// Bonus! do Q10 sorted in ascending order
// Q10을 오름차순으로 정렬
// result should be: '45, 66, 80, 88, 90'
{
  const result = students
    .map((student) => student.score)
    .sort((a, b) => a - b)
    .join(', ');
  console.log('Q10: ', result);
}
