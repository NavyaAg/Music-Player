for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var buttonInnerHtml = this.innerHTML;
    buttonListener(buttonInnerHtml);
    pressAnimation(buttonInnerHtml);

  });
}
function buttonListener(alpha)
{
  switch (alpha) {
    case "w":
      var audio = new Audio('sounds/crash.mp3');
      audio.play();
      break;
    case "a":
      var audio = new Audio('sounds/kick-bass.mp3');
      audio.play();
      break;
    case "s":
      var audio = new Audio('sounds/snare.mp3');
      audio.play();
      break;
    case "d":
      var audio = new Audio('sounds/tom-1.mp3');
      audio.play();
      break;
    case "j":
      var audio = new Audio('sounds/tom-2.mp3');
      audio.play();
      break;
    case "k":
      var audio = new Audio('sounds/tom-3.mp3');
      audio.play();
      break;
    case "l":
      var audio = new Audio('sounds/tom-4.mp3');
      audio.play();
      break;
  }
}
document.addEventListener("keydown",function(event){
var keyPressed=event.key;
buttonListener(keyPressed);
pressAnimation(keyPressed);
})

function pressAnimation(character){
var buttonPressed=document.querySelector("."+character);
buttonPressed.classList.add("pressed")
setTimeout(function(){
  buttonPressed.classList.remove("pressed");
},100);
}
