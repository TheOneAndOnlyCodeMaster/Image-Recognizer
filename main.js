Webcam.set({
    dest_width: 340,
    dest_height: 260,
    image_format: 'png',
    png_quality: 91
});
camera = document.getElementById("camera");
Webcam.attach(camera);
function takePicture(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML ="<img id='taken_photo' src="+data_uri+">";
    })
} 
console.log('ml5 version', ml5.version)
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/Nl9dLzAab/model.json', modelLoaded);
function modelLoaded(){
console.log("model loaded");
}
function recognize(){
    picture = document.getElementById("taken_photo");
    classifier.classify(picture, gotResults);
    }
function gotResults(error, result){
        if(error){
            console.log(error);
        }
        else{
            console.log(result);
            document.getElementById("name").innerHTML=result[0].label;
            document.getElementById("accuracy").innerHTML=result[0].confidence.toFixed(3)*100+"%";
        }
}