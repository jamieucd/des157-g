
'use strict';
document.querySelector('#submit').addEventListener('submit', processForm);
document.querySelector('#restart').addEventListener('click', resetForm);
function processForm(evt) {

//   // //declare variables
var petName = document.querySelector('#petName').value;
console.log('petName: ' + petName);
var noun = document.querySelector('#noun').value;
console.log('noun: ' + noun);
var adj = document.querySelector('#adj').value;
console.log('adj: ' + adj);
var verb = document.querySelector('#verb').value;
console.log('verb: ' + verb);
var favArtist = document.querySelector('#favArtist').value;
console.log('favArtist: ' + favArtist);
// var comedy = document.querySelector('#comedy');
// console.log('comedy: ' + comedy);
// var romantic = document.querySelector('#romantic');
// console.log('romantic: ' + romantic);
// var horror = document.querySelector('#horror');
// console.log('horror: ' + horror);
// var action = document.querySelector('#action');
// console.log('action: ' + action);
//
// if (response == "comedy") {
//   my.innerhtml = 'In this film adaption about the life of ' + noun + 'collector\, we follow the main character ' + petName + ' played by ' + favArtist + 'as they ' + verb + 'through the obstacles of life as a ' + adj + 'paleontologist.';
// } else if (response == "romantic") {
//   myMsg.innerHTML = 'In this film adaption about the life of ' + noun + 'collector, we follow the main character ' + petName + ' played by ' + favArtist + 'as they ' + verb + 'through the obstacles of life as a ' + adj + 'paleontologist.';
// } else if (response == "horror") {
//   myMsg.innerHTML = 'In this film adaption about the life of ' + noun + 'collector\, we follow the main character ' + petName + ' played by ' + favArtist + 'as they ' + verb + 'through the obstacles of life as a ' + adj + 'paleontologist.';
// } else {
//   myMsg.innerHTML = 'In this film adaption about the life of ' + noun + 'collector\, we follow the main character ' + petName + ' played by ' + favArtist + 'as they ' + verb + 'through the obstacles of life as a ' + adj + 'paleontologist.';
// }

  var myMsg = document.querySelector('#myMsg');
  document.getElementById("myMsg").innerHTML= ''
evt.preventDefault();
}
