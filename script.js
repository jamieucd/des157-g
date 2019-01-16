console.log('reading js')

var xPos;


function setup() {
  //size is creayeCanvas in P5
  //reate variable to reference the canvas
  var myCanvas = createCanvas(800, 250);
  //connect myCanvas to mysketch
  myCanvas.parent('mySketch');

noStroke();
xPos=0;
}

function draw() {

background(255-mouseY);

fill(135,206,235,85);
rect(0,0,800,250);

fill(250,0,0);
ellipse(mouseX,mouseY,60,60);
fill(250,250,210,mouseY);
ellipse(mouseX,mouseY,60,60);



}
