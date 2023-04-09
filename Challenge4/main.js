form = document.getElementById('form')
btnSubmit = document.getElementById('submit')
inputAttempts = document.getElementById('attempts')
randomNumber = Math.floor(Math.random() * 10) + 1;
console.log(randomNumber)
inputAttempts.innerHTML = 'Você tem 3 tentavias.'
tries = 3

btnSubmit.addEventListener('click', function (event) {
	event.preventDefault();
	answer = document.getElementById('answer')
	value = answer.value

	while (tries > 0) {
		verifyAnswer(value, randomNumber)
		tries--

		if (tries == 0) {
			disableButtonIfNoMoreTries()
			showTheCorretNumber()
		}
		return triesMessage()

	}
})

function triesMessage() {
	inputAttempts.innerHTML = 'Você tem ' + tries + ' tentavias.'
	if (tries == 0) {
		inputAttempts.innerHTML = 'Suas tentativas acabaram'
	}
}

function showTheCorretNumber() {
	document.getElementById('secondCommentary').innerHTML = 'O numero correto era ' + randomNumber + '.'
}

function verifyAnswer(value, randomNumber) {
	btnSubmit = document.getElementById('submit')
	commentary = document.getElementById('commentary')
	console.log(value, randomNumber)
	if (value == randomNumber) {
		console.log('acertei')
		commentary.innerHTML = 'Você acertou! Parabéns!!'
		disableButtonIfNoMoreTries()

	} else {
		console.log('errei')
		commentary.innerHTML = 'Você errou!'
	}
}

function disableButtonIfNoMoreTries() {
	btnSubmit = document.getElementById('submit').disabled = true
}