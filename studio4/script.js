console.log('reading js')

var box=document.querySelector('#sandbox');


function allowDrop(ev) {
  event.preventDefault();
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
