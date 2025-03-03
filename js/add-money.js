document.getElementById("add-money-btn").addEventListener("click", function(event) {
    event.preventDefault();
    const mainBalance = getInputInnerTextById("balance");
    const amount = getInputById("amount-number");
    const pin = getInputById("pin");
    const account = document.getElementById("account-number").value;
    const selectBank = document.getElementById("all-bank").value;
    
    if(amount < 0){
        alert("Enter valid amount");
        return;
    }

    if(amount && pin){
        if(pin === 1234){
            const sum = mainBalance + amount;
            setInnerTextByValue("balance", sum);
            const transaction = document.getElementById("transaction-container");
            const transactionDiv = document.createElement("div");
            transactionDiv.classList.add("p-2","bg-gray-300","rounded-lg","drop-shadow-lg", "mt-2");
            transactionDiv.innerHTML = `
            <h1 class="text-lg">Added money from ${selectBank}</h1>
            <h2 class="text-lg">Amount: ${amount}</h2>
            <p>Account number: ${account}</p>
            <p>Transection id: ${Math.round(Math.random()*100000000)}</p>
            `
            transaction.appendChild(transactionDiv);
        }else{
            alert("Invalid Pin! Please try again.");
        }
    }else{
        alert("Please fill in all fields.");
    }
})