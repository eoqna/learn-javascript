export const numbers = [1,2,3,4,5,6,7];

export class Student {
  constructor(name, korean, english, math) {
    this.name = name;
    this.korean = korean;
    this.english = english;
    this.math = math;
  }
}

const student1 = new Student('홍길동', 95, 87, 85);
const student2 = new Student('김길동', 67, 77, 40);
const student3 = new Student('고길동', 90, 89, 55);
const student4 = new Student('최길동', 88, 93, 80);

export const students = [student1, student2, student3, student4];

export const fruits = ['사과', '배', '딸기', '참외', '수박', '딸기'];