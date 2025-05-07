// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const newVoice = document.getElementById('voice-select');
  const newText = document.getElementById('text-to-speak');
  const newImg = document.querySelector('#explore img');
  const newButton = document.querySelector('#explore button');

  const synth = window.speechSynthesis;

  let voices = [];

  function populateVoiceList() {
    voices = synth.getVoices();

    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement("option");
      option.textContent = `${voices[i].name} (${voices[i].lang})`;

      option.setAttribute("data-lang", voices[i].lang);
      option.setAttribute("data-name", voices[i].name);
      newVoice.appendChild(option);
    }
  }

  function talkButton(){
    newImg.src = 'assets/images/smiling-open.png';
    const utterance = new SpeechSynthesisUtterance(newText.value);
    const select = voices.find(voice => voice.name === newVoice.value);
    if (select){
      utterance.voice = select;
    }

    utterance.onend = () => {
      newImg.src = 'assets/images/smiling.png';
    }
    synth.speak(utterance);
  }

  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }
  
  newButton.addEventListener('click', talkButton);

}