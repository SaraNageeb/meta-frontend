// get the first <p> element in the document:
const para = document.querySelector('p');
console.log(para);

// get the first <p> element in the document with class="error":
const divpara = document.querySelector('p.error');
console.log(divpara);

// get the first <div> element in the document with class="error":
const divclass = document.querySelector('div.error');
console.log(divclass);

// get all <p> elements in the document
const paras = document.querySelectorAll('p');
console.log(paras);

// select the first element
console.log(paras[0]);

// select the second element
console.log(paras[1]);

// select the third element
console.log(paras[2]);


// Using for each to loop each element 
paras.forEach(para => {
  console.log(para);
});

// get all elements in the document with class="example":
const errors = document.querySelectorAll('.error');
console.log(errors);
