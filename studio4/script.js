console.log('reading js')

// var zenItem = 0;
// var zenBox = document.querySelector('#sandbox');

// var obj, x, y, prev_x, prev_y;
//
// // var resetAll=document.querySelector('#resetAll');
//
// function allowDrop(ev) {
//   ev.preventDefault();
// }
//
// function drag(ev) {
//   ev.dataTransfer.setData("text", ev.target.id);
// }
//
// function drop(ev) {
//   ev.preventDefault();
//   var data = ev.dataTransfer.getData("text");
//   if (zenItem>=5){
//     // resetAll.style.display='block';
//
//     return;
//   }
//
//   zenBox.appendChild(document.getElementById(data));
//   zenItem++;
// }

function drag(e) {
    obj = e.target;
    prev_x = x - obj.offsetLeft;
     prev_y = y - obj.offsetTop;
   }

function move(e) {
  if (e.pageX) {
    x = e.pageX;
    y = e.pageY;
  }

  if(obj) {
   obj.style.left = (x - prev_x) + 'px';
   obj.style.top = (y - prev_y) + 'px';
 }
}

function drop() {
  obj.style.background = '#sandbox';
  obj = false;
}

document.getElementById('rock1').onmousedown = drag;
document.getElementById('rock2').onmousedown = drag;
document.getElementById('tree').onmousedown = drag;
document.getElementById('bush').onmousedown = drag;
document.getElementById('pagoda').onmousedown = drag;
document.onmousemove = move;
document.onmouseup = drop;
