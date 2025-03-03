doToggle("cashout","none");
doToggle("transaction","none");

document.getElementById("add-money-box").addEventListener("click", function() {
    doToggle("add-money","block");
    doToggle("cashout","none");
    doToggle("transaction","none");
});

document.getElementById("cashout-box").addEventListener("click", function() {
    doToggle("cashout","block");
    doToggle("add-money","none");
    doToggle("transaction","none");
});

document.getElementById("transaction-box").addEventListener("click", function(event) {
    doToggle("transaction","block");
    doToggle("cashout","none");
    doToggle("add-money","none");
});
