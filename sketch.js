var hello=91;

function setup() {
  createCanvas(500, 500);
    background("#C5DCA0");
}

function draw() {
fill("#6aa0fc");
stroke("#3c6e13")
    rect(310, 105, 7, 500);
fill("#fffff");
stroke("#b0dae8");
    triangle(mouseX, mouseY, 320, 100, 310, 80);
fill("#fcf800");
stroke("#245957");
    ellipse(315,hello,60,29);
fill("#c94fa7");
stroke("#f7d2ed");
    textSize(75);
    textFont("Arriba");
    textAlign(CENTER);
    text("flower power",250,250);
}
