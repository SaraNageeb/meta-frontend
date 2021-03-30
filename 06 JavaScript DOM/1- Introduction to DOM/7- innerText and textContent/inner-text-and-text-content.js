var firstItem = document.getElementById('one'); // Find first list item

var showTextContent = firstItem.textContent;    // Get value of textContent
console.log(showTextContent); // fresh figs

var showInnerText = firstItem.innerText;        // Get value of innerText
console.log(showInnerText); // figs


// Show the content of these two properties at the end of the list
var msg = '<p>textContent: ' + showTextContent + '</p>';
    msg += '<p>innerText: ' + showInnerText + '</p>';
var el = document.getElementById('scriptResults');
el.innerHTML = msg;

firstItem.textContent = 'milk';       // Update the first list item