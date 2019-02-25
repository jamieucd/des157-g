console.log('reading js')

var zenItem = 0;
var zenBox = document.querySelector('#sandbox');


function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function allowDrop(ev) {
  ev.preventDefault();
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}
