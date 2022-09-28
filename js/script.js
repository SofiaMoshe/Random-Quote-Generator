/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

// This is an Array of objects storing the quoted date (source, quote, year, citation) 


let quotes = [
  {
    source: "Marcus Aurelius",
    quote: "The happiness of your life depends on the quality of your thoughts."

  },
  {
    source: "Louisa May Alcott",
    quote: "I am not afraid of storms, for I am learning how to sail my ship.",
    citation: "Little Women",
    year: "1869"

  },

  {
    source: "Brian Tracy",
    quote: "There are no limits to what you can accomplish, except the limits you place on your own thinking." 
  },
  {
    source: "C.S. Lewis",
    quote: "You are never too old to set another goal or to dream a new dream." 
  },
  {
    source: "Zig Ziglar",
    quote: "Positive thinking will let you do everything better than negative thinking will." 
  },
  {
    source: "Theodore Roosevelt",
    quote: "Believe you can and you’re halfway there." 
  },
  {
    source: "Martin Luther King, Jr.",
    quote: "If I cannot do great things, I can do small things in a great way." 
  },

]

/***
 * `getRandomQuote` function
***/

// This function getRandomQuote will create a random number which will correlate with the arrays above to choose a random quote


const getRandomQuote = () => {
   const randomNumber = Math.floor(Math.random() * quotes.length);
  return quotes[randomNumber];
}


/***
 * `printQuote` function
***/
// 1. getRandomQuote function, 2. use returned quote to use as html and quote properties 3. strig will display in browser


const printQuote = () => {
  let random = getRandomQuote();

  let html = `<p class= "quote" > ${random.quote}</p> 
              <p class= "source" >${random.source}`
                if(random.citation !== undefined){
                  html += `span class = "citation"> ${random.citation}</span>`
                }
                if (random.year !== undefined){
                  html += `span class = "year"> ${random.year}</span>`
                }
                `</p>`
  document.getElementById('quote-box').innerHTML = html; 
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);


