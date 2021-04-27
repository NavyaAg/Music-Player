var WHITE_ALPHA=["z","x","c","v","b","n","m"];
var BLACK_ALPHA=["s","d","g","h","j"];

var WhiteKeys=document.querySelectorAll(".keys.white");
var BlackKeys=document.querySelectorAll(".keys.black")

const keys=document.querySelectorAll(".keys");

  keys.forEach((key)=>{
  key.addEventListener("click",()=>playNote(key))
  })
  function playNote(key){
    var x = key.getAttribute("data-key");
    const noteAudio = document.getElementById(x);
    noteAudio.currentTime = 0;
    noteAudio.play();
    key.classList.add("active");
    noteAudio.addEventListener("ended",()=>{
    key.classList.remove("active")
    })
  }

  document.addEventListener("keydown",e=>{
    if(e.repeat) return
    var keypressed=e.key;
    var indexOfWhiteKey=WHITE_ALPHA.indexOf(keypressed);
    var indexOfBlackKey=BLACK_ALPHA.indexOf(keypressed);
    if(indexOfWhiteKey>-1)
    playNote(WhiteKeys[indexOfWhiteKey]);
    if(indexOfBlackKey>-1)
    playNote(BlackKeys[indexOfBlackKey]);
  })
