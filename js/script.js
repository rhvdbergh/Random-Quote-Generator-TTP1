// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// array to hold quote objects
// quote objects framework: { quote: '', source: '', citation: '', year: '', bartlettPage: '' }
// quotations sourced from "Familiar Quotations" by John Bartlett, 1968 edition, available online
// at https://archive.org/details/familiarquotatio017007mbp
var quotes = [{
        quote: 'To different minds, the same world is a hell, and a heaven.',
        source: 'Ralph Waldo Emerson',
        citation: 'Journal',
        year: '1822',
        bartlettPage: '604'
    },
    {
        quote: 'One man, one vote.',
        source: 'Civil rights slogan',
        bartlettPage: '1104'
    },
    {
        quote: 'Death is nothing to us, since when we are, death has not come, and when death has come, we are not.',
        source: 'Epicurus',
        citation: 'Diogenes Laertius 10.125',
        bartlettPage: '103'
    },
    {
        quote: 'Whatever is worth doing at all, is worth doing well.',
        source: 'Philip Dormer Stanhope',
        citation: 'Letters',
        year: '1746',
        bartlettPage: '415'
    },
    {
        quote: 'I have thought too much to stoop to action.',
        source: 'Philippe Auguste Villiers',
        citation: 'Axel',
        year: '1890',
        bartlettPage: '780'
    }
];

// function to select and return quote object randomly from quotes array 
function getRandomQuote() {
    // quotes array's index is length - 1, so Math.floor * quotes.length ensures 
    // a number between 0 and quotes.length - 1.
    var randNum = Math.floor(Math.random() * quotes.length);
    return quotes[randNum];
}

// returns a random value between and including 0 - 255
function randColor() {
    return Math.floor(Math.random() * 256);
}

// function to print a random quote to the document
// select random quote, create HTML string, display HTML to the page
// if citation or year is missing, don't add respective value to the HTML
function printQuote() {
    var quote = getRandomQuote();

    // prepare the HTML string
    quoteHTML = '<p class="quote"> ' + quote.quote + '</p>';
    quoteHTML += '<p class="source"> ' + quote.source;
    // check to see if there is a citation added for this specific quote
    if ('citation' in quote) {
        quoteHTML += '<span class="citation"> ' + quote.citation + '<span>';
    }
    // check to see if there is a year added for this specific quote
    if ('year' in quote) {
        quoteHTML += '<span class="year"> ' + quote.year + '<span>';
    }
    quoteHTML += '</p>';

    // display on web page
    document.getElementById('quote-box').innerHTML = quoteHTML;

    // change the background color to a random color
    randRGB = "rgb(" + randColor() + "," + randColor() + "," + randColor() + ")";
    document.body.style.backgroundColor = randRGB;
}

// at intervals of 30 seconds (= 30000 milliseconds), change the quote and
// background color
var intervalID = window.setInterval(printQuote, 30000);