/*
Site created by DrewBStew, 2016

Pseudo-code fun:

1) Each quote has its own object
2) objects have properties of string (the actual quote), season#, episode#, episode_name, airdate
3) Example: string="Mmm... sacrilicious.", season#=5, episode#=16, episode_name="Homes Loves Flanders", airdate="1994"
*/

/*
SELECTORS
*/

var quote = document.getElementById("quote");
var quoteInfo = document.getElementById("quote-info")
var newQuoteButton = document.getElementById("new-quote-btn")

/*
QUOTES
*/

// Can I keep all this shit in a separate JS doc and link to it?
var quotes = [
  {
    string:"Mmm... sacrilicious.",
    season:"5",
    episode_no:"16",
    episode_name:"Homer Loves Flanders",
    airdate:"1994"
  },
  {
    string:"Oh, they have the internet on computers now!",
    season:"9",
    episode_no:"14",
    episode_name:"Das Bus",
    airdate:"1998"
  },
  {
    string:"Hey! Just because I don't <em>care</em> doesn't mean I don't understand!",
    season:"2",
    episode_no:"19",
    episode_name: "Lisa's Substitute",
    airdate:"1991"
  },
  {
    string:"I know I'm not normally a praying man, but if you're up there: please, save me, Superman!",
    season:"9",
    episode_no:"24",
    episode_name:"Lost Our Lisa",
    airdate:"1998"
  },
  {
    string:"Don't blame <em>me</em> - I voted for Kodos!",
    season:"8",
    episode_no:"1",
    episode_name:"Treehouse of Horror VII",
    airdate:"1996"
  },
  {
    string:"But I can't be a missionary! I don't even <em>believe</em> in Jebus!",
    season:"11",
    episode_no:"15",
    episode_name:"Missionary: Impossible",
    airdate:"2000",
  },
  {
    string:"Beer! Now there's a temporary solution.",
    season:"1",
    episode_no:"3",
    episode_name:"Homer's Odyssey",
    airdate:"1990"
  },
  {
    string:"Lisa, in this house, we obey the laws of thermodynamics!",
    season:"6",
    episode_no:"21",
    episode_name:"The PTA Disbands",
    airdate:"1995"
  },
  {
    string:"I'm a white male, age 18 to 49. Everyone listens to me -- no matter how dumb my suggestions are!",
    season:"5",
    episode_no:"14",
    episode_name:"Lisa vs. Malibu Stacy",
    airdate:"1994"
  },
  {
    string:"Oh, well, of course, everything looks bad if you remember it.",
    season:"8",
    episode_no:"9",
    episode_name:"El Viaje Misterioso de Nuestro Jomer",
    airdate:"1997"
  },
  {
    string:"Hey, he's not happy at all! He lied to us through song! I HATE when people do that!",
    season:"5",
    episode_no:"13",
    episode_name:"Homer and Apu",
    airdate:"1994"
  },
  {
    string:"But Marge... valets! For once maybe someone will call me \"sir\" without adding \"you're making a scene.\"",
    season:"7",
    episode_no:"14",
    episode_name:"Scenes from the Class Struggle in Springfield",
    airdate: 1996
  }
];

/*
EVENTS
*/

var quoteNumber = getQuoteNumber();

newQuoteButton.addEventListener("click", updateQuote);

function getQuoteNumber() {
  return Math.floor(Math.random() * quotes.length);
  // random number between 0 & 1, times the number of quotes, then floored
}

function updateQuote() {
  quoteNumber = getQuoteNumber();
  quote.innerHTML = '<i class="fa fa-quote-left"></i>' + quotes[quoteNumber].string + '<i class="fa fa-quote-right"></i>';
  quoteInfo.innerHTML =  'Season ' + quotes[quoteNumber].season +
   ', Episode ' + quotes[quoteNumber].episode_no + ': ' + quotes[quoteNumber].episode_name + ' (' + quotes[quoteNumber].airdate + ')';
}

/*
DOCUMENT READY
*/

updateQuote();
