function setup()
{
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 500);
    canvas.position(560, 150);

    postNet = ml5.postNet(video, modelLoaded);
    postNet.on('pose', gotPoses)
}

function modelLoaded()
{
    console.log('PoseNet Is Initialized!');
}

function draw()
{
    background('#969A97');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
    }
}