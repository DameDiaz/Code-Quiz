var countdown = document.querySelector('#countdown');
var question = document.querySelector('#question');
var choices = Array.from(document.querySelectorAll('.choice-text'));
var progressText = document.querySelector('progressText');
var scoreText = document.querySelector('#score');


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
        question: 'What tag is used to define – and place – an interactive button in an HTML document?',
        choice1:'<clickfield>',
        choice2:'<footer>',
        choice3:'<td>',
        choice4:'<button>',
        answer: 4,
    },

    {
        question: 'What tag defines a division or the beginning/end of an individual section in an HTML document?',
        choice1:'<div>',
        choice2:'<meta>',
        choice3:'<img>',
        choice4:'<table>',
        answer: 1,
    },

    {
        question: 'What tag is used to render or transform text into an important (bold) version?',
        choice1:'<blockquote>',
        choice2:'<strong>',
        choice3:'<a>',
        choice4:'<em>',
        answer: 2,
    },
]

var SCORE_POINTS = 100
var MAX_QUESTIONS = 4

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('/end.html')
    }

    questionCounter++

    var questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question
    
    choices.forEach(choice => {
        var number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })

    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return
        
        acceptingAnswers = false
        var selectedChoice = e.target
        var selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' :
        'incorrect'

        if(classToApply === 'correct') {
            incrementScore(SCORE_POINTS)
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() =>{
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()

        }, 1000)

    })
})

incrementScore = num => {
    score +=num
    scoreText.innerText = score
}

startGame()