difference = 0;
rightwristX = 0;
leftwristX = 0;



function setup() {
video = createCapture(VIDEO);
video.size(550, 500);

canvas = createCanvas(550, 150);
canvas.position(560, 500);

posenet = ml5.posenet(video, modelLoaded);
posenet.on('pose', gotposes);
}
function modelLoaded() {
    console.log('posenet Is Initialized!');
}

function gotposes(results)
{
if(results.length > 0)
{
 console.log(results);
 
 leftwristX = results[0].pose.leftwrist.x;
 rightwristX = results[0].pose.rightwrist.x;
 difference = floor(leftwristX - rightwristX);

 console.log("leftwristX = " + "rightwristX  = "+ rightwristX + " difference = " + difference);
}    
}

function draw() {
  background('#6c91c2');
  document.getElementById("font_size").innerHTML = "font size of the text will be = " + difference +"px";
  textSize(difference);
  fill ('#FFE787');
  text('peter', 50, 400); 
}