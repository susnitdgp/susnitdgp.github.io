function hasUserMedia() { 
    //check if the browser supports the WebRTC 
    return !!(navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia); 
 } 

 var logger=document.querySelector('div#console_log')
 
 if (hasUserMedia()) { 
    navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia; 
         
    //enabling video and audio channels 
    navigator.getUserMedia({ video: true, audio: true }, function (stream) {
        console.log(stream) ;
        //logger.innerHTML=JSON.stringify(stream);

       var video = document.querySelector('video#my_video'); 
         
       //inserting our stream to the video tag     
       video.srcObject = stream;

    }, function (err) {}); 
 } else { 
    alert("WebRTC is not supported"); 
 }