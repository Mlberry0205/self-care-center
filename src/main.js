//Variables & querySelectors:

var radioAffirmantionButton = document.querySelector(".affirmation");
var radioMantraButton = document.querySelector(".mantra");
var recieveMessageButton = document.querySelector(".recieve-message-button");
var boxOne = document.querySelector(".box-one");
var recievedMessage = document.querySelector(".recieve-message");

//Get a random mantra:

function getRandomMantra() {
  var showMantra = mantras[Math.floor(Math.random() * mantras.length)];
  recievedMessage.innertext = showMantra.value;
  console.log("hello");
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


//Hide lotus-pose dude and show selected message
function showHiddenMessage() {
 lotusPose.classList.add("hidden");
 selectedMessage.classList.remove("hidden");
}

var affirmations = [

"I forgive myself and set myself free.",

"I believe I can be all that I want to be.",

"I am in the process of becoming the best version of myself.",

"I have the freedom & power to create the life I desire.",

"I choose to be kind to myself and love myself unconditionally.",

"My possibilities are endless.",

"I am worthy of my dreams.",

"I am enough.",

"I deserve to be healthy and feel good.",

"I am full of energy and vitality and my mind is calm and peaceful.",

"Every day I am getting healthier and stronger.",

"I honor my body by trusting the signals that it sends me.",

"I manifest perfect health by making smart choices."

];

var mantras = [

"Breathing in, I send myself love. Breathing out, I send love to someone else who needs it.",

"Don’t let yesterday take up too much of today.",

"Every day is a second chance.",

"Tell the truth and love everyone.",

"I am free from sadness.",

"I am enough.",

"In the beginning it is you, in the middle it is you and in the end it is you.",

"I love myself.",

"I am present now.",

"Inhale the future, exhale the past.",

"This too shall pass.",

"Yesterday is not today.",

"The only constant is change.",

"Onward and upward.",

"I am the sky, the rest is weather.",

];
