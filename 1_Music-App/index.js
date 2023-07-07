console.log("Welcome to Spotify")
//intialize the variaables
const audioElement= new Audio('1.mp3');
let masterPlay=document.getElementById('masterPlay')
let myProgressBar=document.getElementById('myProgressBar')
let backPlay=document.getElementById('backPlay')
//handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
    }
})
backPlay.addEventListener('click',()=>
{
    audioElement.pause();
    masterPlay.classList.remove('fa-pause-circle');
    masterPlay.classList.add('fa-play-circle');
    myProgressBar.value=0;
    audioElement.currentTime=0;
})

//Listen to event
audioElement.addEventListener('timeupdate', ()=>{
    //console.log('timeupdate')
    //update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100); // will give us how much time of the song has gone thru
    //console.log(progress)
    myProgressBar.value = progress; // shows the progress bar moving but doesnt change if u skip the range of progressbar
})
myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})
