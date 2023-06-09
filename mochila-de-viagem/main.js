const form = document.getElementById('novoItem')
const list = document.getElementById('lista')
const itens = JSON.parse(localStorage.getItem('itens')) || []

itens.forEach((element) => {
	createElement(element)
})

form.addEventListener('submit', (event) => {
	event.preventDefault()
	const name = event.target.elements['nome']
	const quantity = event.target.elements['quantidade']
	const exists = itens.find(element => element.name === name.value)
	const currentItem = {
		"name": name.value,
		"quantity": quantity.value
	}
	if (exists) {
		currentItem.id = exists.id
		updateElemenet(currentItem)
		itens[itens.findIndex(element => element.id === exists.id)] = currentItem
	} else {
		currentItem.id = itens[itens.length - 1] ? (itens[itens.length - 1]).id + 1 : 0
		createElement(currentItem)
		itens.push(currentItem)
	}
	localStorage.setItem('itens', JSON.stringify(itens))
	name.value = ''
	quantity.value = ''
})

function createElement(item) {
	const newItem = document.createElement('li')
	newItem.classList.add('item')

	const numberItem = document.createElement('strong')
	numberItem.innerHTML = item.quantity
	numberItem.dataset.id = item.id
	newItem.appendChild(numberItem)
	newItem.innerHTML += item.name
	newItem.appendChild(buttonDelete(item.id))
	list.appendChild(newItem)
}

function updateElemenet(item) {
	document.querySelector("[data-id='" + item.id + "']").innerHTML = item.quantity
}

function buttonDelete(id) {
	const elementButton = document.createElement('button')
	elementButton.innerText = "X"
	elementButton.addEventListener("click", function () {
		deleteElement(this.parentNode, id)
	})
	return elementButton
}

function deleteElement(item, id) {
	item.remove()
	itens.splice(itens.findIndex(element => element.id === id), 1)
	localStorage.setItem('itens', JSON.stringify(itens))
}