function setup() {
    var myCanvas = createCanvas(800, 200);
    myCanvas.parent('interactiveHeader');
}

var col = color(246,36,89);

function draw() {
    ellipse(mouseX, mouseY, 80, 80);
}