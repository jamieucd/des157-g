console.log('script.js');

('use strict');

var flask = document.querySelector('#flask');
var openbook = document.querySelector('#openbook');
var hilight = document.querySelector('#hilight');
var book = document.querySelector('#book');

var overopen = document.querySelector('#overopen');
var overflask = document.querySelector('#overflask');
var overhilight = document.querySelector('#overflask');
var overbook = document.querySelector('#overflask');

var closeopen = document.querySelector('#closeopen');
var closeflask = document.querySelector('#closeflask');
var closehilight = document.querySelector('#closehilight');
var closebook = document.querySelector('#closebook');


// open book
openbook.addEventListener('click', function() {
  overopen.style.display = 'block';
}, false);
closeopen.addEventListener('click', function() {
  overopen.style.display = 'none';
}, false);
//
// //hydroflask
flask.addEventListener('click', function() {
  overflask.style.display = 'block';
}, false);
closeflask.addEventListener('click', function() {
  overflask.style.display = 'none';
}, false);
// //
// Highlighter
hilight.addEventListener('click', function() {
  overhilight.style.display = 'block';
}, false);
closehilight.addEventListener('click', function() {
  overhilight.style.display = 'none';
}, false);
//
book.addEventListener('click', function() {
  overbook.style.display = 'block';
}, false);
closebook.addEventListener('click', function() {
  overbook.style.display = 'none';
}, false);
