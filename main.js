const listCard = document.getElementById('list');

const iterateAllQuestions = function (el, index) {
  const indexPlus = (index + 1);
  const listState = (el.state === true);
  const stateSpan = listState ? 'has-text-success-dark' : 'has-text-danger-dark';
  const stateText = listState ? 'Разобрался с вопросом' : 'Не разобрался с вопросом';
  listCard.insertAdjacentHTML('beforeend', `<style scoped>
    span {cursor: pointer}
    </style>
    <div class="card has-background-grey-lighter mb-4 p-3 ">
     ${indexPlus}. ${el.question}
    <span class="icon-text ${stateSpan}" data-id="${index}">
        <span class="icon">
            <i class="fa-solid fa-check mt-1 mx-2"></i>
        </span>
        <span>${stateText}</span>
    </span>
  </div>`);
};

// Display a list of questions
listQuestion.forEach(iterateAllQuestions);

//  Creating a function to iterate the questions
function renderIterateAllQuestions() {
  document.getElementById('list').innerHTML = '';
  listQuestion.forEach(iterateAllQuestions);
}
renderIterateAllQuestions();

const checkTrue = document.getElementById('check-question-no');
//  Create a function for uninformed questions
function renderQuestionDontUnderstend() {
  document.getElementById('list').innerHTML = '';
  if (checkTrue.checked) {
    const arrayQuestionsDidnotUnderstand = listQuestion.filter((el) => !el.state);
    arrayQuestionsDidnotUnderstand.forEach(iterateAllQuestions);
  } else if (!checkTrue.checked) {
    showAllQuestion();
  } else {
    iterateAllQuestions(listQuestion);
  }
  subscribe();
}

const checkFalse = document.getElementById('check-question-yes');
// Create a function for knowledgeable questions
function renderQuestionUnderstend() {
  document.getElementById('list').innerHTML = '';
  if (checkFalse.checked) {
    const arrayQuestionsUnderstand = listQuestion.filter((el) => el.state);
    arrayQuestionsUnderstand.forEach(iterateAllQuestions);
  } else if (!checkFalse.checked) {
    showAllQuestion();
  } else {
    iterateAllQuestions(listQuestion);
  }
  subscribe();
}

function showAllQuestion() {
  document.getElementById('list').innerHTML = '';
  listQuestion.forEach(iterateAllQuestions);
}

function btnNewQuestion() {
  const newQuestion = document.getElementById('new-quastion').value;
  if (newQuestion !== '') {
    listQuestion.push({ question: newQuestion, state: false });
    document.getElementById('list').innerHTML = '';
    listQuestion.forEach(iterateAllQuestions);
  }
}
btnNewQuestion();

function changeState(id) {
  const CarrentQuestion = listQuestion[id];
  // checkFalse.checked = false;
  // checkTrue.checked = false;
  CarrentQuestion.state = !CarrentQuestion.state;
  showAllQuestion();
  subscribe();
}

function subscribe() {
  document.querySelectorAll('#list > div .icon-text').forEach((e) => {
    const { id } = e.dataset;
    e.addEventListener('click', (event) => {
      changeState(id);
    });
  });
}
subscribe();
