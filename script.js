// WIP NOTES
// DONE: PLAYER NAME
// DONE: Counter takes the right - wrong answers
// DONE: Ranking table
// DONE: Push data with the new format-model, now it's pushin player-name and points…
// TODO: Try dividing the getQuestions logic into separate elements so the interface can be updated in real time
// TODO: Active letter
// TODO: Rigth-wrong colors after question
// TODO: Tidy up the code
// TODO: Las preguntas se despliegan en el círculo

//////////////// GLOBAL DATA ////////////////

const questions = [
  // 0
  {
    letter: "a",
    questions: [
      {
        answer: "arafel",
        question: "Cloud darkness at the end of the universe",
        status: null,
      },
      {
        answer: "axlotl",
        question: "Biological tank in which gholas and melange may be produced",
        status: null,
      },
      {
        answer: "atreides",
        question: "Last name of the house controlling planet Caladan",
        status: null,
      },
    ],
  },
  // 1
  {
    letter: "b",
    questions: [
      {
        answer: "baliset",
        question:
          "Nine-stringed musical instrument, lineal descendant of the zithra. Favorite instrument of Imperial troubadours",
        status: null,
      },
      {
        answer: "baraka",
        question: "A living holy man.",
        status: null,
      },
      {
        answer: "Bene Gesserit",
        question:
          "The ancient school of mental and physical training established primarily for female students.",
        status: null,
      },
    ],
  },
  // 2
  {
    letter: "c",
    questions: [
      {
        answer: "choam",
        question: "Combine Honnete Ober Advancer Mercantiles",
        status: null,
      },
      {
        answer: "chakobsa",
        question: "The language of the Fremen of Arrakis",
        status: null,
      },
      {
        answer: "cone of silence",
        question:
          "A field or zone wherein the sound of the human voice was electronically distorted so that recording and amplifying devices could not reproduce it effectively or clearly.",
        status: null,
      },
    ],
  },
  // 3
  {
    letter: "d",
    questions: [
      {
        answer: "distrans",
        question:
          'Steganographic device producing a "temporary neural imprint on the nervous system of bats or birds. The creature\'s normal cry then carries the message imprint, which can be sorted from that carrier wave by another distrans."',
        status: null,
      },
      {
        answer: "doorseal",
        question:
          "Portable plastic seal used in temporary camps to keep moisture from escaping.",
        status: null,
      },
      {
        answer: "drum sand",
        question:
          "A composition of sand compaction producing a rhythmical beat after being impacted.",
        status: null,
      },
    ],
  },
  // 4
  {
    letter: "e",
    questions: [
      {
        answer: "elaca",
        question:
          'Narcotic produced from a "blood-grained" wood of Ecaz; users\' skin shows a characteristic carrot color. Commonly used to prepare slave gladiators for the ring.',
        status: null,
      },
      {
        answer: "Ecaz",
        question: "Bhe fourth planet orbiting Alpha Centauri B",
        status: null,
      },
      {
        answer: "egret",
        question: "A long extinct species of bird with pink plumage.",
        status: null,
      },
    ],
  },
  // 5
  {
    letter: "f",
    questions: [
      {
        answer: "face dancer",
        question:
          "Creatures created by the Bene Tleilax that are able to mimic other humans exactly and go undetected by all known means, except by Bene Gesserit Truthsayers.",
        status: null,
      },
      {
        answer: "filmbook",
        question:
          "An apparatus used mainly for training consisting of a shigawire imprint carrying a mnemonic pulse.",
        status: null,
      },
      {
        answer: "fremen",
        question: '"Native" inhabitants of Arrakis.',
        status: null,
      },
    ],
  },
  // 6
  {
    letter: "g",
    questions: [
      {
        answer: "galache",
        question: "Official language of the Imperium.",
        status: null,
      },
      {
        answer: "ghola",
        question:
          "Clone grown in an Axlotl tanks from genetic material retrieved from the cells of a deceased subject.",
        status: null,
      },
      {
        answer: "Gom Jabbar",
        question:
          "Specific poison needle tipped with meta-cyanide used by the Bene Gesserit in their 'death-alternative test of human awareness.' It was called 'the high-handed enemy.'",
        status: null,
      },
    ],
  },
  // 7
  {
    letter: "h",
    questions: [
      {
        answer: "hajra",
        question:
          "The Zensunni journey of seeking; a migration to find a place to live as well as a holy journey of mind, body, and spirit to find wisdom and or enlightenment.",
        status: null,
      },
      {
        answer: "hiereg",
        question: "Fremen term for a desert camp.",
        status: null,
      },
      {
        answer: "Harkonen",
        question: "Baron's Vladimir last name.",
        status: null,
      },
    ],
  },

  // 8
  {
    letter: "i",
    questions: [
      {
        answer: "ilm",
        question: "Fremen term for theology.",
        status: null,
      },
      {
        answer: "istislah",
        question:
          "The Fremen rule of general interest. Everything is done in the general interest of the tribe, not the individual.",
        status: null,
      },
      {
        answer: "ix",
        question: "The ninth planet in the star system Alkalurops",
        status: null,
      },
    ],
  },
  // 9
  {
    letter: "j",
    questions: [
      {
        answer: "jubba",
        question:
          "An all-purpose cloak commonly worn over a stillsuit on Arrakis.",
        status: null,
      },
      {
        answer: "janus",
        question: "A bearded, two-faced Roman god from Old Earth.",
        status: null,
      },
      {
        answer: "johnnies",
        question:
          'An Arrakisian term for "Outsiders" or inexperienced people from off-world.',
        status: null,
      },
    ],
  },
  // 10
  {
    letter: "k",
    questions: [
      {
        answer: "kanly",
        question:
          "Formal feud or vendetta under the rules of the Great Convention carried on according to the strictest limitations.",
        status: null,
      },
      {
        answer: "kaza",
        question: "A fremen term for the appointed leader of a group.",
        status: null,
      },
      {
        answer: "Kwisatz Haderach",
        question: '"The Shortening of the Way".',
        status: null,
      },
    ],
  },
  // 11
  {
    letter: "l",
    questions: [
      {
        answer: "la, la, la",
        question:
          'Fremen cry of grief ("La" translates as ultimate denial, a “no” from which you cannot appeal.)',
        status: null,
      },
      {
        answer: "landstraad",
        question: "The Assembly of all nobles in the Imperium.",
        status: null,
      },
      {
        answer: "lida",
        question:
          "An old unit of measure.Originally a camel load or two thirds of one Kontar.",
        status: null,
      },
    ],
  },
  // 12
  {
    letter: "m",
    questions: [
      {
        answer: "maker",
        question: "Fremen term for the Sandworms.",
        status: null,
      },
      {
        answer: "maula",
        question: "The unfree, planet-bound class without any personal rights.",
        status: null,
      },
      {
        answer: "melange",
        question:
          "Drug that was essential to space travel and extended life, and therefore to the survival of the universe.",
        status: null,
      },
    ],
  },
  // 13
  {
    letter: "n",
    questions: [
      {
        answer: "na-baron",
        question: "Noble title given to a Baron's heir-apparent.",
        status: null,
      },
      {
        answer: "nightseal",
        question:
          "Part of a Fremkit, a device enabling to get under cover in darkness in the desert.",
        status: null,
      },
      {
        answer: "naib",
        question: "The word means 'Servant of Sietch' in Chakobsa.",
        status: null,
      },
    ],
  },
  // 14
  {
    letter: "o",
    questions: [
      {
        answer: "othermemory",
        question:
          "The combined ego and memories of all female ancestors, which a Bene Gesserit may be trained to access.",
        status: null,
      },
      {
        answer: "ornithopter",
        question:
          "Aircraft capable of sustained wing-beat flight in the manner of birds.",
        status: null,
      },
      {
        answer: "osiris",
        question:
          "A deity from old Terra, brother and husband to Isis and dying god of rebirth.",
        status: null,
      },
    ],
  },
  // 15
  {
    letter: "p",
    questions: [
      {
        answer: "parasilk",
        question: "Chemical silk-substitute.",
        status: null,
      },
      {
        answer: "prana bindu",
        question:
          "Training providing a Bene Gesserit with complete muscle and nervous system control,",
        status: null,
      },
      {
        answer: "presciensce",
        question: "The ability to see into both the past, present and future.",
        status: null,
      },
    ],
  },
  // 16
  {
    letter: "q",
    questions: [
      {
        answer: "qanat",
        question:
          "Open canal for carrying irrigation water under controlled conditions through a desert.",
        status: null,
      },
      {
        answer: "qirtaiba",
        question:
          '"Thus go the holy words...." the formal beginning to Fremen religious incantation (derived from panoplia propheticus).',
        status: null,
      },
      {
        answer: "Qizara tafwid",
        question:
          "Those authorized to teach, religious civil servants of Muad'ddibs Imperiom.",
        status: null,
      },
    ],
  },
  // 17
  {
    letter: "r",
    questions: [
      {
        answer: "reverend mother",
        question:
          "Bene Gesserit who has survived a ritual, thereby raising herself to a higher level of awareness and enabling her to access Other Memory.",
        status: null,
      },
      {
        answer: "repkit",
        question: "Repair and replacement essentials for a stillsuit.",
        status: null,
      },
      {
        answer: "rebec",
        question:
          "Bowed stringed instrument played by the Fremen and used for Semuta music.",
        status: null,
      },
    ],
  },
  // 18
  {
    letter: "s",
    questions: [
      {
        answer: "sandworm",
        question:
          "Giant sand-dwelling creatures native to Arrakis. Called Shai-Hulud by the Fremen and worshipped as deities.",
        status: null,
      },
      {
        answer: "sandrider",
        question:
          "One who is capable of capturing and riding one of the great sandworms of Arrakis.",
        status: null,
      },
      {
        answer: "sapho",
        question:
          "High-energy liquid extracted from barrier roots of Ecaz, commonly used by Mentats to amplify their mental powers.",
        status: null,
      },
    ],
  },
  // 19
  {
    letter: "t",
    questions: [
      {
        answer: "tabrite",
        question: "Fremen tribe, inhabitants of Sietch Tabr.",
        status: null,
      },
      {
        answer: "taqwa",
        question: 'Fremen term implying "Strong belief. Piety. Hope".',
        status: null,
      },
      {
        answer: "tau",
        question:
          "Mystical concept of the Fremen, expressing the oneness of a sietch, the sense of community and their devotion to it.",
        status: null,
      },
    ],
  },
  // 20
  {
    letter: "u",
    questions: [
      {
        answer: "usul",
        question:
          'Fremen word, meaning "The strength at the base of the pillar".',
        status: null,
      },
      {
        answer: "ulema",
        question: "A doctor of theology in Zensunni religion",
        status: null,
      },
      {
        answer: "uroshnor",
        question:
          "Autosuggestive cue word implanted by the Bene Gesserit, itself empty of meaning, but which, when spoken, triggered a state of immobilization.",
        status: null,
      },
    ],
  },
  // 21
  {
    letter: "v",
    questions: [
      {
        answer: "voice",
        question:
          "Training that allowed the Bene Gesserit to control others merely by selected tone shadings when speaking.",
        status: null,
      },
      {
        answer: "varota",
        question: "A legendary manufacturer of balisets, native of Chusuk.",
        status: null,
      },
      {
        answer: "verite",
        question:
          'Will-destroying narcotic from Ecaz that "renders a person incapable of falsehood.',
        status: null,
      },
    ],
  },
  // 22
  {
    letter: "w",
    questions: [
      {
        answer: "wali",
        question: "The name the Fremen give to an untried youth.",
        status: null,
      },
      {
        answer: "watermaster",
        question:
          "sietch attendant supervising the troops individuals water-possession and measurement.",
        status: null,
      },
      {
        answer: "wind trap",
        question:
          "A Facility used on Arrakis to trap moisture from the air, usually conceal in the warren rock.",
        status: null,
      },
    ],
  },
  // 23
  {
    letter: "x",
    questions: [
      {
        answer: "x",
        question: "Ten in old Terra's roman numbers",
        status: null,
      },
      {
        answer: "xx",
        question: "Twenty in old Terra's roman numbers",
        status: null,
      },
      {
        answer: "xxx",
        question: "Thirty in old Terra's roman numbers",
        status: null,
      },
    ],
  },
  // 24
  {
    letter: "y",
    questions: [
      {
        answer: "yali",
        question: "A Fremen's personal quarters within the sietch.",
        status: null,
      },
      {
        answer: "yaghist",
        question:
          'The Tleilaxu realm, also the mythical "Land of the unruled" in Bene Tleilax religion.',
        status: null,
      },
      {
        answer: "Ya!Ya!Yawm!",
        question: 'Exclamation on Arrakis, "Now hear this!".',
        status: null,
      },
    ],
  },
  // 25
  {
    letter: "z",
    questions: [
      {
        answer: "zensunni",
        question: "Ancient religious sect, ancestors of the Fremen.",
        status: null,
      },
      {
        answer: "zaha",
        question: "The morning siesta on Arrakis.",
        status: null,
      },
      {
        answer: "Zombie-katrundo",
        question:
          'Literally a "one-direction-tool animated-corpse", used figuratively to describe a Ghola without genetic memories.',
        status: null,
      },
    ],
  },
];

let questionsList = []; // to populate the extracted questions

let activeLetter = "a"; // to have just one active letter

let player = {
  name: "Dune player",
  planet: "Salusa Secundus",
  "right-words": 0,
  "wrong-words": 0,
  "time-left": 0,
};

let ranking = [
  // name, planet, right-words-count, wrong-words-count, time-left
  ["Leto Atreides", "Caladan", 26, 0, 32],
  ["Lady Jessica", "Caladan", 27, 0, 30],
  ["Vladimir Harkonen", "Giedi Prime", 26, 0, 26],
];

rankingTable = document.getElementsByClassName("ranking-table")[0];
console.log(rankingTable);

let exitOption = false; // To control the end of the array
let playerPoints = 0;
let gameStarted = false;

let timeInitialValue = 200;
let timeRemaining = timeInitialValue;
let timePassed = 0;
let timerOn = false;

//////////////// EVENT LISTENERS ////////////////

let playerDisplay =
  document.getElementsByClassName("player-name")[0].textContent;

const timerBtnTextToggle =
  document.getElementsByClassName("start-timer-btn")[0];
let timer = (document.getElementById("seconds").innerHTML =
  String(timeRemaining));
timer = timeInitialValue;

const questionsBackgroundAnimation = document.getElementById(
  "questions-background-animation"
);
let questionText = document.getElementById("question-text");

let rightAnswer = document.getElementsByClassName("right-answers")[0];
let wrongAnswer = document.getElementsByClassName("wrong-answers")[0];

//////////////// GAME LOGIC ////////////////

// Handler functions

const askName = () => {
  const name = prompt("Add your player name to start the game", player.name);
  if (name === undefined || name === null || name === "") {
    askName();
  }
  player.name = name;
  const planet = prompt("From which planet do you come from?", player.planet);
  if (planet === undefined || planet === null || planet === "") {
    askName();
  }
  player.name = name;
  player.planet = planet;

  document.getElementsByClassName("player-name")[0].textContent = player.name;
};

// without the player's data
function createRanking() {
  for (let i = 0; i < ranking.length; i++) {
    // create a new row
    let newRow = rankingTable.insertRow(rankingTable.length);
    newRow.classList.add("trow");

    for (let j = 0; j < ranking[i].length; j++) {
      // create a new cell
      let cell = newRow.insertCell(j);

      // add value to the cell
      cell.innerHTML = ranking[i][j];
      // cell.classList.add('trow')
    }
  }
}

// Prints results
const displayRanking = () => {
  // adds data from the player
  ranking.push([
    player.name,
    player.planet,
    player["right-words"],
    player["wrong-words"],
    player["time-left"],
  ]);

  // create a new row
  let newRow = rankingTable.insertRow(rankingTable.length);
  newRow.classList.add("trow");

  for (let j = 0; j < ranking[3].length; j++) {
    // create a new cell
    let cell = newRow.insertCell(j);
    // add value to the cell
    cell.innerHTML = ranking[3][j];
    cell.classList.add("trow");
  }
};

// New array to be mutated
const createListOfQuestions = () => {
  return questions.map((question) => {
    let index = Math.floor(Math.random() * 3);
    return {
      letter: question.letter,
      question: question.questions[index].question,
      answer: question.questions[index].answer,
      status: question.questions[index].status,
    };
  });
};

// Handle questions and case issues
const askQuestion = (question) => {
  let answer = prompt(question);
  questionText = question;
  !answer ? askQuestion() : answer.toLowerCase();
  return answer;
};

// TODO: Limpiar la letra seleccionada

// TODO: Marks it after it has passed

const markRightOrWrong = () => {
  for (let question of questionsList) {
    // console.log(question.status, question.letter)

    if (question.status !== null) {
      if (question.status === "right") {
        console.log(question.status, question.letter);
        document
          .getElementById(`char-${question.letter}`)
          .classList.add("circle-rigth-answers");
      } else if (question.status === "wrong") {
        console.log(question.status, question.letter);
        document
          .getElementById(`char-${question.letter}`)
          .classList.add("circle-wrong-answers");
      }
    }
  }
  // for (let question of questionsList) {
  //   console.log(question.status, question.letter)
  //   question.status === null ? false :
  //     question.status === 'rigth' ?
  //       document.getElementById(`char-${question.letter}`).classList.add('circle-rigth-answers') :
  //       document.getElementById(`char-${question.letter}`).classList.add('circle-wrong-answers')
  // }

  // document.getElementById(`char-${char}`).classList.add(`${className}`)
  // gets the char and adds a class
};

const markActiveLetter = (char) => {
  console.log(char);
  document.getElementById(`char-${char}`).classList.add("oval-active");
  // document.getElementById(`${char.toUpperCase()}`).style.color = 'black'
  // document.getElementById(`${char.toUpperCase()}`).classList.add('active-letter')
  // console.log(char)
  // console.log(document.getElementById(`char-${char}`).innerHTML)
};

const playPauseToggle = () => {
  // let exitControler = document.getElementById('title')
  exitOption = !exitOption;
  // alert('exit')
  console.log("exitOption", exitOption);
  !exitOption ? play() : false;
};

// Asks questions and manages different types of questions
function getQuestionsFromList() {
  while (
    !exitOption &&
    questionsList.some((question) => question.status === null)
  ) {
    for (let i = 0; i < questionsList.length; i++) {
      activeLetter = questionsList[i].letter;
      markActiveLetter(activeLetter);

      let answer = askQuestion(questionsList[i].question).toLowerCase();

      // to exit the game
      if (answer === "end") {
        displayRanking();
        exitOption = true;
        break;
      }

      // pasapalabra
      else if (answer === "pasapalabra" || answer === "pasa") {
        alert("Pasapalabra! Let's go for the next question");
        questionsList[i].status = "pasapalabra";
        markRightOrWrong();
        continue;
      }

      // right question
      else if (answer === questionsList[i].answer.toLowerCase()) {
        // markRightOrWrong(questionsList[i].letter, 'circle-rigth-answers')
        console.log("Yay! You have earned 1 point!");
        // playerPoints++
        player["right-words"]++;
        rightAnswer.innerHTML = player["right-words"];
        questionsList[i].status = "right";
        markRightOrWrong();
        continue;
      }

      // wrong question
      else if (answer !== questionsList[i].answer.toLowerCase()) {
        alert(
          `Ooops! Wrong question.\n\nThe right answer was: ${questionsList[
            i
          ].answer.toUpperCase()}`
        );
        player["wrong-words"]++;
        wrongAnswer.innerHTML = player["wrong-words"];
        questionsList[i].status = "wrong";
        markRightOrWrong();
        // markRightOrWrong(questionsList[i].letter, 'circle-wrong-answers')
        continue;
      }
    }
    console.log(questionsList);
    continue;
  }
  !questionsList.some((question) => question.status === null)
    ? displayRanking()
    : false;
}

const restart = () => {
  if (!exitOption) {
    let decision = prompt(
      "Do you want to restart the game?",
      "OK or Yes to restart"
    );
    if (decision === "yes" || decision) {
      play();
    }
  }
};

const play = () => {
  gameStarted = true;
  questionsList = createListOfQuestions();
  markActiveLetter(activeLetter);
  getQuestionsFromList();
};

/////// OVERLAYS & NAVIGATION //////

let introScreen = true;
let instructionsOpen = false;

let rankingOpen = false;

function openModal(modal) {
  document.getElementById(modal).style.width = "100%";
  document.getElementById(modal).style.opacity = "100%";
  modal == "instructions" ? (instructionsOpen = true) : (rankingOpen = true);
}

function closeModal(modal) {
  document.getElementById(modal).style.width = "0%";
  document.getElementById(modal).style.opacity = "0%";
  modal == "instructions" ? (instructionsOpen = false) : (rankingOpen = false);
}

function hideModals() {
  closeModal("instructions");
  closeModal("ranking");
  // console.log('ranking: ', rankingOpen)
  // console.log('instructions: ', instructionsOpen)
}

function showAltImg(id) {
  let target = document.getElementById(id);
  document.getElementById(id).src = "./images/roscoIcon2_hover.png";
  console.log("works");
  console.log(target);
}

function hideAltImg(id) {
  let target = document.getElementById(id);
  document.getElementById(id).src = "./images/roscoIcon2.png";
  console.log("works");
  console.log(target);
}

// COUNTDOWN AND CLOCK INTERACTIONS

function countdown() {
  timeRemaining--;
  timePassed++;
  if (timeRemaining >= 0 && timerOn) {
    document.getElementById("seconds").innerHTML = String(timeRemaining);
    setTimeout(countdown, 1000);
  }
}

function startTimerAndAnimation() {
  questionsBackgroundAnimation.style.visibility = `visible`;
  questionsBackgroundAnimation.style.transition = `0.2s`;
  questionsBackgroundAnimation.style.animation = `dash ${timeInitialValue}s linear backwards`;
  setTimeout(() => {
    timerBtnTextToggle.innerHTML = "PAUSE";
  }, 150);
  timerOn = !timerOn;
  timeRemaining = timer; // resets the timer for the countdown
  setTimeout(countdown, 1000); // starts countdown
  timeRemaining === 0 ? alert("shai-hulud") : false;
}

function stopTimerAndAnimation() {
  questionsBackgroundAnimation.style.visibility = `hidden`;
  questionsBackgroundAnimation.style.transition = `0.2s`;
  timerOn = !timerOn;
  timeInitialValue -= timePassed;
  timer = timeInitialValue;
  console.log(timer);
  setTimeout(() => {
    timerBtnTextToggle.innerHTML = "START";
  }, 150);
}

function startPauseTimer() {
  !timerOn ? startTimerAndAnimation() : stopTimerAndAnimation();
}

// TODO: letter is active
function letterIsActive() {}

///////// INITIALIZATION /////////
// setTimeout(askName, 1000)
// openModal('instructions')
createRanking();
