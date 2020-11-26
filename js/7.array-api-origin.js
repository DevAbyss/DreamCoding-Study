// Q1. make a string out of an array
// 배열로 문자열 만들기
{
  const fruits = ['apple', 'banana', 'orange'];
}

// Q2. make an array out of a string
// 문자열로 배열 만들기
{
  const fruits = '🍎, 🥝, 🍌, 🍒';
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
// 이 배열을 다음과 같이 만드십시오 : [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
}

// Q4. make new array without the first two elements
// 처음 두 element 없이 새 배열 만들기
{
  const array = [1, 2, 3, 4, 5];
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
}

// Q6. make an array of enrolled students
// 등록 된 학생들의 배열
{
}

// Q7. make an array containing only the students' scores
// 학생의 점수 만 포함하는 배열 만들기
// result should be: [45, 80, 90, 66, 88]
{
}

// Q8. check if there is a student with the score lower than 50
// 50 점 미만의 학생이 있는지 확인
{
}

// Q9. compute students' average score
// 학생들의 평균 점수 계산
{
}

// Q10. make a string containing all the scores
// 모든 점수를 포함하는 문자열 만들기
// result should be: '45, 80, 90, 66, 88'
{
}

// Bonus! do Q10 sorted in ascending order
// Q10을 오름차순으로 정렬
// result should be: '45, 66, 80, 88, 90'
{
}
