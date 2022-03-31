function preload() {
    fruitbasket = loadImage("fruit_basket.jpg");
}

function setup() {
    canvas = createCanvas(640, 430,);
    canvas.position(650, 200);

    objectDetector = ml5.objectDetector("cocossd", ModalLoaded);
}

function ModalLoaded() {
    console.log("Modal Loaded");
    Status = true;
    objectDetector.detect(fruitbasket, gotResult);
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
    image(fruitbasket, 0, 0, 640, 430);
    fill("red");
    text("Bowl 84%", 80, 46);
    noFill();
    stroke("red");
    rect(75, 33, 165, 107);
}

function back() {
    window.location = "home.html";
}