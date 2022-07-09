<img src="..\img\bookFInder1.png">
# Book finder
<p>Book finder is a web application in which a user can
input the name of the book he/she is looking for and a
query would be made to the back end api (open library)
and it would return the name of the book, the name of the 
author(s) of the book, the first year of publishing of the 
book, and finnally the first ISBN of the book.</p>

## Implementation
1. <s>A The index.html file contains the name of the page and a search box with a search button. </s>
 - <s>When a user inputs the name of a book and clicks on sumbit a JavaScript function called `findAndDisplayBook` is called.</s>
2. <s>The function that is located in the script.js file is invoked line by line. Starting by </s>
  - <s>Making the name of the page, the search box, and search button invisible.</s>
  - <s>Parse the text ( by text i mean string) given to something JavaScript understands </s>
  - <s>Concatenate the parsed string to the fetch request and make the ApI request</s>
  - <b>Note</b>: 
     1. <s>a loading screen will be displayed </s>while the asynchronous parts of the Javascript runs its course. 
     2. The loading screen would show a Giant "Loading" text bluring in and out while changing colors in the middle of the screen.
  - When the asynchronous parts are done an entirely new page would be half created with JavaScript and half created with CSS.
3. <s>The Loading screen would be removed</s> and the </s>Search results would be displayed</s> as "Search results" and  the " literal Search results" however I want to style it. 

