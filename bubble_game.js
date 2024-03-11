//print all bubble with random number
var lowerPanel= document.querySelector(".lower_panel");
var randomNum=0;
var storage="";
var bubble= ()=>{for(i=1;i<=268;i++){
    randomNum=Math.floor(Math.random()*10);
   storage+=`<div class="bubble">${randomNum}</div>`;
   lowerPanel.innerHTML=storage;
}}
bubble()
//run the timer 
var runtimer=()=>{timer=60;
    var timerVal= document.querySelector("#timer");
    var timeFnc=setInterval(()=>{
        if(timer>0){timer--;
        timerVal.textContent=timer;}
        else{
            clearInterval(timeFnc);
            lowerPanel.innerHTML=`<h1 style="color:lime">GAME OVER</h1>`
        }    
    },1000);}
    runtimer();

//show hit number
var hitVal=document.querySelector("#hit_val");
var hit=()=>{

    hitVal.textContent=randomNum;
}
hit();
//show score point
var newScore= document.querySelector("#score_point");
score=0;
var scorePoint= ()=>{
    score+=10;
    newScore.textContent=score;
}

lowerPanel.addEventListener("click",(e)=>{
    if(e.target.textContent==randomNum){
        scorePoint();
        bubble();
        hit();
    }
})