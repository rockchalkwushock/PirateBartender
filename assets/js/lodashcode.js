// my Object
var pref = {
  'strong': $('#strong').find(':selected').val() === 'Yes',
  'salty': $('#salty').find(':selected').val() === 'Yes',
  'bitter': $('#bitter').find(':selected').val() === 'Yes',
  'sweet': $('#sweet').find(':selected').val() === 'Yes',
  'fruity': $('#fruity').find(':selected').val() === 'Yes'
};

// my validation code
// only checking if all inputs read 'false'
function validateInputs(pref) {
  var emptyFields = _.filter(pref, function(value, key) {
    if (emptyFields.key === false) {
      alert('You must select at least one option.');
    } else {
      // run program
      randomDrink = myBartender.createDrink(pref);
    }
  });
}

if (pref.strong === false) {
  alert('You must choose a liquor!');
} else {

}

//  3#####################

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

_.each(this.pantry.ingredients, function() {
  
});
