const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

var currentDate = new Date();

    let hour = currentDate.getHours();
    let minute = currentDate.getMinutes();
    let sec = currentDate.getSeconds();
    
    let secPos = sec*360/60;
    let minPos = (minute*360/60)+(sec*(360/60)/60);
    let hrPos = (hour*360/12)+(minute*(360/60)/12);

function runClockUpdates(){
    hrPos = hrPos+(30/3600)
    secPos = secPos+6;
    minPos = minPos+(6/60)
    
    HOURHAND.style.transform = "rotate(" + hrPos + "deg)";
    MINUTEHAND.style.transform = "rotate(" + minPos + "deg)";
    SECONDHAND.style.transform = "rotate(" + secPos + "deg)";    
}

var updates = setInterval(runClockUpdates, 1000);

