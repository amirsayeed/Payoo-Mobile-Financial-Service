document.getElementById("add-money-btn").addEventListener("click", function(event) {
    event.preventDefault();
    const balance = document.getElementById("balance").innerText;
    const convertBalance = parseInt(balance);
    const amount = document.getElementById("amount-number").value;
    const convertAmount = parseFloat(amount);
    const pin = document.getElementById("pin").value;
    const convertPin = parseInt(pin);

    if(amount && pin){
        if(convertPin === 1234){
            const sum = convertBalance + convertAmount;
            document.getElementById("balance").innerText = sum;
        }else{
            alert("Invalid Pin! Please try again.");
        }
    }else{
        alert("Please fill in all fields.");
    }
})