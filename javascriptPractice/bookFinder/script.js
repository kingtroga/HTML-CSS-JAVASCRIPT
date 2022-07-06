
let displayRes = function(response){
    document.getElementById("loading_screen").style.display = "none";
	var mainContainer = document.getElementById('body');
    let header = document.createElement('h1');
        // document.createTextNode(`${book.title}`)
	let headerText = document.createTextNode("Search Results");
		
	header.appendChild(headerText);
	mainContainer.appendChild(header);
    let bookList = document.createElement('ol');
    
	
	 response.map((book) => {
		

        console.log(book.title);
        let bookListItem = document.createElement('li');
        let bookTitle = document.createTextNode(`${book.title}`);

        bookListItem.appendChild(bookTitle);
        bookList.appendChild(bookListItem);
        mainContainer.appendChild(bookList);

	}) 
}

function findAndDisplayBook(search) {
    
    document.getElementById("header").style.display= "none";
    document.getElementById("input_container").style.display= "none";
    /* document.getElementById("search_bar").style.display = "none";
    document.getElementById("search_button").style.display= "none"; */
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