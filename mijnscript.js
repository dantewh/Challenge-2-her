const secDiv = document.getElementById('sec');
const minDiv = document.getElementById('min');
const hourDiv = document.getElementById('hour');

window.setInterval(updateClock, 1000);


function updateClock(){
    let date = new Date();
    let sec = date.getSeconds() / 60;
    let min = (date.getMinutes() + sec) / 60;
    let hour = (date.getHours() + min) / 12;
    
    secDiv.style.transform = "rotate(" + (sec * 360) + "deg)";
    minDiv.style.transform = "rotate(" + (min * 360) + "deg)";
    hourDiv.style.transform = "rotate(" + (hour * 360) + "deg)";
}

updateClock();

var t = new Date().getHours();
if (t >= 8 && t <= 9) {
     document.body.style.background="linear-gradient(45deg, #8AF0E5, #FDFE9A)";
    document.getElementById('message').innerHTML = "Goodmorning";
} else if (t < 23) {
    document.body.style.background="linear-gradient(45deg, #2ecc71, #16a085)";
    document.getElementById('message').innerHTML = "Good day";
} else {
     document.body.style.background="linear-gradient(45deg, #7C54A4, #282479)";
    document.getElementById('message').innerHTML = "Goodnight";
}

