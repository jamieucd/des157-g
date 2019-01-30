console.log('reading.js')
'use strict';
// //capture the submit evet with an event listener
document.querySelector('#s').addEventListener('click', processForm);
// document.querySelector('#r').addEventListener('click', resetForm);
// }
// function processForm(evt) {
// //declare variables
// var petName = document.querySelector('#petName').value;
// console.log('petName: ' + petName);
// var noun = document.querySelector('#noun').value;
// console.log('noun: ' + noun);
// var adj = document.querySelector('#adj').value;
// console.log('adj: ' + adj);
// var verb = document.querySelector('#verb').value;
// console.log('verb: ' + verb;
// var favArtist = document.querySelector('#favArtist').value;
// console.log('favArtist: ' + favArtist);
//
// var response;
// var submit = document.querySelector('input[type="submit"]');
// var myMsg = document.querySelector('#myMsg');
// var msgSection = document.querySelector('#msgSection');
//
// var comedy = document.querySelector('#comedy');
// var romantic = document.querySelector('#romantic');
// var horror = document.querySelector('#horror');
// var action = document.querySelector('#action');
//
// // comedy.addEventListener('click', comedySelected);
// // romantic.addEventListener('click', romanticSelected);
// // horror.addEventListener('click', horrorSelected);
// // action.addEventListener('click', actionSelected);
//
// function comedySelected() {
//   response = 'comedy';
// }
// function romanticSelected() {
//   response = 'romantic';
// }
// function horrorSelected() {
//   response = 'horror';
// }
// function actionSelected() {
//   response = 'action';
// }
// submit.addEventListener('click', processForm);
// function processForm(evt) {
//
//   if (response=='comedy') {
//       myMsg.innerHTML = 'In this film adaption about the life of ' + noun + 'collector\, we follow the main character ' + petName + ' played by ' + favArtist + 'as they ' + verb + 'through the obstacles of life as a ' + adj + 'paleontologist.';
//     } else if (response=="romantic") {
//       myMsg.innerHTML = 'In this film adaption about the life of ' + noun + 'collector, we follow the main character ' + petName + ' played by ' + favArtist + 'as they ' + verb + 'through the obstacles of life as a ' + adj + 'paleontologist.';
//     } else if (response=="horror") {
//       myMsg.innerHTML = 'In this film adaption about the life of ' + noun + 'collector\, we follow the main character ' + petName + ' played by ' + favArtist + 'as they ' + verb + 'through the obstacles of life as a ' + adj + 'paleontologist.';
//     } else {
//       myMsg.innerHTML = 'In this film adaption about the life of ' + noun + 'collector\, we follow the main character ' + petName + ' played by ' + favArtist + 'as they ' + verb + 'through the obstacles of life as a ' + adj + 'paleontologist.';
//     }
// // myMsg.innerHTML = 'Hi ' + favArtist + ', I like ' + noun + ' too';
// msgSection.className='show';
//
// evt.preventDefault();
// }
//
// function resetForm() {
//   msgSection.className = 'hide';
// }
