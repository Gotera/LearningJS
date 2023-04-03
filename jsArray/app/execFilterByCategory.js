const btnFilterPerCategory = document.querySelectorAll('.btn')
btnFilterPerCategory.forEach(btn => btn.addEventListener('click', FilterPerCategory))

function FilterPerCategory() {
	const elementBtn = document.getElementById(this.id)
	const category = elementBtn.value
	let booksFiltred = books.filter(book => book.categoria == category)
	showBooksOnScreen(booksFiltred)
}