function preload() {
    bottles = loadImage("bottles.jpg");
}

function setup() {
    canvas = createCanvas(640, 430,);
    canvas.position(650, 200);
    objectDetector = ml5.objectDetector("cocossd", ModalLoaded);
}

function ModalLoaded() {
    console.log("Modal Loaded");
    Status = true;
    objectDetector.detect(bottles, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.log(error);
    }
    else {
        console.log(results);
    }
}

function draw() {
    image(bottles, 0, 0, 640, 430);
 
}

function back() {
    window.location = "home.html";
}