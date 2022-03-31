function preload() {
    animals = loadImage("animals.jpg");
}

function setup() {
    canvas = createCanvas(640, 430,);
    canvas.position(650, 200);

    objectDetector = ml5.objectDetector("cocossd", ModalLoaded);
}

function ModalLoaded() {
    console.log("Modal Loaded");
    Status = true;
    objectDetector.detect(animals, gotResult);
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
    image(animals, 0, 0, 640, 430);
    fill("red");
    text("Elephant 73%", 136, 108);
    noFill();
    stroke("red");
    rect(132, 94, 79, 53);

    fill("red");
    text("Elephant 71%", 253, 104);
    noFill()
    stroke("red");
    rect(249, 87, 130, 130);

    fill("red");
    text("Person 68%", 208, 122);
    noFill()
    stroke("red");
    rect(204, 110, 130, 130);
}

function back() {
    window.location = "home.html";
}