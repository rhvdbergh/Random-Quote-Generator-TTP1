// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// array to hold quote objects
// quote objects framework: { quote: '', source: '', citation: '', year: '', bartlettPage: '' }
// quotations sourced from "Familiar Quotations" by John Bartlett, 1968 edition, available online
// at https://archive.org/details/familiarquotatio017007mbp
var quotes = [{
        quote: 'To different minds, the same world is a hell, and a heaven',
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
    }
];

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