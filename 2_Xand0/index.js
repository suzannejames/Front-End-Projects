let music=new Audio('music.mp3')
let turn= new Audio('ting.mp3')
let gameover= new Audio('gameover.mp3')
let turns= "X"
let win=false

//function to change the turn
const changeTurn = ()=>{

    return turns === "X" ? "0": "X" // if turn X return 0 else return X
}
//function to check for a win
const checkWin = ()=>{
    let boxtext=document.getElementsByClassName('boxtext')
    let wins= [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== ""))
        {document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won"
        win=true
        document.querySelector('.imagebox').getElementsByTagName('img')[0].style.width="180px"
        music.play()
    }
    })
}
 
// Game Logic
//music.play()
let boxes = document.getElementsByClassName("box") // taking each box
Array.from(boxes).forEach(element =>{
    let boxtext=element.querySelector('.boxtext')
    element.addEventListener('click', ()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turns;
            turns=changeTurn();
            turn.play();
            checkWin();
            if(!win)
            document.getElementsByClassName("info")[0].innerText = "Turn for " + turns;
        }
    })
})

// add onclick listener to reset button
reset.addEventListener('click',()=>{
    let boxtexts=document.querySelectorAll('.boxtext')// All , coz u have to select all the boxtexts at a time
    Array.from(boxtexts).forEach(element =>
        {
            element.innerText=""
        })
        turns="X"
        win=false
        document.getElementsByClassName("info")[0].innerText = "Turn for " + turns;
        document.querySelector('.imagebox').getElementsByTagName('img')[0].style.width="0px"
        music.pause()
    })