function validateInputs(pref) {

  if (_.isEmpty(_.compact(_.values(pref)))) {
    alert('You must choose at least one selection.');
  } else {
    randomDrink = myBartender.createDrink(pref);
  }
}



// createDrink -- Lodash rework
Bartender.prototype.createDrink = function(patronChoices) {
// local variables to the method.
  // Will hold final ingredients for drink.
  var drink = [];
  // Points to the ingredients[obj arr].
  var pantry = this.pantry.ingredients;
  // Holds matching ingredients
  var match = [];

  // First For Loop
  _.each(patronChoices, callback);
    // stores callback funciton for first for loop.
   callback = function(value, key, patronChoices) {
    if (key) {
      // Second For Loop
      _.each(pantry, callback2);
      // stores callback function for second for loop.
      var callback2 = function (ingredient, index, pantry) {
        if (ingredient.preference == key) {
          match.push(ingredient);
        }
      };
      var num = _.random(0, 2);
      drink.push(match[num]);
    }
  };
return drink;
};
