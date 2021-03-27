noseX=0;
noseY=0;
difference=0;
leftWristX=0;
rightWristX=0;
function setup(){
    canvas=createCanvas(550,400);
    canvas.position(560,150);

    video=createCapture(VIDEO);
    video.size(500,500);

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log("Model is Loaded!");
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("noseX="+noseX+"noseY="+noseY);
        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;
        difference=floor(leftWristX-rightWristX);
    }
}
function draw(){
    background('#000080');
    fill('#FFD700');
    textSize(difference);
    text('Arnav',50,400);
    document.getElementById("font_size").innerHTML="Width and height of the font will be"+difference+"px";
}