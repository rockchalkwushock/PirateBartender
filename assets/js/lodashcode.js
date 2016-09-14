
// Original Code
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

// First For Loop
_.each(patronChoices, callback);

var callback = function(value, key, patronChoices) {
  if (key) {
    var match = [];
  }
};

// Second For Loop code
var pantry = this.pantry.ingredients;

var callback2 = function (ingredient, index, pantry) {
  console.log('ingredient: ' + ingredient);
  if (ingredient.preference == key) {
    match.push(ingredient);
  }
};

_.each(pantry, callback2);
