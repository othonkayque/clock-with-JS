var hourObj = document.querySelector("#H");
var minObj = document.querySelector("#M");
var secObj = document.querySelector("#S");
//console.log(Date())

setInterval(() => {
    var date = new Date();
    var hourNow = date.getHours()
    var minutesNow = date.getMinutes()
    var secondsNow = date.getSeconds()

    if( hourNow < 10){
        hourNow = "0" + hourNow;
    }
    if( minutesNow < 10){
        minutesNow = "0" + minutesNow;
    }
    if( secondsNow < 10){
        secondsNow = "0" + secondsNow;
    }

    hourObj.innerHTML = hourNow;
    minObj.innerHTML = minutesNow;
    secObj.innerHTML = secondsNow;
})

console.log(date.getFullYear());