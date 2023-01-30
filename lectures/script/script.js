console.log('Hello World');
let btn = document.querySelector('#btn');
console.log('btn : ' + btn);
btn.addEventListener('click', function() {
    alert('Hello World');
});

// window.onload = function() {
//     let btn = document.querySelector('#btn');
//     console.log('btn : ' + btn);
//     btn.addEventListener('click', function() {
//         alert('Hello World');
//     });
// };

// document.addEventListener('DOMContentLoaded', function() {
//   let btn = document.querySelector('#btn');
//   console.log('btn : ' + btn);
//   btn.addEventListener('click', function() {
//       alert('Hello World');
//   });
// });