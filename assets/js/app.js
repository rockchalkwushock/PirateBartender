// ########################################
/*
*	Table of Contents
*	1)	Initialization of Variables
*     a)  Global
*	2)	Constructors
*     a) Bartender( )
*     b) Ingredient( )
*     c) Pantry( )
*	3)	Prototypes
*     a) createDrink( )
*     b)
*	4)	Objects
*     a) myPantry
*     b) myBartender
*     c) ingredients[]
* 5)  Child Functions
*     a) initLoad( )
*     b) random( )
* 6)  Validation Checks
*     a)
*     b)
* 7)  App.js Execution
*/

// ####################################################
/* ---------- Initialization of Variables ---------- */
// ####################################################

/* ---------- a) Global ---------- */

var ingredients;
var usersChoices = [];
var myBartender;
var myPantry;
var randomDrink;

// #####################################
/* ---------- Constructors ---------- */
// #####################################

/* ---------- a) Bartender ---------- */

function Bartender(pantry) {
  this.pantry = pantry;
}

/* ---------- b) Ingredient ---------- */

function Ingredient(item, preference) {
  this.item = item;
  this.preference = preference;
}

/* ---------- d) Pantry ---------- */

function Pantry(ingredients) {
  this.ingredients = ingredients;
}

// ###################################
/* ---------- Prototypes ---------- */
// ###################################

/* ---------- a) createDrink ---------- */

Bartender.prototype.createDrink = function(patronChoices) {
  var drink = [];
  for (var key in patronChoices) {
    if (patronChoices[key]) {
      var match = [];
      for (var i = 0; i < this.pantry.ingredients.length; i++) {
        if (this.pantry.ingredients[i].preference == key) {
          match.push(this.pantry.ingredients[i]);
        }
      }
      var num = random(0, 2);
      drink.push(match[num]);
    }
  }
  return drink;
};

/* ---------- b)  ---------- */



// ################################
/* ---------- Objects ---------- */
// ################################

/* ---------- a) myPantry ---------- */

myPantry = new Pantry(ingredients);
// myPantry = this.ingredients (Pantry).

/* ---------- b) myBartender ---------- */

myBartender = new Bartender(myPantry);
// myBartender = this.pantry (Bartender) & this.ingredients (Pantry).

/* ---------- c) myBartender ---------- */

ingredients = [
  new Ingredient('Glug of rum', 'strong'),
  new Ingredient('Slug of whiskey', 'strong'),
  new Ingredient('Splash of gin', 'strong'),
  new Ingredient('Olive on a stick', 'salty'),
  new Ingredient('Salt-dusted rim', 'salty'),
  new Ingredient('Sasher of bacon', 'salty'),
  new Ingredient('Shake of bitters', 'bitter'),
  new Ingredient('Splash of tonic', 'bitter'),
  new Ingredient('Twist of lemon peel', 'bitter'),
  new Ingredient('Sugar cube', 'sweet'),
  new Ingredient('Spoonful of honey', 'sweet'),
  new Ingredient('Splash of cola', 'sweet'),
  new Ingredient('Slice of Orange', 'fruity'),
  new Ingredient('Dash of cassis', 'fruity'),
  new Ingredient('Cherry on top', 'fruity'),
];

// ########################################
/* ---------- Child Functions ---------- */
// ########################################

/* ---------- a) initLoad ---------- */
function initLoad()
{
  console.log('page load');
  $('#order_form').submit(function(event) {

    event.preventDefault();

    var pref = {
      'strong': $('#strong').find(':selected').val(),
      'salty': $('#salty').find(':selected').val(),
      'bitter': $('#bitter').find(':selected').val(),
      'sweet': $('#sweet').find(':selected').val(),
      'fruity': $('#fruity').find(':selected').val()
    };
    console.log(pref);
    console.log(myBartender);
    randomDrink = myBartender.createDrink(pref);


    console.log(randomDrink);


  });
}

/* ---------- b) random ---------- */

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// ##########################################
/* ---------- Validation Checks ---------- */
// ##########################################

/* ---------- a)  ---------- */



/* ---------- b)  ---------- */



// #########################################
/* ---------- App.js Execution ---------- */
// #########################################

$(document).ready(initLoad);
