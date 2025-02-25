document.getElementById("add-money-btn").addEventListener("click", function(event) {
    event.preventDefault();
    const mainBalance = getInputInnerTextById("balance");
    const amount = getInputById("amount-number");
    const pin = getInputById("pin");
    const account = document.getElementById("account-number").value;
    

    if(amount && pin){
        if(pin === 1234){
            const sum = mainBalance + amount;
            setInnerTextByValue("balance", sum);
            const transaction = document.getElementById("transaction-container");
            const transactionDiv = document.createElement("div");
            transactionDiv.classList.add("p-2","bg-gray-300","rounded-lg","drop-shadow-lg", "my-2");
            transactionDiv.innerHTML = `
            <h1 class="text-lg">${amount} added by ${account}</h1>
            `
            transaction.appendChild(transactionDiv);
        }else{
            alert("Invalid Pin! Please try again.");
        }
    }else{
        alert("Please fill in all fields.");
    }
})