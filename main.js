Webcam.set({
    width:350 ,
    height: 300 ,
    image_format: 'png',
    png_quality: 90,
})

camera = document.getElementById("camera");

Webcam.attach( '#camera')

function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>'
    });
}

console.log('m15 version:' , m15.version);

classifier = m15.imageClassifier("https://teachablemachine.withgoogle.com/models/tO3vt_Dp2/", modelLoaded) ;

function check() 
{
    img = document.getElementById('captured_image');
    lassifier.classify(img, gotResult)
}

function gotResult(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("result_object_name").innerHTML = results[0].label
        document.getAnimations("result_object_accuracy").innerHTML  = results[0].confidence.toFixed(3);
    }
}