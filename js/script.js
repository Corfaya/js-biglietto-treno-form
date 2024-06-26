// HTML button recovery
const btn = document.getElementById("button");

// addEventListener on btn
btn.addEventListener("click", function() {
    // input data recovery
    let completeName = document.getElementById("completeName").value;
    let km = document.getElementById("km").value;
    let age = document.getElementById("age").value;
    console.log(completeName, km, age)
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
        console.log(reduction)
    } // else if user is over 65
    else if (age === "over_65") {
        reduction = 40 / 100;
        console.log(reduction)
    }
    // Ticket reduced price variable declaration
    let reducedPrice = (price - ( price * reduction)).toFixed(2);
    console.log(reducedPrice)
})