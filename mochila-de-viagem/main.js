const form = document.getElementById('novoItem')
const list = document.getElementById('lista')

form.addEventListener('submit', (event) => {
	event.preventDefault()
	const name = event.target.elements['nome']
	const quantity = event.target.elements['quantidade']

	createElement(name.value, quantity.value)
	name.value = ''
	quantity.value = ''
})

function createElement(name, quantity) {
	const newItem = document.createElement('li')
	newItem.classList.add('item')

	const numberItem = document.createElement('strong')
	numberItem.innerHTML = quantity

	newItem.appendChild(numberItem)
	newItem.innerHTML += name

	list.appendChild(newItem)

	localStorage.setItem('name', name)
	localStorage.setItem('quantity', quantity)
}