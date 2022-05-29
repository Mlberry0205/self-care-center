//Variables & querySelectors:
var radioAffirmantionButton = document.querySelector(".affirmation")
var radioMantraButton = document.querySelector(".mantra")
var recieveMessageButton = document.querySelector(".recieve-message-button");



function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

//Get a random mantra:

function getRandomMantra(mantras) {
  return mantras[getRandomIndex(mantras)];
}

//Get a random affirmation:

function getRandomAffirmation(affirmations) {
  return affirmations[getRandomIndex(affirmations)];
}


recieveMessageButton.addEventListener('click', () => {
  if (radioAffirmantionButton.checked) {
    var selectedMessage = getRandomAffirmation(affirmations)
  } else if {
    (radioMantraButton.checked) {
    var selectedMessage = getRandomMantra(mantras)
    }
  }
}
output.innerText = selectedMessage;

//Hide lotus-pose and show selected message
function homePage() {
  lotus-pose.classList.add("hidden");
  selectedMessage.classList.remove("hidden");

}
