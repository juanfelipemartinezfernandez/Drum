const mp3Files = [
  'crash.mp3',
  'kick-bass.mp3',
  'snare.mp3',
  'tom-1.mp3',
  'tom-2.mp3',
  'tom-3.mp3',
  'tom-4.mp3'
];

drumsElements = document.querySelectorAll(".set > button");
drumsNames = ['w','a','s','d','j','k','l'];

document.addEventListener("keydown", function (event) {
  playSound(event.key);
  pressAnimation(event.key);
} );


for (let index = 0; index < drumsElements.length; index++) {
  document.querySelectorAll(".set button")[index].addEventListener("click", function(){
    playSound(drumsNames[index]);
    pressAnimation(drumsNames[index]);
    console.log(drumsNames[index]);
    }
    );
  }

    function playSound(key){
      for (let i = 0; i < drumsNames.length; i++) {
        if(key === drumsNames[i]){
          var audio = new Audio('sounds/' + mp3Files[i]);
          audio.play();
        }
        }
    }

    function pressAnimation(event){
      
      var element = document.querySelector("." + event);
      
      element.classList.add( "pressed");

      setTimeout (function () {
        element.classList.remove("pressed");
      }, 100);

    }