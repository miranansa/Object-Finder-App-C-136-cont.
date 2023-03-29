status_1 = "";

objects = "";

function preload()
{
video = createVideo("video.mp4");
}

function setup()
{
    canvas = createCanvas(480,380);
    canvas.center();
    video.hide();
}

function draw()
{
    image(video,0,0,480,380);
}

function start()
{
    model=ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status").innerHTML="Status : Detecting Objects";
    document.getElementById("object_name").value=objects; 
}

function modelLoaded()
{
    console.log("Model Loaded");
    status_1 = true;
    video.loop();
    video.speed(1);
    video.volume(1);
}