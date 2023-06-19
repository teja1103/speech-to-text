runSpeechRecog = () => {
    
    var output = document.getElementById('output');
    var action = document.getElementById('action');
    let recognization = new webkitSpeechRecognition();
    
    recognization.onresult = (e) =>{ 
        var transcript = e.results[0][0].transcript;
        output.innerHTML = transcript;
        output.classList.remove("hide");
        action.innerHTML="";
    }
    recognization.start();
}