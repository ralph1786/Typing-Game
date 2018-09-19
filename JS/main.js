window.addEventListener("load", init);

//Available Levels
const levels = {
  easy: 5,
  medium: 3,
  hard: 2
};

//To Change Levels
const currentLevel = levels.easy;

let time = currentLevel;
let score = 0;
let isPlaying;

//DOM Elements
const wordInput = document.querySelector("#word-input");
const currentWord = document.querySelector("#current-word");
const scoreDisplay = document.querySelector("#score");
const timeDisplay = document.querySelector("#time");
const message = document.querySelector("#message");
const seconds = document.querySelector("#seconds");

const words = [
  "hat",
  "river",
  "lucky",
  "statue",
  "generate",
  "stubborn",
  "cocktail",
  "runaway",
  "joke",
  "developer",
  "establishment",
  "hero",
  "javascript",
  "nutrition",
  "revolver",
  "echo",
  "siblings",
  "investigate",
  "horrendous",
  "symptom",
  "laughter",
  "magic",
  "master",
  "space",
  "definition"
];

//Initialize Game
function init() {
  //Show number of seconds in UI
  seconds.innerHTML = currentLevel;
  //load random word from array
  showWord(words);
  //Start matching on word input
  wordInput.addEventListener("input", startMatch);
  //call countdown every second
  setInterval(countdown, 1000);
  //check game status
  setInterval(checkStatus, 10);
}

//Pick and show random word.
function showWord(words) {
  //generate random array index
  const randIndex = Math.floor(Math.random() * words.length);
  //Output random word.
  currentWord.innerHTML = words[randIndex];
}

//Start match
function startMatch() {
  if (matchWords()) {
    isPlaying = true;
    time = currentLevel + 1;
    showWord(words);
    wordInput.value = "";
    message.classList.add("correct-message");
    score++;
  }
  if (score === -1) {
    scoreDisplay.innerHTML = 0;
  } else {
    scoreDisplay.innerHTML = score;
  }
}

//Match currentWord to wordInput
function matchWords() {
  if (wordInput.value === currentWord.innerHTML) {
    message.innerHTML = "Correct!!!";
    return true;
  } else {
    message.innerHTML = "";
    return false;
  }
}

//Countdown timer
function countdown() {
  //Make sure time has not run out
  if (time > 0) {
    //Decrement
    time--;
  } else if (time === 0) {
    //Game is Over
    isPlaying = false;
  }
  //Show time
  timeDisplay.innerHTML = time;
}

//Check game status
function checkStatus() {
  if (!isPlaying && time === 0) {
    message.classList.remove("correct-message");
    message.classList.add("game-over");
    message.innerHTML = "Game Over!!!";
    score = -1;
  }
}
