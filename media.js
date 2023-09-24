function hasUserMedia() { 
    //check if the browser supports the WebRTC 
    return !!(navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia); 
 } 

 if (hasUserMedia()) { 
    //navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia; 
         
    //enabling video and audio channels 
    navigator.mediaDevices.getUserMedia({ video: true, audio: true }, function (stream) {
        console.log(stream) ;

       var video = document.querySelector('video#my_video'); 
         
       //inserting our stream to the video tag     
       video.srcObject = stream;

    }, function (err) {}); 
 } else { 
    alert("WebRTC is not supported"); 
 }