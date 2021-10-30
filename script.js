var question = document.querySelector('#question');
var choices = Array.from(document.querySelectorAll('.choice-text'));
var progressText = document.querySelector('progressText');
var scoreText = document.querySelector('#score');
var progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = []

let questions = [
    {
        question: 'What special character is used to determine a class in CSS?',
        choice1:'.',
        choice2:'#',
        choice3:'$',
        choice4:'@',
        answer: 1,
    },

    {
        question: '?',
        choice1:'2',
        choice2:'4',
        choice3:'21',
        choice4:'17',
        answer: 1,
    },

    {
        question: 'What is 2 + 2?',
        choice1:'2',
        choice2:'4',
        choice3:'21',
        choice4:'17',
        answer: 1,
    },

    {
        question: 'What is 2 + 2?',
        choice1:'2',
        choice2:'4',
        choice3:'21',
        choice4:'17',
        answer: 1,
    },
]