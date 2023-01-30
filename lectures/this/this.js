'use strick';
// let person = {
//     fullname: '짐코딩',
//     age: 20,
//     printThis: function() {
//         console.log(this);
//         console.log('this === person : ', this === person);
//         console.log('this === window : ', this === window);
//     }
// };
// // person.printThis();
// let printThis = person.printThis;
// printThis();

// function printThis() {
//     console.log(this);
// };
// printThis();

// let person1 = {
//     name: '홍길동1',
//     printThis: printThis,
// };
// person1.printThis();

// let person2 = {
//     name: '홍길동2',
//     printThis: printThis,
// };
// person2.printThis();

// let person3 = {
//     name: '홍길동3',
//     printThis: printThis,
// };
// person3.printThis();

// window
// let btn = document.querySelector('button');
// btn.addEventListener('click', function() {
//   console.log(this);
//   console.log(this === btn);
// });

// bind를 사용하여 this의 정의 변경해주기
// ES5 bind - this 설정
// function printThis() {
//     console.log(this);  // default this => window
// };
// let person1 = {
//     name: '홍길동',
// };
// let person2 = {
//     name: '김길동',
// };
// let printThis1 = printThis.bind(person1);
// let printThis2 = printThis1.bind(person2);
// printThis2();

// setTimeout 함수 안에서 this의 정의 => window
// let person = {
//     name: '짐코딩',
//     age: 20,
//     hello: function() {
//         setTimeout((function() {
//             console.log(this);  // => window
//             console.log(this.name);
//             console.log(this.age);
//         }).bind(this), 1000);
//     }
// }
// person.hello();

// this를 bind하여 사용하기
// let person = {
//   name: '짐코딩',
//   age: 20,
//   hello: function() {
//     function printHello() {
//       console.log(this);  // => window
//       console.log(this.name);
//       console.log(this.age);
//     }
//     setTimeout(printHello.bind(this), 1000);
//   }
// }
// person.hello();

// console.log(this);
// console.log(this === window);

// 화살표 함수 내에서 this
// let person = {
//   name: '짐코딩',
//   age: 20,
//   hello: function() {
//     setTimeout(() => {
//       console.log(this);  // => person
//       console.log(this.name);
//       console.log(this.age);
//     }, 1000);
//   },
// };
// person.hello();

let person = {
    name: '짐코딩',
    printThis: function() {
      console.log(this); // => window 객체 출력
    },
};
person.printThis();