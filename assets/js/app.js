// ########################################
/*
*	Table of Contents
*	1)	Initialization of Variables
*     a)  Global
*	2)	Constructors
*     a) Ingredients( )
*     b)
*	3)	Prototypes
*     a)
*     b)
*	4)	Objects
*     a)
*     b)
* 5)  Child Functions
*     a) initLoad( )
*     b)
* 6)  Validation Checks
*     a)
*     b)
* 7)  App.js Execution
*/

// ####################################################
/* ---------- Initialization of Variables ---------- */
// ####################################################

/* ---------- a) Global ---------- */



/* ---------- b) Local ---------- */



// #####################################
/* ---------- Constructors ---------- */
// #####################################

/* ---------- a) Ingredients ---------- */

function Ingredients() {
    this.strong = ["glug of rum", "slug of whiskey", "splash of gin", "shot of tequila"];
    this.salty = ["olive on stick", "eye of newt", "rim of salt", "rasher of bacon"];
    this.bitter = ["shake of bitters", "splash of tonic", "twist of lemon", "dash of tang"];
    this.sweet = ["cube of sugar", "spoonful of honey", "splash of cola", "sprinkle of cinnamon"];
    this.fruity = ["slice of orange", "dash of cassis", "sack of cherries", "swirl of cream"];
    this.spicy = ["shake of paprika", "slice of jalepeno", "squirt of siracha", "grind of ginger"];
}

/* ---------- b)  ---------- */



// ###################################
/* ---------- Prototypes ---------- */
// ###################################

/* ---------- a) createDrink ---------- */

Ingredients.prototype.createDrink = function() {
  var order = '';
  for (var key in Ingredients) {
    var random = Math.floor((Math.random() * 4));
    if (!this.propertyIsEnumerable(key)) {

    }
  }
};

/* ---------- b)  ---------- */



// ################################
/* ---------- Objects ---------- */
// ################################

/* ---------- a)  ---------- */



/* ---------- b)  ---------- */



// ########################################
/* ---------- Child Functions ---------- */
// ########################################

/* ---------- a) initLoad ---------- */
function initLoad() {
  $('#order_form').submit(function(event) {
    event.preventDefault();

    $('.results').hide();

  });
}

/* ---------- b)  ---------- */



// ##########################################
/* ---------- Validation Checks ---------- */
// ##########################################

/* ---------- a)  ---------- */



/* ---------- b)  ---------- */



// #########################################
/* ---------- App.js Execution ---------- */
// #########################################

$(document).ready(initLoad);
