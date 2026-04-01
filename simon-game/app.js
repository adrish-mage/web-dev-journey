let gameSeq = [];
let userSeq = [];

let btns = ["yellow","red","green","purple"];
let started =  false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function(){
    if(started == false){
        console.log("game started");
        started = true;
    }
    levelUp();
});

function btnFlash(btn){
    btn.classList.add("active");
    setTimeout(function(){
        btn.classList.remove("active");
    },100);
}
function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `level${level}`;
    
    //random button choose
    let randIdx = Math.floor(Math.random()*4);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    btnFlash(randBtn);
}

function checkAns(idx){
    if (userSeq[idx] == gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp, 1000);
        }
    } else {
        h2.innerHTML = `Game over !! Your score was <b>${level}</b> <br>press any key to start...`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(reset, 500);  // delay so red flash is visible
    }
}
function reset(){
    started = false;
    gameSeq=[];
    userSeq=[];
    level = 0;
    document.querySelector("body").style.backgroundColor="";

}
function btnPress (){
    let btn = this;
    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    console.log(userColor);
    
    btnFlash(btn);
    checkAns(userSeq.length-1);
}
let allBtns = document.querySelectorAll(".btn");

for(let btn of allBtns){
    btn.addEventListener("click",btnPress);
}
