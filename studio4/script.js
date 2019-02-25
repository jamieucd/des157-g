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
  if (zenItem>=6){
    // resetAll.style.display='block';

    return;
  }

  zenBox.appendChild(document.getElementById(data));
  zenItem++;
}


var dragZenItem = document.quearySelector('#tree');
var zenBox = document.querySelector('#sandbox');

var active = false;
 var currentX;
 var currentY;
 var initialX;
 var initialY;
 var xOffset = 0;
 var yOffset = 0;

 zenBox.addEventListener("touchstart", dragStart, false);
 zenBox.addEventListener("touchend", dragEnd, false);
 zenBox.addEventListener("touchmove", drag, false);

 zenBox.addEventListener("mousedown", dragStart, false);
 zenBox.addEventListener("mouseup", dragEnd, false);
 zenBox.addEventListener("mousemove", drag, false);

 function dragStart(e) {
   if (e.type === "touchstart") {
     initialX = e.touches[0].clientX - xOffset;
     initialY = e.touches[0].clientY - yOffset;
   } else {
     initialX = e.clientX - xOffset;
     initialY = e.clientY - yOffset;
   }

   if (e.target === dragZenItem) {
     active = true;
   }
 }

 function dragEnd(e) {
   initialX = currentX;
   initialY = currentY;

   active = false;
 }

 function drag(e) {
   if (active) {

     e.preventDefault();

     if (e.type === "touchmove") {
       currentX = e.touches[0].clientX - initialX;
       currentY = e.touches[0].clientY - initialY;
     } else {
       currentX = e.clientX - initialX;
       currentY = e.clientY - initialY;
     }

     xOffset = currentX;
     yOffset = currentY;

     setTranslate(currentX, currentY, dragItem);
   }
 }

 function setTranslate(xPos, yPos, el) {
   el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
 }
