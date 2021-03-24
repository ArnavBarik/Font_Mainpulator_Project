function setup(){
    canvas=createCanvas(400,300);
    canvas.center();

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
    }
}