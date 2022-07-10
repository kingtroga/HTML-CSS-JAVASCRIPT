var person = { firstname: 'Tony', lastname: "Alicea"};
console.log(person);

// above is the same as 
person = new Object();
person.firstname = "Tony";
person.lastname = "Alicea";
console.log(person);

// although the first way of writing was faster.