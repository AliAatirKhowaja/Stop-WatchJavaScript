
var mint = 0;
var sec= 0;
var milsec=0;

var mintHeading = document.getElementById("mint");
var secHeading = document.getElementById("sec");
var milsecHeading = document.getElementById("milsec");
var interval;

function timer (){
   milsec++
    milsecHeading.innerHTML = milsec;
    if (milsec >=100){
        sec++
        secHeading.innerHTML = sec;
        milsec = 0;
        milsecHeading.innerHTML = milsec;
    }else if(sec >=60){
        mint++
        mintHeading.innerHTML = mint;
        sec= 0
    }
}
function start(){
    interval = setInterval(timer,10)
    var click = document.getElementById("click").disabled = true;
    

}

function stop(){
    clearInterval(interval);
    var click = document.getElementById("click").disabled = false;
}


function reset(){
    clearInterval(interval);
    var mint = 0;
    var sec= 0;
    var milsec=0;
    milsecHeading.innerHTML = milsec;
    secHeading.innerHTML = sec;
    mintHeading.innerHTML = mint;
}