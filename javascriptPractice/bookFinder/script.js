
let displayRes = function(response){
	var container = document.getElementById('body');
	
	/* response.map((book) => {
		let card = document.createElement('li')
		let text = document.createTextNode(`${book.title}`)
		
		card.appendChild(text)
		container.appendChild(card)
	}) */
}

function findAndDisplayBook(search) {
    document.getElementById("header").style.display= "none";
    document.getElementById("search_bar").style.display = "none";
    document.getElementById("search_button").style.display= "none";
    document.getElementById("loading_screen").innerHTML = "Loading...";
    
    // Didn't work
    /* let node = document.createElement("p");
    let textNode = document.createTextNode("Loading...");

    node.appendChild(textNode);
    container.appendChild(node); */
    
    /* fetch('https://openlibrary.org/search.json?q=harry+potter')
        .then(function(response){
            return response.json()
        })
        .then(function(response){
            displayRes(response.docs)
        })
        .catch(err => console.error(err));*/
} 