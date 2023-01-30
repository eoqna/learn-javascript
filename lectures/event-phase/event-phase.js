const $body = document.querySelector('body');
const $main = document.querySelector('main');
const $div = document.querySelector('div');
const $p = document.querySelector('p');
const $span = document.querySelector('span');

const $a = document.querySelector('a');

// a태그의 기본 동작인 이동 막기
$a.addEventListener('click', function(event) {
  event.preventDefault();
})

// capturing
// $span.addEventListener('click', function() {
//   console.log('[' + event.eventPhase + '] capturing span 태그')
// }, true);
// $p.addEventListener('click', function() {
//   event.stopPropagation();
//   console.log('[' + event.eventPhase + '] capturing p 태그')
// }, true);
// $div.addEventListener('click', function() {
//   console.log('[' + event.eventPhase + '] capturing div 태그')
// }, true);
// $main.addEventListener('click', function() {
//   console.log('[' + event.eventPhase + '] capturing main 태그')
// }, true);
// $body.addEventListener('click', function() {
//   console.log('[' + event.eventPhase + '] capturing body 태그')
// }, true);

// // bubbling
// $span.addEventListener('click', function(event) {
//   event.stopPropagation(); // event의 전파를 막는 메소드
//   console.log('[' + event.eventPhase + '] bubbling span 태그')
// });
// $p.addEventListener('click', function() {
//   console.log('[' + event.eventPhase + '] bubbling p 태그')
// });
// $div.addEventListener('click', function() {
//   console.log('[' + event.eventPhase + '] bubbling div 태그')
// });
// $main.addEventListener('click', function() {
//   console.log('[' + event.eventPhase + '] bubbling main 태그')
// });
// $body.addEventListener('click', function() {
//   console.log('[' + event.eventPhase + '] bubbling body 태그')
// });