let timer = document.querySelector('.timer');
let startb = document.getElementById('startb');
let stopb = document.getElementById("stopb");
let resetb = document.getElementById("resetb") ;

let msec = 00;
let secs = 00;
let mins = 00;

let timerid = null;

startb.addEventListener('click', function(){
    if(timerid !== null){
        clearInterval(timerid);
    }
    timerid = setInterval(starttimer, 10);
});
stopb.addEventListener('click', function(){
        clearInterval(timerid);
});
resetb.addEventListener('click', function(){
    clearInterval(timerid);
    timer.innerHTML = `00:00:00`;
    msec = secs = mins = 00;
});
function starttimer(){
    msec++;
    if(msec==100){
        msec=0;
        secs++;
        if(secs==60){
            secs=0;
            mins++;

        }
    }

    let msecstring = msec < 10 ? `0${msec}` : msec;
    let secsstring = secs < 10 ? `0${secs}` : secs;
    let minsstring = mins < 10 ? `0${mins}` : mins;

    timer.innerHTML = `${minsstring}:${secsstring}:${msecstring}`;

} 