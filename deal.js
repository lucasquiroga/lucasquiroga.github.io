//Tarot Card App

//MODULE 1: Declarations

//create new object with cards
var cards = new Array ();

//create variables to limit cards dealt to 10 & to test in console
var cardsLeftToDeal = 10;
var cardsDealt = 0;

//array containing the 40 cards with their img names
cards[00] = "00";
cards[01] = "01";
cards[02] = "02";
cards[03] = "03";
cards[04] = "04";
cards[05] = "05";
cards[06] = "06";
cards[07] = "07";
cards[08] = "08";
cards[09] = "09";
cards[10] = "10";
cards[11] = "11";
cards[12] = "12";
cards[13] = "13";
cards[14] = "14";
cards[15] = "15";
cards[16] = "16";
cards[17] = "17";
cards[18] = "18";
cards[19] = "19";
cards[20] = "20";
cards[21] = "21";
cards[22] = "22";
cards[23] = "23";
cards[24] = "24";
cards[25] = "25";
cards[26] = "26";
cards[27] = "27";
cards[28] = "28";
cards[29] = "29";
cards[30] = "30";
cards[31] = "31";
cards[32] = "32";
cards[33] = "33";
cards[34] = "34";
cards[35] = "35";
cards[36] = "36";
cards[37] = "37";
cards[38] = "38";
cards[39] = "39";


//MODULE 2: Functions

// create function to randomly select a number that corresponds with the number of cards available. Used Math.floor to remove remainder from the random calculation, found that i could never get the King Of Swords because 78 was an impossibility. opted for math.round in order to achieve that possibility. 
var random = function() {
  	return Math.round(Math.random() * (39-cardsDealt));
};

// create a function to randomly determine if the card will be oriented up or down, if randomOrient returns 0, do nothing. if randomOrient returns 1, rotate the card at a 180 degree angle.
var randomOrient = function() {
	return Math.round(Math.random());
};

//create a function to remove a card once it has been used. This is a basic way to avoid duplicates. Implies that to deal we must refresh the page. 
var removeCard = function(k) {
	for (var j=k; j<cards.length; j++) {
		cards[j] = cards[j+1];	
	}
	cardsLeftToDeal--;
	cardsDealt++;
};

// create function to deal your random number as a card 
// also orient the card up if randomOrient is 0 & down if randomOrient is 1
var dealCard = function(i) {
	if (cardsLeftToDeal == 0) {
		return false;
	} else {
		//display card chosen in HTML by creating an image element
		var img = document.createElement("img");
		var cardJustDealt = cards[i];
		var orient = 0//randomOrient();
		$(img).addClass(cardJustDealt);
		// addClass for card's position (1-7)
		img.src = ("images/deck/" + cards[i] + ".jpg");
		img.alt = cards[i];
		
		if (orient === 1) {
			$(img).addClass("orientationDown");
			document.getElementById("hand").appendChild(img);
			removeCard(i);
		} else {
			$(img).addClass("orientationUp");
			document.getElementById("hand").appendChild(img);
			removeCard(i);
		}
	}
};

//MODULE 3: Execution (JQuery)

//jquery: deal cards when "deck" is clicked & shuffle the deck by reloading the page (find a more efficient way of doing this within the page)
$(document).ready(function() {
	$('#deal').click(function() {
		console.log(dealCard(random()));
	});
	$('#shuffle').click(function() {
		location.reload();
	});
});
