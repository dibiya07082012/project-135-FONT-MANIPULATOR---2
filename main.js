function setup()
{
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 400);
    canvas.position(550, 150);

    poseNet = ml5.poseNet(video, modalLoaded);
    poseNet.on('pose', gotPoses);
}

function modalLoaded()
{
    console.log('PoseNet Is Initialized!');
}

function draw()
{
    background(' #ff66cc');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
    }
}