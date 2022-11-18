
const Quote = require('inspirational-quotes');

console.log(Quote.getQuote()); // returns quote (text and author)
console.log(Quote.getQuote({ author: false }); // return quote without author
console.log(Quote.getRandomQuote()); // return any random quote


getQuote({ author: false });

npm 
var cowsay = require('inspirational-quotes');

console.log(cowsay.say({
    text : "cowsay",
    e : "oO",
    T : "U "
}));
