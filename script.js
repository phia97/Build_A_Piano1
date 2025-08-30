const WHITE_KEYS = ['s', 'd', 'f', 'h', 'j', 'k', 'l'];
const BLACK_KEYS = ['e', 'r', 'y', 'u', 'i'];

// select all keys
const keys = document.querySelectorAll('.key');

// Add an event listener to all keys
keys.forEach((key) => {
    key.addEventListener('click', () => playNote(key));
});

// Handlers
function playNote(key) {
    const noteAudio = document.getElementById(key.dataset.note);

    // reset the note's current time to 0
    noteAudio.currentTime = 0;

    // play the note
    noteAudio.play();

    // add a class active for styling purposes
    key.classList.add('active');

    noteAudio.addEventListener('ended', () => {
        key.classList.remove('active');
    });
}


const whiteKeys = document.querySelectorAll('.key.white');
const blackKeys = document.querySelectorAll('.key.black');

document.addEventListener('keydown', (e) => {
  // Get the key that triggered the event
  const key = e.key;
  const whiteKeyIndex = WHITE_KEYS.indexOf(key);
  const blackKeyIndex = BLACK_KEYS.indexOf(key);

   // If the key is being held down, don't play the note again
  if (e.repeat) {
    return;
  }

  if (whiteKeyIndex > -1) {
    playNote(whiteKeys[whiteKeyIndex]);
  }

  if (blackKeyIndex > -1) {
    playNote(blackKeys[blackKeyIndex]);
  }
});