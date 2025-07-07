
let body=document.querySelector("body");
let h1 = document.querySelector("h1");
let h2 = document.querySelector("h2");
let p=document.querySelector("p");
    

// let btn
let gameSeq=[];
let gamerSeq=[];

let started=false;
let level=0;

const btnArray = ["red","yellow","green","blue"];

function startCheak(started){
    if(started==false){
        levelUp();
         return started=true;
    }
}
function flashBtnByGame(btn){
    btn.classList.add("gameFlash");
    setTimeout(function(){
        btn.classList.remove("gameFlash");
    }, 250);
}
function flashBtnByGamer(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    }, 250);
}
function levelUp(){
    gamerSeq=[];
    level++;
    
    h2.innerText=`level ${level}`;
    console.log(h2.innerText);
    p.innerText=``;
    let box=document.querySelector(".box");
    console.dir(box);
    console.log(box.style.backgroundColor=randBG());
    let randIdx = Math.floor(Math.random() * 4);
    let randColor = btnArray[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    flashBtnByGame(randBtn);
    gameSeq.push(randColor);
    console.log(gameSeq);
}


document.addEventListener("keydown",function(){
    started=startCheak(started);
});
document.addEventListener("click",function(){
    started=startCheak(started);
});


function checkAns(Idx){
    if(gamerSeq[Idx]===gameSeq[Idx]){
        if(gamerSeq.length==gameSeq.length){
            setTimeout(levelUp,1000);
        }
        
    }else{
        h2.innerText = `Game over! Press any key to start game.`;
        console.log("Your game is over.");
        p.innerText=`your level :${level}`;
        body.classList.add("bodyBgW");
        setTimeout(function(){
            body.classList.remove("bodyBgW");
        },100);
        setTimeout(reset,1000);
    }
}

function btnPress(){
    let btn=this;
    flashBtnByGamer(btn);
    btnColor=btn.getAttribute("id");
    gamerSeq.push(btnColor);
    console.log(gamerSeq);
    checkAns(gamerSeq.length-1);
}

let btns=document.querySelectorAll(".button");
for(btn of btns){
    btn.addEventListener("click", btnPress);
}

function reset(){
    gameSeq = [];
    gamerSeq = [];
    level = 0 ;
    started = false;
    
}
function randBG(){
    let randRed=Math.floor(Math.random() * 225);
    let randGreen=Math.floor(Math.random()*255);
    let randBlue=Math.floor(Math.random()*255);
    color=`rgb(${randRed},${randGreen},${randBlue})`;
    if((color==`rgb(255,0,0)`) || (color==`rgb(0,128,0)`) ||(color==`rgb(0,128,0)`) || (color==`rgb(0,0,225)`)) {
        randBG;
    }
    return color;
}