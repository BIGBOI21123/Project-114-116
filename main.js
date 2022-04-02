var x = 0
var y = 0

function preload() {
    imgm = loadImage('mushtache.png');
    imgs = loadImage('sunglasses.webp')
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    image(video, 0, 0, 300, 300);
    image(imgm, x-40, y-10, 80, 40)
    image(imgs, x-40, y-45, 80, 40)
}

function take_snapshot() {
    save('Snapshot.png');
}

function modelLoaded() {
    console.log('PoseNet Is Initialized');
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        x = results[0].pose.nose.x
        y = results[0].pose.nose.y
    }
}