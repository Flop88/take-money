// Money 
var moneyRange = document.getElementById("money-range");
var moneyValue = document.getElementById("money-count");

// Days
var daysRange = document.getElementById("days-range");
var daysValue = document.getElementById("days-count");

moneyValue.innerHTML = moneyRange.value;
daysValue.innerHTML = daysRange.value;

// Update the current slider value (each time you drag the slider handle)
moneyRange.oninput = function() {
    moneyValue.innerHTML = this.value;
}
daysRange.oninput = function() {
    daysValue.innerHTML = this.value;
}