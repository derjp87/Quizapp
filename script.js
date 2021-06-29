let questions = [
    {
        "questions": "Frage1",
        "answer_1": "Antwort11",
        "answer_2": "Antwort12",
        "answer_3": "Antwort13",
        "answer_4": "Antwort14",
        "right_answer": 3
    },
    {
        "questions": "Frage2",
        "answer_1": "Antwort21",
        "answer_2": "Antwort22",
        "answer_3": "Antwort23",
        "answer_4": "Antwort24",
        "right_answer": 2
    },
    {
        "questions": "Frage3",
        "answer_1": "Antwort31",
        "answer_2": "Antwort32",
        "answer_3": "Antwort33",
        "answer_4": "Antwort34",
        "right_answer": 4
    },
    {
        "questions": "Frage4",
        "answer_1": "Antwort41",
        "answer_2": "Antwort42",
        "answer_3": "Antwort43",
        "answer_4": "Antwort44",
        "right_answer": 4
    },
    {
        "questions": "Frage5",
        "answer_1": "Antwort51",
        "answer_2": "Antwort52",
        "answer_3": "Antwort53",
        "answer_4": "Antwort54",
        "right_answer": 1
    },
    {
        "questions": "Frage6",
        "answer_1": "Antwort61",
        "answer_2": "Antwort62",
        "answer_3": "Antwort63",
        "answer_4": "Antwort64",
        "right_answer": 1
    },
];

let currentQuestion = 0;
let rightQuestions = 0;

function init() {
    document.getElementById('all-questions').innerHTML = questions.length;

    showQuestion();
}

function showQuestion() {

    if (currentQuestion >= questions.length) {
        document.getElementById('endScreen').style = '';
        document.getElementById('questionBody').style = 'display: none';

        document.getElementById('amount-of-questions').innerHTML = questions.length;
        document.getElementById('amount-of-right-questions').innerHTML = rightQuestions;
        document.getElementById('header-image').src = 'img/win.png';
    } else {

        let percent = (currentQuestion + 1) / questions.length;
        percent = Math.round(percent * 100);
        document.getElementById('progress-bar').innerHTML = `${percent} %`;
        document.getElementById('progress-bar').style = `width: ${percent}%`;

        console.log('Fortschritt', percent);

        let question = questions[currentQuestion];

        document.getElementById('question-number').innerHTML = currentQuestion + 1;
        document.getElementById('questiontext').innerHTML = question['questions'];
        document.getElementById('answer_1').innerHTML = question['answer_1'];
        document.getElementById('answer_2').innerHTML = question['answer_2'];
        document.getElementById('answer_3').innerHTML = question['answer_3'];
        document.getElementById('answer_4').innerHTML = question['answer_4'];
    }
}

function answer(selection) {
    let question = questions[currentQuestion];;
    let selectedQuestionNumber = selection.slice(-1);
    let idOfRightAnswer = `answer_${question['right_answer']}`;

    if (selectedQuestionNumber == question['right_answer']) {
        document.getElementById(selection).parentNode.classList.add('bg-success');
        rightQuestions++;
    } else {
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
    }
    document.getElementById('next-button').disabled = false;
}

function nextQuestion() {
    currentQuestion++
    document.getElementById('next-button').disabled = true;
    resetAnswerButtons();
    showQuestion();
}

function resetAnswerButtons() {
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');
}

function restartGame() {
    document.getElementById('header-image').src = 'img/quiz.png';
    document.getElementById('endScreen').style = 'display: none';
    document.getElementById('questionBody').style = '';
    currentQuestion = 0;
    rightQuestions = 0;
    init();
}