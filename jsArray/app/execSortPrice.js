let btnFilterPerPrice = document.getElementById('btnOrdenarPorPreco')
btnFilterPerPrice.addEventListener('click', sortBooksByPrice)

function sortBooksByPrice() {
	let booksSorted = books.sort((a,b) => a.preco - b.preco)
	showBooksOnScreen(booksSorted)
}