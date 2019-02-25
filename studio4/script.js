console.log('reading js')

var rock1=document.querySelector("rock1");
var rock2=document.querySelector("rock2");
var bush=document.querySelector("bush");
var tree=document.quearySelector("tree");
var pagoda=document.quearySelector("pagoda");


function allowDrop(ev) {
  ev.preventDefault();
}


function drag(ev) {
  event.dataTransfer.setData("text", event.target.id);
}

function drop(ev) {
event.preventDefault()
  var data = event.dataTransfer.getData("text");
  event.target.appendChild(document.getElementById(data));

  return;
}
