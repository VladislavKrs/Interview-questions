const listCard = document.getElementById('list-question')

const iterateAllQuestions = function (el, index) {
    const listState = (el.state === true);
    const stateSpan = listState ? 'has-text-success-dark' : 'has-text-danger-dark';
    const stateText = listState ? 'Разобрался с вопросом' : 'Не разобрался с вопросом';
    listCard.insertAdjacentHTML('beforeend', `
    <div class="card has-background-grey-lighter mb-4 p-3 ">
     ${index + 1}. ${el.question}
    <span class="icon-text ${stateSpan}">
        <span class="icon">
            <i class="fa-solid fa-check mt-1 mx-2"></i>
        </span>
        <span>${stateText}</span>
    </span>
  </div>`)
};

// Display a list of questions
listQuestion.forEach(iterateAllQuestions);

//  Creating a function to iterate the questions 
function renderIterateAllQuestions() {
    document.getElementById('list-question').innerHTML = '';
    listQuestion.forEach(iterateAllQuestions);
}
renderIterateAllQuestions();
//  Create a function for uninformed questions
function renderQuestionDontUnderstend() {
    const arrayQuestionsDidnotUnderstand = listQuestion.filter(listQuestion => listQuestion.state == false);
    document.getElementById('list-question').innerHTML = '';
    arrayQuestionsDidnotUnderstand.forEach(iterateAllQuestions);
}
// Create a function for knowledgeable questions
function renderQuestionUnderstend() {
    const arrayQuestionsDidnotUnderstand = listQuestion.filter(listQuestion => listQuestion.state == true);
    document.getElementById('list-question').innerHTML = '';
    arrayQuestionsDidnotUnderstand.forEach(iterateAllQuestions);
}

function btnNewQuestion() {
    const newQuestion = document.getElementById('new-quastion').value;
    if (newQuestion !== "") {
        listQuestion.push({ question: newQuestion, state: false });
        document.getElementById('list-question').innerHTML = '';
        listQuestion.forEach(iterateAllQuestions);
    }
}
