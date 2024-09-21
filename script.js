const resultEl = document.querySelector("#result");
const inputEl = document.querySelector("#input");
const calculateEl = document.querySelector("#calculate");
const totalBillEl = document.querySelector("#total");

calculateEl.addEventListener("click", calculateTip)

function calculateTip(){
    let billAmount = parseFloat(inputEl.value);

    let tipAmount = (billAmount * .15).toFixed(2);
    console.log(billAmount);
    console.log((billAmount * .15).toFixed(2));
    console.log((billAmount * .15) + billAmount);

    resultEl.innerHTML = `You should tip $${tipAmount}`;
    totalBillEl.innerHTML = "Tour total bill will be $" + ((billAmount * .15) + billAmount).toFixed(2);
}



