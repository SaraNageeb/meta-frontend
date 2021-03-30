// const content = document.querySelector('p');

// console.log(content.classList);

// content.classList.add('error');

// content.classList.remove('error');

// content.classList.add('success');

const paras = document.querySelectorAll('p');

paras.forEach(p => {
  if(p.textContent.includes('error')){
    p.classList.add('error');
  } else if(p.textContent.includes('success')) {
    p.classList.add('success');
  }
});

const title = document.querySelector('test');

// It will give a class test to title(h1)
title.classList.toggle('test');

// // It will remove a class test to title(h1)
title.classList.toggle('test');