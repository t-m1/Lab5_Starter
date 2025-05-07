// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const newImg = document.querySelector('img');
  const newHorn = document.getElementById('horn-select');
  const newAudio = document.querySelector('audio');
  const newButton = document.querySelector('button');
  const newSlider = document.getElementById('volume');
  const newVolIcon = document.querySelector('#volume-controls img');
  

  newHorn.addEventListener('change', updateImg);
  newSlider.addEventListener('input', updateSlider);
  newButton.addEventListener('click', updateSound);

  function updateImg(){
    const correctImg = newHorn.value;
    if (correctImg == 'air-horn'){
      newImg.src = 'assets/images/air-horn.svg';
      newAudio.src = 'assets/audio/air-horn.mp3';
    }
    else if (correctImg == 'car-horn'){
      newImg.src = 'assets/images/car-horn.svg';
      newAudio.src = 'assets/audio/car-horn.mp3';
    }
    else if (correctImg == 'party-horn'){
      newImg.src = 'assets/images/party-horn.svg';
      newAudio.src = 'assets/audio/party-horn.mp3';
    }
  }

  function updateSound(){
    if (newHorn.value !== 'select'){
      newAudio.play();

      if (newHorn.value == 'party-horn'){
        const confetti = new JSConfetti();
        confetti.addConfetti();
        confetti.addConfetti();
      }
    }
  }

  function updateSlider(){
    const updatedRange = newSlider.value;
    newAudio.volume = updatedRange/100;

    if (updatedRange == 0){
      newVolIcon.src = 'assets/icons/volume-level-0.svg';
    }
    else if (updatedRange < 33){
      newVolIcon.src = 'assets/icons/volume-level-1.svg';
    }
    else if (updatedRange < 67){
      newVolIcon.src = 'assets/icons/volume-level-2.svg';
    }
    else{
      newVolIcon.src = 'assets/icons/volume-level-3.svg';
    }
  }

  
}
 