firstChoice = document.querySelector('input[name="area"]');
butttonFirstChoice = document.querySelector('#escolherArea');

butttonFirstChoice.addEventListener("click", function (event) {
	let message = document.querySelector('#choosedArea')
	event.preventDefault();
	const choice = firstChoice
	const value = choice.value

	console.log(choice.value)

	message.innerHTML = "Você escolheu " + value;
	FirstChoiceFilterToFrontEnd(value)
	// IndependentChoiceAboutFuture()
});

function FirstChoiceFilterToFrontEnd(value) {
	let phase2Message = document.querySelector('#phase2Message')
	var x = document.createElement("INPUT");
	var y = document.createElement("INPUT");


	if (value == "Front-End") {
		let secondChoice = document.querySelector('input[name="advancedArea"]');
		const selectSecondChoice = secondChoice
		phase2Message.innerHTML = "Já que escolheu Front-End, você prefere React ou Vue?"
		x.setAttribute("type", "text");
		x.setAttribute("name", "advancedArea");
		x.setAttribute("placeHolder", "React ou Vue");
		document.body.appendChild(x);

		y.setAttribute("type", "submit");
		y.setAttribute("id", "secondAreaName");
		y.setAttribute("name", "secondArea");
		document.body.appendChild(y);

	} else {
		if (value == "Back-End") {
			phase2Message.innerHTML = "Já que escolheu Back-End, você prefere C# ou Java?"
			x.setAttribute("type", "text");
			x.setAttribute("name", "advancedArea");
			x.setAttribute("placeHolder", "C# ou Java");
			document.body.appendChild(x);

			y.setAttribute("type", "submit");
			y.setAttribute("id", "secondAreaName");
			y.setAttribute("name", "secondArea");
			document.body.appendChild(y);
		} else {
			phase2Message.innerHTML = "Escolha uma das duas opções disponiveis"
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