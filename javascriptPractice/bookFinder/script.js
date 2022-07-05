
let displayRes = function(response){
	let container = document.getElementById('booklist');
	
	response.map((book) => {
		let card = document.createElement('li')
		let text = document.createTextNode(`${book.title}`)
		
		card.appendChild(text)
		container.appendChild(card)
	})
}

function findAndDisplayBook(search) {
    document.getElementById("header").style.display= "none";
    document.getElementById("search_bar").style.display = "none";
    document.getElementById("search_button").style.display= "none";
    /* fetch('https://openlibrary.org/search.json?q=harry+potter')
        .then(function(response){
            return response.json()
        })
        .then(function(response){
            displayRes(response.docs)
        })
        .catch(err => console.error(err));*/
} 