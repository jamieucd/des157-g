console.log('reading js')

var zenItem = 0;
var zenBox = document.querySelector('#sandbox');


// var resetAll=document.querySelector('#resetAll');

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  if (zenItem>=5){
    // resetAll.style.display='block';

    return;
  }

  zenBox.appendChild(document.getElementById(data));
  zenItem++;
}
