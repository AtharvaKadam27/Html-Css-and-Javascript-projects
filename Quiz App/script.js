let data = [
  {
    question: "Which is larget animal in the world?",
    answers: [
      { text: "Shark", correct: false },
      { text: "Blue whale", correct: true },
      { text: "Elephant", correct: false },
      { text: "Giraffe", correct: false },
    ],
  },
  {
    question: "Which is the smallest country in the world?",
    answers: [
      { text: "Vatican City", correct: true },
      { text: "Bhutan", correct: false },
      { text: "Nepal", correct: false },
      { text: "SriLanka", correct: false },
    ],
  },
  {
    question: "Which is the largest desert in the world?",
    answers: [
      { text: "Kalhari", correct: false },
      { text: "Gobi", correct: false },
      { text: "Sahara", correct: false },
      { text: "Antartica", correct: true },
    ],
  },
];

let next = document.querySelector(".next");
let question = document.querySelector(".question");
let options = document.querySelector(".options");

let currindex = 0;
let score = 0;

function startQuiz() {
  currindex = 0;
  score = 0;
  next.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currQuestion = data[currindex];
  console.log(currindex);

  let questionNo = currindex + 1;
  question.innerHTML = `${questionNo}) ${currQuestion.question}`;
  currQuestion.answers.forEach((ans) => {
    let btn = document.createElement("button");
    btn.innerHTML = ans.text;
    btn.classList.add("btn");
    if (ans.correct) {
      btn.dataset.correct = ans.correct;
    }
    btn.addEventListener("click", selectAnswer);
    options.appendChild(btn);
  });
}

function resetState() {
  next.style.display = "none";
  while (options.firstChild) {
    options.removeChild(options.firstChild);
  }
}

function selectAnswer(e) {
  let selectBtn = e.target;
  const isCorrect = selectBtn.dataset.correct === "true";
  if (isCorrect) {
    selectBtn.classList.add("correct");
    score++;
  } else {
    selectBtn.classList.add("incorrect");
  }
  Array.from(options.children).forEach((btn) => {
    if (btn.dataset.correct) {
      btn.classList.add("correct");
    }
    btn.disabled = true;
  });
  next.style.display = "block";
}

function showScore() {
  resetState();
  question.innerHTML = `Your scored ${score} out of ${data.length}`;
  next.innerHTML = "Restart";
  next.style.display = "block";
}

function handleNextButton() {
  currindex++;

  if (currindex < data.length) {
    showQuestion();
  } else {
    showScore();
  }
}

next.addEventListener("click", function () {
  if (currindex < data.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

startQuiz();
