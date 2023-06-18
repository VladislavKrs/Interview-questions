"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var list_question_1 = require("./list-question");
var listCard = document.getElementById('list');
var iterateAllQuestions = function (el, index) {
    var indexPlus = (index + 1);
    var listState = (el.state === true);
    var stateSpan = listState ? 'has-text-success-dark' : 'has-text-danger-dark';
    var stateText = listState ? 'Разобрался с вопросом' : 'Не разобрался с вопросом';
    listCard.insertAdjacentHTML('beforeend', "<style scoped>\n    span {cursor: pointer}\n    </style>\n    <div class=\"card has-background-grey-lighter mb-4 p-3 \">\n     ".concat(indexPlus, ". ").concat(el.question, "\n    <span class=\"icon-text ").concat(stateSpan, "\" data-id=\"").concat(index, "\">\n        <span class=\"icon\">\n            <i class=\"fa-solid fa-check mt-1 mx-2\"></i>\n        </span>\n        <span>").concat(stateText, "</span>\n    </span>\n  </div>"));
};
// Display a list of questions
list_question_1.default.forEach(iterateAllQuestions);
//  Creating a function to iterate the questions
function renderIterateAllQuestions() {
    document.getElementById('list').innerHTML = '';
    list_question_1.default.forEach(iterateAllQuestions);
}
renderIterateAllQuestions();
var checkTrue = document.getElementById('check-question-no');
//  Create a function for uninformed questions
function renderQuestionDontUnderstend() {
    document.getElementById('list').innerHTML = '';
    if (checkTrue.checked) {
        var arrayQuestionsDidnotUnderstand = list_question_1.default.filter(function (el) { return !el.state; });
        arrayQuestionsDidnotUnderstand.forEach(iterateAllQuestions);
    }
    else if (!checkTrue.checked) {
        showAllQuestion();
    }
    else {
        iterateAllQuestions(list_question_1.default);
    }
    subscribe();
}
var checkFalse = document.getElementById('check-question-yes');
// Create a function for knowledgeable questions
function renderQuestionUnderstend() {
    document.getElementById('list').innerHTML = '';
    if (checkFalse.checked) {
        var arrayQuestionsUnderstand = list_question_1.default.filter(function (el) { return el.state; });
        arrayQuestionsUnderstand.forEach(iterateAllQuestions);
    }
    else if (!checkFalse.checked) {
        showAllQuestion();
    }
    else {
        iterateAllQuestions(list_question_1.default);
    }
    subscribe();
}
function showAllQuestion() {
    document.getElementById('list').innerHTML = '';
    list_question_1.default.forEach(iterateAllQuestions);
}
function btnNewQuestion() {
    var newQuestion = document.getElementById('new-quastion').value;
    if (newQuestion !== '') {
        list_question_1.default.push({ question: newQuestion, state: false });
        document.getElementById('list').innerHTML = '';
        list_question_1.default.forEach(iterateAllQuestions);
    }
}
btnNewQuestion();
function changeState(id) {
    var CarrentQuestion = list_question_1.default[id];
    // checkFalse.checked = false;
    // checkTrue.checked = false;
    CarrentQuestion.state = !CarrentQuestion.state;
    showAllQuestion();
    subscribe();
}
function subscribe() {
    document.querySelectorAll('#list > div .icon-text').forEach(function (e) {
        var id = e.dataset.id;
        e.addEventListener('click', function (event) {
            changeState(id);
        });
    });
}
subscribe();
