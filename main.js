firstChoice = document.querySelector('input[name="area"]');
butttonFirstChoice = document.querySelector('#escolherArea');
console.log(butttonFirstChoice);

butttonFirstChoice.addEventListener("click", function (event) {
	let message = document.querySelector('#choosedArea')
	event.preventDefault();
	const choice = firstChoice
	const value = choice.value

	console.log(value)

	message.innerHTML = "Você escolheu " + value;
	FirstChoiceFilterToFrontEnd()
	IndependentChoiceAboutFuture()
});

function FirstChoiceFilterToFrontEnd() {
	let phase2Message = document.querySelector('#phase2Message')
	var x = document.createElement("INPUT");
	var y = document.createElement("INPUT");
	const choice = firstChoice
	const value = choice.value

	if (value == "Front-End") {
		secondChoice = document.querySelector('input[name="advancedArea"]');
		phase2Message.innerHTML = "Já que escolheu Front-End, você prefere React ou Vue?"
		x.setAttribute("type", "text");
		x.setAttribute("id", "advancedArea");
		x.setAttribute("placeHolder", "React ou Vue");
		document.body.appendChild(x);

		console.log(secondChoice)
		y.setAttribute("type", "submit");
		document.body.appendChild(y);
	} else {
		if (value == "Back-End") {
			phase2Message.innerHTML = "Já que escolheu Back-End, você prefere C# ou Java?"
			x.setAttribute("type", "text");
			x.setAttribute("placeHolder", "C# ou Java");
			document.body.appendChild(x);

			y.setAttribute("type", "submit");
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