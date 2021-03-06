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
*	4)	Objects
*     a) myPantry
*     b) myBartender
*     c) ingredients[]
* 5)  Child Functions
*     a) initLoad( )
*     b) newDrink( )
* 6)  Validation Checks
*     a)
* 7)  App.js Execution
*/
// ########################################

// ####################################################
/* ---------- Initialization of Variables ---------- */
// ####################################################

/* ---------- a) Global ---------- */

var ingredients;
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

/* ---------- c) Pantry ---------- */

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
      var num = _.random(0, 2);
      drink.push(match[num]);
    }
  }
  return drink;
};

// ################################
/* ---------- Objects ---------- */
// ################################

/* ---------- a) ingredients[] ---------- */

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

/* ---------- b) myPantry ---------- */

myPantry = new Pantry(ingredients);
// myPantry = this.ingredients (Pantry).

/* ---------- c) myBartender ---------- */

myBartender = new Bartender(myPantry);
// myBartender = this.pantry (Bartender) & this.ingredients (Pantry).

// ########################################
/* ---------- Child Functions ---------- */
// ########################################

/* ---------- a) initLoad ---------- */

function initLoad()
{
  $('.results').hide();
  $('#order_form').submit(function(event) {

    event.preventDefault();

    var pref = {
      'strong': $('#strong').find(':selected').val() === 'Yes',
      'salty': $('#salty').find(':selected').val() === 'Yes',
      'bitter': $('#bitter').find(':selected').val() === 'Yes',
      'sweet': $('#sweet').find(':selected').val() === 'Yes',
      'fruity': $('#fruity').find(':selected').val() === 'Yes'
    };

    validateInputs(pref);
    newDrink();
  });
}

/* ---------- b) newDrink ---------- */

function newDrink() {
	$('.pour-btn').click(function() {
    $('.order').empty();
    $('.results').hide();
    drink = [];
    match = [];
    $(".select").val('Null');
  });
}

// ##########################################
/* ---------- Validation Checks ---------- */
// ##########################################

/* ---------- a) validateInputs ---------- */

function validateInputs(pref) {

  if (_.isEmpty(_.compact(_.values(pref)))) {
    alert('You must choose at least one selection.');
  } else {
    randomDrink = myBartender.createDrink(pref);

    for (var i = 0; i < randomDrink.length; i++) {
      $('.drink ul').append('<li>' + randomDrink[i].item + '</li>');
    }
    $('.results').show();
  }
}




// #########################################
/* ---------- App.js Execution ---------- */
// #########################################

$(document).ready(initLoad);
