// Compares answers to users guesses

export const answerCheck = (answers, guesses) => {
  for (let i = 0; i < answers.length; i++) {
    if (Number(answers[i]) !== Number(guesses[i])) return false;
  }
  return true;
};

export const attemps = (answers, uses) => {
  let average = 0;
  let percentage = 0;

  for (let i = 0; i < uses.length; i++) {
    if (Number(answers[i] === Number(uses[i]))) {
      average++;
      percentage++;
    } else if (uses.includes(Number(answers[i]))) {
      average++;
    }
  }

  return { uses, average, percentage };
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
    card.classList.toggle("turn");
  };
}

export const GAME_INSTRUCTIONS = [
  "Computer will randomly select a pattern of four different numbers",
  "You will have 10 attemps to guess the number combinations",
  "Game will end after all your attempts",
];
