
let displayRes = function(response){
    document.getElementById("loading_screen").style.display = "none";
	var mainContainer = document.getElementById('body');
    let header = document.createElement('h1');
        // document.createTextNode(`${book.title}`)
	let headerText = document.createTextNode("Search Results");
		
	header.appendChild(headerText);
	mainContainer.appendChild(header);
    
    
	
	 response.map((book) => {
		let bookList = document.createElement('div');
        bookList.className = "bookCards"
        /* let container = document.createElement(''); */
        let spanTag1 = document.createElement('span');
        let spanTag2 = document.createElement('span');
        let headerTag = document.createElement('h3');
        let bookTitle = document.createTextNode(`TITLE: ${book.title}`);

        if (!book.author_name) {
            var bookAuthor = document.createTextNode("Unknown Author");
        } else if (book.author_name.length > 1) {
            var bookAuthor = document.createTextNode(`AUTHOR: ${book.author_name.join(", ")}`);
        } else  if (book.author_name) {
            var bookAuthor = document.createTextNode(`AUTHOR: ${book.author_name}`);
        }

        if (!book.isbn){
            var bookISBN = document.createTextNode("Unknown ISBN");
        } else if (book.isbn.length > 1) {
            var bookISBN = document.createTextNode(`ISBN: ${book.isbn[0]}`);
        } else {
            var bookISBN = document.createTextNode(`ISBN: ${book.isbn}`);
        }
        

        headerTag.appendChild(bookTitle);
        bookList.appendChild(headerTag);
        mainContainer.appendChild(bookList);
        
        spanTag1.appendChild(bookAuthor);
        bookList.appendChild(spanTag1);
        mainContainer.appendChild(bookList);

        spanTag2.appendChild(bookISBN);
        bookList.appendChild(spanTag2);
        mainContainer.appendChild(bookList);

        
        /* bookList.appendChild(spanTag); */

        /* container.appendChild(bookList); */
        

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