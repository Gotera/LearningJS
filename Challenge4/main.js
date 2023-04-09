form = document.getElementById('form')
btnSubmit = document.getElementById('submit')
inputAttempts = document.getElementById('attempts')
randomNumber = Math.floor(Math.random() * 10) + 1;
console.log(randomNumber)
tries = 3
inputAttempts.innerHTML = 'Você tem ' + tries + ' tentavias.'

btnSubmit.addEventListener('click', function (event) {
	event.preventDefault();
	answer = document.getElementById('answer')
	value = answer.value
	while (tries > 0) {
		verifyAnswer(value, randomNumber)
		tries--

		return
	}
})

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