const form = document.getElementById('novoItem')
const list = document.getElementById('lista')
const itens = JSON.parse(localStorage.getItem('itens')) || []

console.log(itens)

itens.forEach((element) => {
	createElement(element)
})

form.addEventListener('submit', (event) => {
	event.preventDefault()
	const name = event.target.elements['nome']
	const quantity = event.target.elements['quantidade']

	const currentItem = {
		"name": name.value,
		"quantity": quantity.value
	}

	createElement(currentItem)

	itens.push(currentItem)

	localStorage.setItem('itens', JSON.stringify(itens))
	name.value = ''
	quantity.value = ''
})

function createElement(item) {
	const newItem = document.createElement('li')
	newItem.classList.add('item')

	const numberItem = document.createElement('strong')
	numberItem.innerHTML = item.quantity
	newItem.appendChild(numberItem)

	newItem.innerHTML += item.name

	list.appendChild(newItem)
}