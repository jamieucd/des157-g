console.log('reading js')

var zenItem = 0;
var zenBox = document.querySelector('#sandbox');

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  if (zenItems>=5){
    // resetAll.style.display='block';

    return;
  }

  zenBox.appendChild(document.getElementById(data));
  zenItems++;
}