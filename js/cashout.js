document.getElementById("cashout-btn").addEventListener("click", function(event) {
    event.preventDefault();
    const balance = document.getElementById("balance").innerText;
    const convertBalance = parseInt(balance);
    const amount = document.getElementById("amount-cashout").value;
    const convertAmount = parseFloat(amount);
    const pin = document.getElementById("cashout-pin").value;
    const convertPin = parseInt(pin);

    if(amount && pin){
        if(convertPin === 1234){
            const remaining = convertBalance - convertAmount;
            document.getElementById("balance").innerText = remaining;
        }else{
            alert("Invalid Pin! Please try again.");
        }
    }else{
        alert("Please fill in all fields.");
    }
})