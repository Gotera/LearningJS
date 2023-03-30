firstChoice = document.querySelector('input[name="area"]');
butttonFirstChoice = document.querySelector('#escolherArea');

butttonFirstChoice.addEventListener("click", function (event) {
	let message = document.querySelector('#choosedArea')
	event.preventDefault();
	const value = firstChoice.value

	message.innerHTML = "Você escolheu " + value;

	FirstChoiceFilterToFrontEnd(value)
	// IndependentChoiceAboutFuture()
});

function createInputTextX() {
	var x = document.createElement("INPUT");
	x.setAttribute("type", "text");
	x.setAttribute("name", "secondArea");
	x.setAttribute("placeHolder", "React ou Vue");
	document.body.appendChild(x);
}

function createInputTextY() {
	var y = document.createElement("INPUT");
	y.setAttribute("type", "submit");
	y.setAttribute("id", "secondAreaName");
	y.setAttribute("name", "secondArea");
	document.body.appendChild(y);
}

function listeningClick(btnToBeHeard) {
	btnToBeHeard.addEventListener("click", function (event) {

	})
}

function FirstChoiceFilterToFrontEnd(value) {
	let phaseTwoMessage = document.querySelector('#phaseTwoMessage')
	let secondMessage = document.querySelector('#secondChoosedArea')

	if (value == "Front-End") {
		createInputTextX()
		createInputTextY()
		phaseTwoMessage.innerHTML = "Já que escolheu Front-End, você prefere React ou Vue?"

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

function IndependentChoiceAboutFuture() {
	let phase3Message = document.querySelector('#phase3Message')
	var x = document.createElement("INPUT");
	var y = document.createElement("INPUT");

	phase3Message.innerHTML = "Agora que chegou até aqui, qual será seu próximo passo?"
	x.setAttribute("type", "select");
	x.setAttribute("placeHolder", "React ou Vue");
	y.setAttribute("type", "submit");
	document.body.appendChild(y);
}