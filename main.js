 var SpeechRecognition = window.webkitSpeechRecognition
 var recognition = new SpeechRecognition
 function start(){
    document.getElementById("text_box").innerHTML = "";
    recognition.start()
 }
recognition.onresult = function (event) {
    console.log(event)
    content = event.results[0][0].transcript
    document.getElementById("text_box").innerHTML = content;
    if(content == "take my selfie"){

   
    speak()
    Webcam.attach("#camera")
    setTimeout(() => {
        takesnapshot1()
    
    }, 5000);
    setTimeout(() => {
        takesnapshot2()
    
    }, 10000);
    setTimeout(() => {
        takesnapshot3()
    
    }, 14000);
}
}
Webcam.set({
    width:400,
    height:350,
    image_format:"png",
    png_quality:90
})

function speak(){
var synth = window.speechSynthesis
speakdata = document.getElementById("text_box").value 
var utterthis = new SpeechSynthesisUtterance("taking your selfie in 5 seconds")
synth.speak(utterthis)
}
camera = document.getElementById("camera")
function takesnapshot1(){
    Webcam.snap(function(data_URI){
        document.getElementById("selfie_image1").src = data_URI
    })
}

function takesnapshot2(){
    Webcam.snap(function(data_URI){
        document.getElementById("selfie_image2").src = data_URI
    })
}


function takesnapshot3(){
    Webcam.snap(function(data_URI){
        document.getElementById("selfie_image3").src = data_URI
    })
}
