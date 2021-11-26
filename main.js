Webcam.attach('#camera');
camera = document.getElementById("camera");
Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});

function Snapshot() {
    Webcam.snap(function (img) {
        document.getElementById("result").innerHTML = '<img id="screenshot" src="' + img + '">';
    });
}

var classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/gQ-LjqP8s/model.json',modelLoaded);
function modelLoaded(){
    console.log("modelLoaded")
}

function Check(){
    Picture=document.getElementById("screenshot");
    classifier.classify(Picture,GotResults);
}

function GotResults(error,results){
    console.log(results);
    document.getElementById("thing").innerHTML=results[0].label;
    document.getElementById("accuracy").innerHTML=results[0].confidence;
}