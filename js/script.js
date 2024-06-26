// HTML button recovery
const btn = document.getElementById("button");

// addEventListener on btn
btn.addEventListener("click", function() {
    // input data recovery
    let completeName = document.getElementById("completeName").value;
    let km = document.getElementById("km").value;
    console.log(completeName, km)
    // cost per km variable declaration
    let costPerKm = 0.21;
    // price variable declaration
    let price = costPerKm * km;
})