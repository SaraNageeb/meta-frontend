var allLis = document.getElementsByTagName('li'); // Find <li> elements

if (allLis.length > 0) {  // If 1 or more are found

  var el = allLis[2];     // Select the third element using array syntax
  el.className = 'cool';  // Change the value of the class attribute

}

console.log(allLis); // It will return a HTML Collection

console.log(allLis[1]); // It will return the 2nd <li>


// Loop over every single element in allLis
for(let li of allLis) {
  console.log(li);
}