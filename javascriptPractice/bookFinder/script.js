
let displayRes = function(response){
	var mainContainer = document.getElementById('body');
    
	
	 response.map((book) => {
		let minorContainer = document.createElement('div')
		let text = document.createTextNode(`${book.title}`)
		
		card.appendChild(text)
		container.appendChild(card)
	}) 
}

function findAndDisplayBook(search) {
    debugger
    document.getElementById("header").style.display= "none";
    document.getElementById("search_bar").style.display = "none";
    document.getElementById("search_button").style.display= "none";
    document.getElementById("loading_screen").innerHTML = "Loading...";

    let query = search.toLowerCase().replace(/\s+/g,"+");
    // query.toLowerCase();
    // query.replace(/\s+/g,"+");
    console.log(query);
    
     fetch('https://openlibrary.org/search.json?q=' + query)
        .then(function(response){
            return response.json()
        })
        .then(function(response){
            displayRes(response.docs)
        })
        .catch(err => console.error(err));
} 