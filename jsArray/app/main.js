let books = []
const endpointAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'
getBooksOnAPI()

async function getBooksOnAPI() {
    const res = await fetch(endpointAPI)
    books = await res.json()
    let booksWithDiscount = applyDiscount(books)
    showBooksOnScreen(booksWithDiscount)
}

