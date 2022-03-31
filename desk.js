function preload() {
    desk = loadImage("desk.jpg");
}

function setup() {
    canvas = createCanvas(640, 430,);
    canvas.position(650, 200);
    objectDetector = ml5.objectDetector("cocossd", ModalLoaded);
}

function ModalLoaded() {
    console.log("Modal Loaded");
    Status = true;
    objectDetector.detect(desk, gotResult);
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
    image(desk, 0, 0, 640, 430);
    fill("red");
    text("Chair 99%", 510, 440);
    noFill();
    stroke("red");
    rect(522, 470, 359, 453);

    rect(603, 172, 25, 146);
    fill("red");
    text("Book 70%", 585, 182);
    noFill();

    rect(659, 176, 18, 141);
    fill("red");
    text("Book 60%", 585, 182);
    noFill();
}

function back() {
    window.location = "home.html";
}