console.log("welcome to spotify");


let songIndex=0;

let audioElement = new Audio ('songs/1.mp3');

let pb= document.getElementById('pb')
let Play = document.getElementById('Play');


let songitem = Array.from(document.getElementsByClassName('songitem'));



let songs = [
    {songName: "", filePath: "songs/1.mp3", coverPath: "1.jpg"},
    {songName: "", filePath: "songs/2.mp3", coverPath: "2.jpg"},
    {songName: "", filePath: "songs/3.mp3", coverPath: "3.jpg"},
    {songName: "", filePath: "songs/4.mp3", coverPath: "4.jpg"},
    {songName: "", filePath: "songs/5.mp3", coverPath: "5.jpg"},

]





Play.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0 ){
        audioElement.play();
        Play.classList.remove('fa-play-circle');
        Play.classList.add('fa-pause-circle');
       
    }
    else{
        audioElement.pause();
        Play.classList.remove('fa-pause-circle');
        Play.classList.add('fa-play-circle');
      
    }
})


audioElement.addEventListener('timeupdate', ()=>{ 

    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    pb.value = progress;
})

pb.addEventListener('change', ()=>{
    audioElement.currentTime = pb.value * audioElement.duration/100;
})
 
  

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

 
 Array.from(document.getElementsByClassName('songname')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        audioElement.src = `songs/${songIndex+1}.mp3`;

        audioElement.currentTime = 0;
        audioElement.play();

        Play.classList.remove('fa-play-circle');
        Play.classList.add('fa-pause-circle');
    })
})


document.getElementById('bw').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 4
   
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;

    audioElement.currentTime = 0;
    audioElement.play();
    Play.classList.remove('fa-play-circle');
    Play.classList.add('fa-pause-circle');

})


document.getElementById('fw').addEventListener('click', ()=>{
    if(songIndex>=4){
        songIndex = 0
  
    }
    else{
        songIndex += 1;
    }
    audioElement.src =`songs/${songIndex+1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    Play.classList.remove('fa-play-circle');
    Play.classList.add('fa-pause-circle');

})