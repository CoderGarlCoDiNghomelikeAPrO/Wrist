noseX=0;
noseY=0;
difference = 0;
rightWristX = 0;
leftWristX = 0;

  function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);
    
    canvas = createCanvas(550, 500);
    canvas.postition(560,150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotposes);
  }

  function modelLoaded() {
    console.log('poseNet Is Initialized!');
  }

  function gotposes(results)
  {
    if(results.length >0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.Y;
        console.log("noseX ="+"noseY =" + noseY)

        leftWristX = results[0].pose.leftWrist.x;
       rightWristX = results[0].pose.rightWrist.x;
       difference = floor(leftWristX - rightWristX);

       console.log("leftWristX = " + leftWristX + "rightWristX")
        

    }
  }