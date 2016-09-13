/* ---------- a) initLoad ---------- */
function initLoad()
{
  $('.results').hide();
  console.log('page load');
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

  });
}

// ##########################################
/* ---------- Validation Checks ---------- */
// ##########################################

/* ---------- a) validateInputs ---------- */

function validateInputs(pref) {
  var emptyFields = pref[key].filter(function() {return this.value === 'null';});

  if (emptyFields.length) {
    alert('You must choose at least one option');
  }
  else {
    randomDrink = myBartender.createDrink(pref);
  }
}
