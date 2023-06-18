import { listQuestion } from './list-question'

const listCard = document.getElementById('list') as HTMLInputElement;

interface IAllQuestions {
  question: string;
  state: boolean
}

const iterateAllQuestions = function (el: IAllQuestions, index: number) {
  const indexPlus = (index + 1);
  const listState = (el.state === true);
  const stateSpan = listState ? 'has-text-success-dark' : 'has-text-danger-dark';
  const stateText = listState ? 'Разобрался с вопросом' : 'Не разобрался с вопросом';
  if (listCard) {
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
  } else {
    console.log("No cards container")
  }
};

// Display a list of questions
listQuestion.forEach(iterateAllQuestions);

//  Creating a function to iterate the questions
function renderIterateAllQuestions() {
  if (listCard) {
    listCard.innerHTML = '';
    listQuestion.forEach(iterateAllQuestions);
  } else {
    console.log("Error, please check the content of the code")
  }
}
renderIterateAllQuestions();

const checkTrue = document.getElementById('check-question-no') as HTMLInputElement;
//  Create a function for uninformed questions
function renderQuestionDontUnderstend() {
  listCard.innerHTML = '';
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
renderQuestionDontUnderstend();

const checkFalse = document.getElementById('check-question-yes') as HTMLInputElement;
// Create a function for knowledgeable questions
function renderQuestionUnderstend() {
  listCard.innerHTML = '';
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
renderQuestionUnderstend();

function showAllQuestion() {
  listCard.innerHTML = '';
  listQuestion.forEach(iterateAllQuestions);
}

function btnNewQuestion() {
  const newQuestion = (document.getElementById('new-quastion') as HTMLInputElement).value;
  if (newQuestion !== '') {
    listQuestion.push({ question: newQuestion, state: false });
    listCard.innerHTML = '';
    listQuestion.forEach(iterateAllQuestions);
  }
}
btnNewQuestion();

function changeState(id: number) {
  const CarrentQuestion = listQuestion[id];
  // checkFalse.checked = false;
  // checkTrue.checked = false;
  CarrentQuestion.state = !CarrentQuestion.state;
  showAllQuestion();
  subscribe();
}

function subscribe() {
  document.querySelectorAll('#list > div .icon-text').forEach((e) => {
    const { id } = (e as HTMLElement).dataset;
    e.addEventListener('click', (event) => {
      if (id) {
        changeState(parseInt(id, 10));
      }
    });
  });
}
subscribe();
