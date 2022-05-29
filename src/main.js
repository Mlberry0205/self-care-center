//Variables & querySelectors:

var radioAffirmantionButton = document.querySelector(".affirmation");
var radioMantraButton = document.querySelector(".mantra");
var recieveMessageButton = document.querySelector(".recieve-message-button");
var boxOne = document.querySelector(".box-one");
var recievedMessage = document.querySelector(".recieve-message");

//Get a random mantra:

function getRandomMantra() {
  console.log("hello");
  var showMantra = mantras[Math.floor(Math.random() * mantras.length)];
  recievedMessage.innertext = showMantra;
  showHiddenMessage();

}

//Get a random affirmation:

function getRandomAffirmation() {
  var showAffirmation = affirmations[Math.floor(Math.random() * affirmations.length)];
  recievedMessage.innertext = showAffirmations;
  showHiddenMessage();
}


function recieveMessage() {
if (radioAffirmantionButton.checked) {
    getRandomAffirmation();
  } else if (radioMantraButton.checked) {
    getRandomMantra(mantras);
  } else if (affirmationButton.checked === false && mantraButton.checked === false) {
    window.alert("Please try again");
  }
}

//Hide lotus-pose dude and show selected message:

function showHiddenMessage() {
 lotusPose.classList.add("hidden");
 selectedMessage.classList.remove("hidden");
}
