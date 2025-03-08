document.getElementById("transfer-btn").addEventListener("click", function(event) {
    event.preventDefault();
    const account = document.getElementById("account-transfer").value;
    const mainBalance = getInputInnerTextById("balance");
    
    const amount = getInputById("amount-transfer");
    
    const pin = getInputById("transfer-pin");
    
    if(amount > mainBalance){
        alert("You don't have enough balance.");
        return;
    }

    if(amount && pin){
        if(pin === 1234){
            const remaining = mainBalance - amount;
            setInnerTextByValue("balance",remaining);

            const transaction = document.getElementById("transaction-container");
            const transactionDiv = document.createElement("div");
            transactionDiv.classList.add("p-2","bg-gray-300","rounded-lg","drop-shadow-lg", "my-2");
            transactionDiv.innerHTML = `
            <h1 class="text-lg">${amount} transferred to ${account}</h1>
            `
            transaction.appendChild(transactionDiv);
        }else{
            alert("Invalid Pin! Please try again.");
        }
    }else{
        alert("Please fill in all fields.");
    }
})