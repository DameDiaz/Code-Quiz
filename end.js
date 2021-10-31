var username = document.querySelector('#username')
var saveScoreBtn = document.querySelector('#saveScoreBtn')
var finalScore = document.querySelector('#finalScore')
var mostRecentScore = document.querySelector('#mostRecentScore')

var highScores = JSON.parsel(localStorage.getItem('highScores')) || []

var MAX_HIGH_SCORES = 5

finalScore.innerText = mostRecentScore


username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value
})