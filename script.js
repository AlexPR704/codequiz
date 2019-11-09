const startButton = document.getElementById("start-btn")
const nextButton = document.getElementById("next-btn")
const questionContainerElement = document.getElementById("question-container")
const questionElement = document.getElementById("question")
const answerButtonsElement = document.getElementById("answer-buttons")

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener("click", startGame)
nextButton.addEventListener("click", () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {
    startButton.classList.add("hide")
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove("hide")
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement("button")
        button.innerText = answer.text
        button.classList.add("btn")
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add("hide")
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
            (answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove("hide")
    } else {
        startButton.innerText = "Restart"
        startButton.classList.remove("hide")
    }

}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add("correct")
    } else {
        element.classList.add("wrong")
    }
}

function clearStatusClass(element) {
    element.classList.remove("corrrect")
    element.classList.remove("wrong")
}


const questions = [
    {
        question: "What does CSS stand for?",
        answers: [
            { text: "Cascading Style Sheets", correct: true },
            { text: "Copying Style Shapes", correct: false },
            { text: "Cascading Style Shows", correct: false },
            { text: "Cascading Selectors Sheets", correct: false }
        ]
    },
    {
        question: "What does HTML stand for?",
        answers: [
            { text: "Hypertext Markup Language", correct: true },
            { text: "Hyper Markup Language", correct: false },
            { text: "Homepage Markup Language", correct: false },
            { text: "Hypertext Makeup Language", correct: false }
        ]
    },
    {
        question: " What type of declaration must you start with in HTML documents?",
        answers: [
            { text: "<!DOCTYPE html>", correct: true },
            { text: "<body>", correct: false },
            { text: "<script>", correct: false },
            { text: "<html>", correct: false }
        ]
    },
    {
        question: "What is not a operator for Javascript?",
        answers: [
            { text: "&", correct: true },
            { text: "==", correct: false },
            { text: "4", correct: false },
            { text: "22", correct: false }
        ]
    }
]