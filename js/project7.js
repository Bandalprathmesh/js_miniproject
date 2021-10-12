console.log("alarm project here ");


let myclock = document.getElementById('setalaram');
myclock.addEventListener('click', settime);

var audio = new Audio('https://media.geeksforgeeks.org/wp-content/uploads/20190531135120/beep.mp3');

function ringbell() {

    audio.play();
}

function settime(e) {
    const alarm = document.getElementById('alaram');
    e.preventDefault();
    
    alarmdate = new Date(alarm.value);
    
    console.log(`set alarm for  ${alarmdate}...`);
    
    now = new Date();
    
    let timeout = alarmdate - now;
    
    console.log(timeout);
    
    if (timeout >= 0) {
        setTimeout(() => {
            ringbell();
        }, timeout);
    }

}


