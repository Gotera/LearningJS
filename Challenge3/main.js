firstChoice = document.querySelector('input[name="area"]');
butttonFirstChoice = document.querySelector('#chooseArea');

butttonFirstChoice.addEventListener("click", function (event) {
	event.preventDefault();
	let secondValue;
	let message = document.querySelector('#choosedArea')
	const value = firstChoice.value

	message.innerHTML = "Você escolheu " + value;

	FirstChoiceFilterToFrontEnd(value)

});

function IndependentChoiceAboutFuture() {
	let phase3Message = document.querySelector('#phase3Message')
	const x = document.createElement("INPUT");
	const y = document.createElement("INPUT");

	phase3Message.innerHTML = "Agora que chegou até aqui, qual será seu próximo passo?"
	x.setAttribute("type", "select");
	x.setAttribute("placeHolder", "React ou Vue");
	y.setAttribute("type", "submit");
	document.body.appendChild(y);
}

function createInputTextX() {
	const x = document.createElement("INPUT");
	x.setAttribute("type", "text");
	x.setAttribute("name", "secondNameArea");
	x.setAttribute("placeHolder", "React ou Vue");
	document.body.appendChild(x);
}

function disableInputAfterClick(y) {
	y.addEventListener("click", function () {
		y.setAttribute("disabled", false);
	})
}

function createInputTextY() {
	const y = document.createElement("INPUT");
	y.setAttribute("type", "submit");
	y.setAttribute("id", "secondChooseArea");
	y.setAttribute("name", "secondArea");
	document.body.appendChild(y);
	disableInputAfterClick(y)
}

function takeSecondValue(secondValue, x) {
	const buttonSecondChoice = document.querySelector('#secondChooseArea')
	buttonSecondChoice.addEventListener("click", function (event) {
		event.preventDefault();
		let secondMessage = document.querySelector('#secondChoosedArea')
		const secondChoice = document.querySelector('input[name="secondNameArea"]');
		secondValue = secondChoice.value
		// teste(secondValue)
		return secondMessage.innerHTML = "Você escolheu " + secondValue;
	})
}

function teste(secondValue) {
	if (typeof secondValue !== 'undefined') {
		IndependentChoiceAboutFuture()
	}
}

function FirstChoiceFilterToFrontEnd(value) {
	const phaseTwoMessage = document.querySelector('#phaseTwoMessage')

	if (value == "Front-End") {
		phaseTwoMessage.innerHTML = "Já que escolheu Front-End, você prefere React ou Vue?"

		createInputTextX()
		createInputTextY()
		takeSecondValue()

	} else {
		if (value == "Back-End") {
			phaseTwoMessage.innerHTML = "Já que escolheu Back-End, você prefere C# ou Java?"

			createInputTextX()
			createInputTextY()

		} else {
			phaseTwoMessage.innerHTML = "Escolha uma das duas opções disponiveis"
		}
	}
}
