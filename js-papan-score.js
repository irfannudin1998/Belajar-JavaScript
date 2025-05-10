const player01 = document.querySelector("#SCORE-P1");
const player02 = document.querySelector("#SCORE-P2");
const maxPlayer = document.querySelector("#MAXSCORE");
const reserButton = document.querySelector("#reset");

let nilaiPlayer01 = 0;
let nilaiPlayer02 = 0;
let maxScore = 6;
let gameOver = false;

player01.addEventListener("click",()=>{
      if(!gameOver){
        nilaiPlayer01 ++;
    }if(nilaiPlayer01===maxScore){
        gameOver = true;
    }
player01.textContent = nilaiPlayer01;
})

player02.addEventListener("click",()=>{
     if(!gameOver){
        nilaiPlayer02 ++;
    }if(nilaiPlayer02===maxScore){
        gameOver = true;
    }
player02.textContent = nilaiPlayer02;
})


