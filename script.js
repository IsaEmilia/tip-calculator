//variables
const totalBill = document.getElementById('billTotal');
const tipPercent = document.getElementById('tipInput');
const split = document.getElementById('splitInput');
const tipOutput = document.getElementById('tipOutput');
const people = document.getElementById('splitOutput');
const bill = document.getElementById('newBill');
const tipValue = document.getElementById('tipValue');
const container = document.getElementById('container')



//functions
function tip() {
    tipOutput.innerHTML = tipPercent.value + "%";
    tipValue.innerHTML = (totalBill.value * (tipPercent.value / 100)).toFixed(2);
    console.log(tipPercent.value);
}

function splitInput() {
    people.innerHTML = split.value;
    newBill.innerHTML = (totalBill.value / split.value).toFixed(2);
    console.log(split.value);
}

//event listeners
tipPercent.addEventListener("input", tip);
split.addEventListener("input", splitInput);