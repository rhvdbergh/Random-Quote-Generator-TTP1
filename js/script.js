// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// array to hold quote objects
// quote objects framework: { quote: '', source: '', citation: '', year: '' }
var quotes = [{}, {}];

// function to select and return quote object randomly from quotes array 
function getRandomQuote() {

}

// function to print a random quote to the document
// select random quote, create HTML string, display HTML to the page
// if citation or year is missing, don't add respective value to the HTML
function printQuote() {
    var quote = getRandomQuote();

    // place holder quote for test purposes
    quoteHTML = '<p class="quote"> placeholderquote </p>';

    // display on web page
    document.getElementById('quote-box').innerHTML = quoteHTML;
}