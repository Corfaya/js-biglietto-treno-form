// BONUS (1)
document.querySelector(".ticket").classList.add("ticket-none");
// BONUS (1) END

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
  
  // Output
  document.getElementById("passenger").innerHTML = `${completeName}`
  document.getElementById("cost").innerHTML = `${reducedPrice}€`

  // Conditional block for outputs
  if (age === "underage") {
    document.getElementById("typeOfTicket").innerHTML = `Young ticket`
    document.getElementById("typeOfDiscount").innerHTML = `20%`
    console.log("L'utente " + completeName + " ha diritto a uno sconto di " + discount + "€. Il suo prezzo finale è pari a " + reducedPrice + "€.");
  } else if(age === "over_65") {
    document.getElementById("typeOfTicket").innerHTML = `Senior ticket`
    document.getElementById("typeOfDiscount").innerHTML = `40%`
    console.log("L'utente " + completeName + " ha diritto a uno sconto di " + discount + "€. Il suo prezzo finale è pari a " + reducedPrice + "€.");
  } 
  else {
    document.getElementById("typeOfTicket").innerHTML = `Standard ticket`
    document.getElementById("typeOfDiscount").innerHTML = `Nessuno`
    console.log("L'utente " + completeName + " non ha diritto a uno sconto. Il suo prezzo finale è pari a " + reducedPrice + "€.");
  }

  //BONUS (2)
  document.querySelector(".ticket").classList.remove("ticket-none");
  // BONUS (2) END
});

// HTML reset button recovery
const reset = document.getElementById("reset");

// addEventListener
reset.addEventListener("click", function() {
    document.querySelector(".form").reset();
    // BONUS (3)
    document.querySelector(".ticket").classList.add("ticket-none");
    // BONUS (3) END
})