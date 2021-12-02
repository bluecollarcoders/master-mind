// Compares answers to users guesses

export const answerCheck = (answers, guesses) => {
  for (let i = 0; i < answers.length; i++) {
    if (Number(answers[i]) !== Number(guesses[i])) return false;
  }
  return true;
};

export const Attempts = (answers, values) => {
  let exist = 0;
  let location = 0;

  for (let i = 0; i < values.length; i++) {
    if (Number(answers[i] === Number(values[i]))) {
      exist++;
      location++;
    } else if (values.includes(Number(answers[i]))) {
      exist++;
    }
  }

  return { values, exist, location };
};

export async function showAnswers() {
  const cards = document.querySelectorAll(
    "#random-numbers > .card.answer-card"
  );

  for (let [i, card] of cards.entries()) {
    let turn = turnCard(card);
    let timer = setTimeout(turn, i * 500);
    await timer;
  }
}

function turnCard(card) {
  return function () {
    card.classList.toggle("flip");
  };
}

export const GAME_INSTRUCTIONS = [
  "Computer will randomly select a pattern of four different numbers",
  "You will have 10 attemps to guess the number combinations",
  "Game will end after all your attempts",
];
