'use strict';

const numbers = [1,2,3,4,5,6,7];

class Student {
  constructor(name, korean, english, math) {
    this.name = name;
    this.korean = korean;
    this.english = english;
    this.math = math;
  }
}

const student1 = new Student('홍길동', 95, 87, 85);
const student2 = new Student('김길동', 67, 77, 100);
const student3 = new Student('고길동', 90, 89, 75);
const student4 = new Student('최길동', 88, 93, 80);

const students = [student1, student2, student3, student4];

const fruits = ['사과', '배', '딸기', '참외', '수박', '딸기'];

// map()
// const result = numbers.map((numbers) => numbers * 2 );
// console.log(result);

// console.log("영어 점수 : ", students.map((student) => student.english ));
// console.log("학생 이름 : ", students.map((student) => student.name ));

// some()
console.log(
  '과일 중에 배가 있나요?',
  fruits.some((fruits) => fruits === '배')
);

console.log(
  '과일 중에 배가 있나요?',
  fruits.some((fruits, index) => 
  {
    console.log('index : ', index, 'fruit : ', fruits);
    return fruits === '배'
  }
));

console.log(
  '숫자에 7이상인 숫자가 있나요?',
  numbers.some((numbers) => numbers >= 7)
);

console.log(
  '수학 점수가 100점인 학생이 있나요?',
  students.some((student) => student.math === 100)
);

console.log(
  '영어 점수가 50점 미만인 학생이 있나요?',
  students.some((student) => student.english < 50)
);

// every()
console.log(
  '숫자가 모두 8 이하인가요?',
  numbers.every((numbers) => numbers <= 8)
);

console.log(
  '학생들의 수학 점수가 모두 80점 이상인가요?',
  students.every((student) => student.math >= 75)  
);

// filter()
console.log(
  '짝수만 출력해주세요',
  numbers.filter((numbers) => numbers % 2 === 0)
);

console.log(
  '홀수만 출력해주세요',
  numbers.filter((numbers) => numbers % 2 === 1)
);

console.log(
  '영어 점수가 90점 이상인 학생들은?',
  students.filter((student) => student.english >= 90)
);

// reduce()
// const result = numbers.reduce((acc, cur, idx, src) => {
//   console.log('acc : ', acc, ', cur : ', cur, ', idx : ', idx);
//   return acc + cur;
// }, 0);
// console.log('result : ', result);

console.log(fruits);
const result = fruits.reduce((acc, cur) => {
  console.log('acc : ', acc, ', cur : ', cur)
  if(acc.includes(cur) === false) {
    acc.push(cur);
  }
  return acc;
}, []);
console.log(result);