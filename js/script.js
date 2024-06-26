// HTML button recovery
const btn = document.getElementById("button");

// addEventListener on btn
btn.addEventListener("click", function () {
  // input data recovery
  let completeName = document.getElementById("completeName").value;
  let km = document.getElementById("km").value;
  let age = document.getElementById("age").value;
  // cost per km variable declaration
  let costPerKm = 0.21;
  // price variable declaration
  let price = costPerKm * km;
  // CONDITIONAL CONSTRUCTION
  // reduction initialised to 0
  let reduction = 0;
  // if user is a minor...
  if (age === "underage") {
    reduction = 20 / 100;
  } // else if user is over 65...
  else if (age === "over_65") {
    reduction = 40 / 100;
  }
  // Discount's amount variable
  let discount = (price * reduction).toFixed(2);

  // Ticket reduced price variable declaration
  let reducedPrice = (price - discount).toFixed(2);
  
  if (age === "underage" || age === "over_65") {
    console.log("L'utente " + completeName + " ha diritto a uno sconto di " + discount + "€. Il suo prezzo finale è pari a " + reducedPrice + "€.");
  } else {
    console.log("L'utente " + completeName + " non ha diritto a uno sconto. Il suo prezzo finale è pari a " + reducedPrice + "€.");
  }
});

// HTML reset button recovery
const reset = document.getElementById("reset");

// addEventListener
reset.addEventListener("click", function() {
    document.querySelector(".form").reset();
})