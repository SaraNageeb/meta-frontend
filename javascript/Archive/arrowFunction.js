    const brasil = ['Rio de Janeiro', 'Sao Paulo', 'Bahia'];

    const love = brasil.map(function(name) {
        return `I love ${name}!`;
    });

    const loveArrow = brasil.map((name) => {
        return `I love ${name}!`;
    });

    const loveArrowSingle = brasil.map(name => {
        return `I love ${name}!`;
    });

    const loveArrowOneLine = brasil.map(name => `I love ${name}!`);

    const loveChain = brasil
                        .filter(name => name === 'Rio de Janeiro')
                        .map(name => `I love ${name}!`);

   
   console.log(love); // ["I love Rio de Janeiro!", "I love Sao Paulo!", "I love Bahia!"]
   console.log(loveArrow); // ["I love Rio de Janeiro!", "I love Sao Paulo!", "I love Bahia!"]
   console.log(loveArrowOneLine); // ["I love Rio de Janeiro!", "I love Sao Paulo!", "I love Bahia!"]
   console.log(loveChain); // ["I love Rio de Janeiro!"]
