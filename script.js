let questions = [
    {
        "questions": "Was ist das größte Tier der Welt?",
        "answer_1": "Elefant",
        "answer_2": "Giraffe",
        "answer_3": "Blauwal",
        "answer_4": "Braunbär",
        "right_answer": 3
    },
    {
        "questions": "Wie heißt der höchste Berg?",
        "answer_1": "Alpen",
        "answer_2": "Zugspitze",
        "answer_3": "Annapurna",
        "answer_4": "Mount Everest",
        "right_answer": 4
    },
    {
        "questions": "Wie viele Flügel hat ein Schmetterling?",
        "answer_1": "4",
        "answer_2": "2",
        "answer_3": "6",
        "answer_4": "5",
        "right_answer": 1
    },
    {
        "questions": "Ab wie vielen Jahren ist man in Deutschland volljährig?",
        "answer_1": "16",
        "answer_2": "18",
        "answer_3": "20",
        "answer_4": "21",
        "right_answer": 2
    },
    {
        "questions": "Auf welchem Kontinent liegt Deutschland?",
        "answer_1": "Asien",
        "answer_2": "Afrika",
        "answer_3": "Europa",
        "answer_4": "Nordamerika",
        "right_answer": 3
    },
    {
        "questions": "Wie heißt Pippi Langstrumpfs Affe?",
        "answer_1": "Herr Schuler",
        "answer_2": "Herr Nielson",
        "answer_3": "Herr Peterson",
        "answer_4": "Herr Mayer",
        "right_answer": 2
    },
    {
        "questions": "Wie viele Spieler hat eine Fußballmannschaft?",
        "answer_1": "9",
        "answer_2": "10",
        "answer_3": "11",
        "answer_4": "12",
        "right_answer": 3
    },
    {
        "questions": "Wie heißt die Hauptstadt von Deutschland?",
        "answer_1": "Berlin",
        "answer_2": "München",
        "answer_3": "Stuttgart",
        "answer_4": "Hamburg",
        "right_answer": 1
    },
    {
        "questions": "Welche Form hat die Narbe auf Harry Potters Stirn?",
        "answer_1": "Dreieck",
        "answer_2": "Kreis",
        "answer_3": "Blitz",
        "answer_4": "Kreuz",
        "right_answer": 3
    },
    {
        "questions": "Wie viele Minuten hat eine Stunde?",
        "answer_1": "10",
        "answer_2": "100",
        "answer_3": "60",
        "answer_4": "600",
        "right_answer": 3
    },
    {
        "questions": "Wie nennt man einen jungen Hund?",
        "answer_1": "Fohlen",
        "answer_2": "Welpe",
        "answer_3": "Ferkel",
        "answer_4": "Kitz",
        "right_answer": 2
    },
    {
        "questions": "Welche Sprache sprechen Engländer?",
        "answer_1": "Deutsch",
        "answer_2": "Französisch",
        "answer_3": "Englisch",
        "answer_4": "Italienisch",
        "right_answer": 3
    },
    {
        "questions": "An welchem Datum wird jedes Jahr Heiligabend gefeiert?",
        "answer_1": "23. Dezember",
        "answer_2": "24. Dezember",
        "answer_3": "25. Dezember",
        "answer_4": "26. Dezember",
        "right_answer": 2
    },
    {
        "questions": "Wie viele Stacheln hat ein Igel ungefähr?",
        "answer_1": "50",
        "answer_2": "500",
        "answer_3": "1000",
        "answer_4": "5000",
        "right_answer": 4
    },
    {
        "questions": "Welches Fest feiern wir am Ende eines jeden Jahres?",
        "answer_1": "Ostern",
        "answer_2": "Nikolaus",
        "answer_3": "Weihnachten",
        "answer_4": "Silvester",
        "right_answer": 4
    },
];

let currentQuestion = 0;
let rightQuestions = 0;
let AUDIO_RIGHT = new Audio('sounds/right.mp3'); 
let AUDIO_WRONG = new Audio('sounds/wrong.mp3');

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
        AUDIO_RIGHT.play();
        rightQuestions++;
    } else {
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
        AUDIO_WRONG.play();
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